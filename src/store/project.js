import { createSlice } from '@reduxjs/toolkit'

let id = 0;

const slice = createSlice(
    {
        name: "project",
        initialState: [],
        reducers: {
            projectAdded: (project, action) => {
                project.push({ id: ++id, project: action.payload.project })
            }
        }

    }

)

export default slice.reducer
export const { projectAdded } = slice.actions