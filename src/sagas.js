import { all, call, delay, put, takeEvery , select , } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* watchLog(){
    yield takeEvery("*",function* logger(action) {
        const state = yield select()

        console.log("action " ,action);
        console.log("state after " , state);
    })
}

export function* incrementAsync() {
  yield delay(1000)//here to put your ajax request
  yield put({type: 'INCREMENT'}) // put to dispatch action 
}

export function* watchIncrementAsync() {
    // take /takeEvery mapping the action to effect
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchLog),
    call(watchIncrementAsync),
  ])
}