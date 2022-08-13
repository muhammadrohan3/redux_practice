import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
const slice = createSlice({
    name : 'member', 
    initialState : [], 
    reducers : {
        bugAssigned : (member , action)=>
        {
            member.push({bugId :action.payload.bugId , memberId : action.payload.memberId})
        }
    }
})
export default slice.reducer
export const {bugAssigned} = slice.actions


//the function getAssignedMember is a function that takes 
//userId as an argument and returns the function createSelector
//so it is a super function in the form mentioned below
// function getAssignedMember(userId)
// {
//     return createSelector(
//         state=> state.entities.member, 
//         member => member.filter(member=> member.memberId===userId)
//     )
// }
export const getAssignedMember = userId => createSelector(
    state=> state.entities.member, 
    member => member.filter(member=> member.memberId===userId)
)