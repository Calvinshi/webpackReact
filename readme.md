# css problem handle:
1.webpack中的css-loader的options中的modules属性为true时：

在jsx中引入时用 import XXX from 'xxx.css'

在jsx中使用方式： className={XXX.classname}

2.webpack中的css-loader的options中的modules属性为false时：

在jsx中引入时用 import 'xxx.css'

在jsx中使用方式： className="classname1 classname2"

# async function involve (redux-thunk function)

design: send the action and all state as parameters in the thunk function , waiting the thunk funciotn asynchronous done then execute really dispatch function.
when you are using thunk middleware , if you will return an function object , thunk will help to call the action once more with the arguemants dispatch  getState and exrea Argument.

```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

relevant middleware:  redux-promise redux-composable-fetch redux-observable redux-sage redux-observable

redux-saga fork founction 
```javascript
function* goAge(action){

    function* x() {
        yield setTimeout(() => {
           console.log('after you image loading success') 
        }, 2000);
    }

    const p = function() {
        return fetch(`api}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
    }
    const res = yield call(p)

    yield take(actionTypes.MATCH_TAKE)   // blocking until you triger action behaviour 

    yield fork(x)  // no blocking，when x()generator trigger ，run yield put right now 

    yield put({
        type: actionTypes.GET_AGE_SUCCESS,
        payload: res
    })

}

function* rootSaga() {
    yield takeEvery(actionTypes.GET_AGE, goAge)
}

export default rootSaga;

```
