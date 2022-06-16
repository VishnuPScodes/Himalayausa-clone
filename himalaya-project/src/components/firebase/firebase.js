
import {initializeApp} from 'firebase/app'

import {getAuth} from  'firebase/auth'


const app=initializeApp({
    apiKey: "AIzaSyBm4Fc7vN-HOTQRxiY4KnehghqIIjpwjtc",
    authDomain: "auth-development-ee2d5.firebaseapp.com" ,
    projectId:"auth-development-ee2d5" ,
    storageBucket:"auth-development-ee2d5.appspot.com",
    messagingSenderId:"58306128307",
    appId:"1:58306128307:web:2d8d116af51adc60f3c3c6"
})
export const auth=getAuth(app)
export default app

