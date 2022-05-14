import { configureStore } from "@reduxjs/toolkit";
import { topicsReducer } from "../../src/features/topics/topicsSlice"

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
