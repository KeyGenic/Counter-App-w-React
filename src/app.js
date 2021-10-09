import React ,{useState,useEffect} from 'react';
import './app.css';
import { Counter } from './components/CounterNum/counter-num.components';
import { LeftBtn } from './components/left-btn/left-btn-components';
import { RightBtn } from './components/right-btn/right-btn-.components';

const App = () => {
    const [counter,setCounter] = useState(0);
    const Increment = () => {
       setCounter((prev) => prev+1)
    }
    const decrement = () => {
        setCounter((prev) => prev-1)
    }
    return(
        <div className = "App">
           <Counter 
           counter = {counter} 
           leftBtn = {<LeftBtn props = {decrement}/>} 
           rightBtn = {<RightBtn props = {Increment}/>}
           />
        </div>
    )
}


export default App