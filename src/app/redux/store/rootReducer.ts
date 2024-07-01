import { combineReducers } from "@reduxjs/toolkit";
import quoteReducer from "../slices/quoteSlice";
// Import other reducers here

const rootReducer = combineReducers({
  quote: quoteReducer,
  // Add other reducers here
});

export default rootReducer;
