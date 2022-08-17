import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from './api'
import entities from './entities';
import moment from 'moment'
let lastId = 0 ; 
const slice = createSlice({
    name : "bugs",
    initialState : {
        list : [], 
        loading : false, 
        lastFetch : null
    }, 
    reducers : { 
        bugRequested : (bugs, action )=>
        {
            bugs.loading = true
        },
        bugsRequestFailed : (bugs, action)=>
        {
            bugs.loading = false
        } , 
        bugsRecieved : (bugs, action)=>
        {
            bugs.list = action.payload
            bugs.loading = false
            bugs.lastFetch = Date.now()
        },
        bugAdded : (bugs, action) =>
        {
            bugs.list.push(action.payload)
        }, 
        bugRemoved : (bugs, action)=>
        {
           bugs.list.filter(bug => bug.id !== action.payload.id) 
        }, 
        bugResolved : (bugs , action)=>
        {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true
        }, 
        userAssigned : (bugs, action)=>
        {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].userId = action.payload.userId
        }
    }
})


// export const bugAdded = createAction("bugAdded")
// export const bugRemoved = createAction("bugRemoved")
// export const bugResolved = createAction("bugResolved")




// export default createReducer([], {
//     [bugAdded.type] : (bugs, action) => {
//         bugs.push({
//             id : ++lastId,
//             description : action.payload.description, 
//             resolved : false
//         })
//     } , 

//     [bugResolved.type] : (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs[index].resolved = true
//     },
//     [bugRemoved.type] : (bugs, action) => {
//         bugs.filter(bug=> bug.id !== action.payload.id);
//     }
// })

export default slice.reducer;

export const {bugAdded, bugRemoved, bugResolved , bugsRecieved, bugRequested, bugsRequestFailed , userAssigned} = slice.actions;

// export const getUnResolvedBugs = state =>
//     {
//         return state.entities.bugs.filter(bug=> !bug.resolved)
//     }
const url = '/bugs'

export const loadBugs = () => (dispatch, getState) =>
{
    const {lastFetch}  = getState().entities.bugs
    const diffInMinutes = moment().diff(moment(lastFetch)  ,'minutes')

    if(diffInMinutes < 10)
    {
        return; 
    }
    dispatch(apiCallBegan({
        url, 
        onStart : bugRequested.type,
        //because bugs recieved is a function 
        //thats why we used the type prperty
        onSuccess : bugsRecieved.type,
        onError : bugsRequestFailed.type 
    }))
}

export const addBug = bug => apiCallBegan(
    {
        url,
        method : "post", 
        data : bug, 
        onSuccess : bugAdded.type,
    }
)
export const resolveBug = id => apiCallBegan({
    url : url+"/"+id,
    method : 'patch', 
    data : {resolved : true}, 
    onSuccess : bugResolved.type 
}) 
export const assignUser = (id, userId)=>apiCallBegan({
    url : url+"/"+id, 
    method : "patch", 
    data : {userId : userId }, 
    onSuccess : userAssigned.type
})
export const getUnResolvedBugs =  createSelector(
    state => state.entities.bugs, 
    bugs=> bugs.filter(bug=> !bug.resolved)
)