import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from './api'

let lastId = 0 ; 
const slice = createSlice({
    name : "bugs",
    initialState : {
        list : [], 
        loading : false, 
        lastFetch : null
    }, 
    reducers : { 
        bugsRecieved : (bugs, action)=>
        {
            bugs.list = action.payload
        },
        bugAdded : (bugs, action) =>
        {
            bugs.list.push({
                id : ++lastId,
                description : action.payload.description, 
                resolved : false
            })
        }, 
        bugRemoved : (bugs, action)=>
        {
           bugs.list.filter(bug => bug.id !== action.payload.id) 
        }, 
        bugResolved : (bugs , action)=>
        {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true
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

export const {bugAdded, bugRemoved, bugResolved , bugsRecieved} = slice.actions;

// export const getUnResolvedBugs = state =>
//     {
//         return state.entities.bugs.filter(bug=> !bug.resolved)
//     }
const url = '/bugs'
export const loadBugs = ()=>apiCallBegan({
    url, 
    //because bugs recieved is a function 
    //thats why we used the type prperty
    onSuccess : bugsRecieved.type, 
})

export const getUnResolvedBugs =  createSelector(
    state => state.entities.bugs, 
    bugs=> bugs.filter(bug=> !bug.resolved)
)