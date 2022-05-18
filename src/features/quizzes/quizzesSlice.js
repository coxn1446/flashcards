import {createSlice} from "@reduxjs/toolkit"

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state,action) => {
            state.quizzes[id] = {
                id: action.id,
                name: action.name,
                topicId: action.topicId,
                cardIds: action.cardIds
            }
        },
        addQuizId: (state,action) => {
            const topics = state.topics.topics;
            for (const property in topics) {
                //console.log(`${property}: ${topics[property]}`)
                if (property === action.topicId) {
                    topics[property][quizIds].push(action.quizId)
                }
            }
        }

    }
})

export const selectQuizzes= state => state.quizzes.quizzes;
export const quizzesReducer = quizzesSlice.reducer;
export const { addQuiz, addQuizId } = quizzesSlice.actions;