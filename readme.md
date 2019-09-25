#css problem handle:
1.webpack中的css-loader的options中的modules属性为true时：

在jsx中引入时用 import XXX from 'xxx.css'

在jsx中使用方式： className={XXX.classname}

2.webpack中的css-loader的options中的modules属性为false时：

在jsx中引入时用 import 'xxx.css'

在jsx中使用方式： className="classname1 classname2"

#async function involve (redux-thunk function)

design: send the action and all state as parameters in the thunk function , waiting the thunk funciotn asynchronous done then execute really dispatch function 。
export const sampleAsyncAction = () => {
    return (dispatch, getState) => {
        // here to dispatch the action in appropriate time
    }
};

relevant middleware:  redux-promise redux-composable-fetch redux-observable redux-sage redux-observable