import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducer";




export const store=legacy_createStore(authReducer,applyMiddleware(thunk))


store.subscribe(()=>{
    console.log('store is updated',store.getState())
})

console.log(store.getState())