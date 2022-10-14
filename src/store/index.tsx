import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from "./reducers";

// export default configureStore({
//     reducers,

// })