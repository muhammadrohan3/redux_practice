import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'

let lastId = 0 ; 
const slice = createSlice({
    name : "bugs",
    initialState : [], 
    reducers : { 
        bugAdded : (bugs, action) =>
        {
            bugs.push({
                id : ++lastId,
                description : action.payload.description, 
                resolved : false
            })
        }, 
        bugRemoved : (bugs, action)=>
        {
           bugs.filter(bug => bug.id !== action.payload.id) 
        }, 
        bugResolved : (bugs , action)=>
        {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true
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

export const {bugAdded, bugRemoved, bugResolved} = slice.actions;
