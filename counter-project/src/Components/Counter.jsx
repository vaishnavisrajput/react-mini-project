import React from "react";
import "../App.css";
import { useState } from "react";


function Counter(){
    const[counter, setCounter] = useState(0);

    
    
    const handleIncrement = () => {
        if (counter < 20)
        setCounter(counter + 1)
    }
    const handleDecrement = ()=> {
        if (counter > 1)
        setCounter(counter - 1);
    }

    // const handleCount = () => {
    //     if(counter){
    //         setCounter(counter + 1)
    //     }
    //     else{
    //         setCounter(counter - 1);
    //     }
    // }
    return(
        <div>
            <div className="count-div">
                {counter}
            </div>
            <button className="button" onClick={handleDecrement}>Tap for decrement</button>
            <button className="button" onClick={handleIncrement}>Tap for increment</button>
        </div>
    )
}

 export default Counter;