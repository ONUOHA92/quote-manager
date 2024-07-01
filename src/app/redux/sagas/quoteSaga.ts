import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { createQuote } from "../../api/quoteApi";

import {
  createQuoteRequest,
  createQuoteSuccess,
  createQuoteFailure,
} from "../slices/quoteSlice";
function* handleCreateQuote(action: PayloadAction<any>): Generator {
  try {
    // Call your API function createQuote with action.payload
    const response: any = yield call(createQuote, action.payload);

    // Check if response has status "success" (or modify condition based on actual response structure)
    if (response.status === "success") {
      // Dispatch createQuoteSuccess with the data from response.data
      const data = {
        ...response.data,
        message: response.message, // Add the message from the outer response
      };

      yield put(createQuoteSuccess(data));
    } else {
      // If API response indicates failure, dispatch createQuoteFailure with the error message
      yield put(createQuoteFailure(response.message));
    }
  } catch (error: any) {
    // Dispatch createQuoteFailure with the error message if call fails
    yield put(createQuoteFailure(error.message));
  }
}

export function* quoteSaga(): Generator {
  // Take every createQuoteRequest action and call handleCreateQuote
  yield takeEvery(createQuoteRequest.type, handleCreateQuote);
}
