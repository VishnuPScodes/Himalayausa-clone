import { legacy_createStore } from "redux";
import { authReducer } from "./reducer";




export const store=legacy_createStore(authReducer)


store.subscribe(()=>{
    console.log('store is updated',store.getSate())
})

console.log(store.getSate())