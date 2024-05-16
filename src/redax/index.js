import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import reducer from "./reducer"
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'

const persistedReducer = persistReducer({
    key: 'root', 
    storage
}, reducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
)

export default store
export const persistor = persistStore(store)