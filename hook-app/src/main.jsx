import React    from 'react'
import ReactDOM from 'react-dom/client'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHooks'
// import {SimpleForm} from './02-useEffect/SimpleForm' 
// import { CustomWithCustomHook } from './01-useState/CustomWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { MemoHook } from './06-Memos/MemoHook'
//import { Memorize } from './06-Memos/Memorize'
import './index.css'
//import {HooksApp} from  './HooksApp'
//import {CounterApp} from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CustomWithCustomHook ></CustomWithCustomHook> */}
    {/* <SimpleForm ></SimpleForm> */}
    {/* <FormWithCustomHook></FormWithCustomHook> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen></FocusScreen> */}
    <MemoHook  />
  </React.StrictMode>
)
