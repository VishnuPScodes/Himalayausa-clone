import { legacy_createStore } from "redux";
import { authReducer } from "./reducer";




export const store=legacy_createStore(authReducer)


store.subscribe(()=>{
    console.log('store is updated',store.getState())
})

console.log(store.getState())