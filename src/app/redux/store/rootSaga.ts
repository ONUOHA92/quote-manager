import { all, fork } from "redux-saga/effects";
import { quoteSaga } from "../sagas/quoteSaga";
// Import other sagas here

export function* rootSaga() {
  yield all([fork(quoteSaga) /*, fork(otherSagas) */]);
}
