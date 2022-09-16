import { createStore } from 'redux';


import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './rootReducer';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart'
  ]
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


  
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(persistedReducer);

export default store;