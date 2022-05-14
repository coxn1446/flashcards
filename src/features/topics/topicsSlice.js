import {createSlice} from "@reduxjs/toolkit"

const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.id] = {
                id: action.id,
                name: action.name,
                icon: action.icon,
                quizIds: []
            }
        }
    }
})

export const selectTopics= state => state.topics.topics;
export const topicsReducer = topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;