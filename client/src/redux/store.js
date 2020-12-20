import reducerGlobalData from './reducer-global-user-data'
import reducerAuth from './reducer-auth'
import reducerCodeData from './reducer-code-input-page'
import reducerSubjects from './reducer-subject';
import reducerLogout from './reducer-logout'
import reducerAdmin from './reducer-admin'
import { composeWithDevTools } from 'redux-devtools-extension';
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    reducerAdmin,
    reducerGlobalData,
    reducerAuth,
    reducerLogout,
    reducerCodePage:reducerCodeData,
    reducerSubjects:reducerSubjects
})

const store = createStore(reducers, composeWithDevTools())

export default store