import React from 'react'
import ReactDOM from 'react-dom/client'
import {SimpleForm} from './02-useEffect/SimpleForm' 
// import { CustomWithCustomHook } from './01-useState/CustomWithCustomHook'
import './index.css'
//import {HooksApp} from  './HooksApp'
//import {CounterApp} from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CustomWithCustomHook ></CustomWithCustomHook> */}
    <SimpleForm ></SimpleForm>
  </React.StrictMode>
)
