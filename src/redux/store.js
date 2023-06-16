import rootReducer from './root-reducer'
// import logger from 'redux-logger'; // console dos reducers para debug.

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger]
})

export default store;