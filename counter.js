import {useState} from "react";
function Counter(){
    let [count,setCount]=useState(0);
    // function Increment(){
    //     setCount(count+1);
    // }
    // function Decrement(){
    //     setCount(count-1);
    // }
    // function increment(){
    //     setCount(count+5);
    // }
    // function decrement(){
    //     setCount(count-5);
    // }
    
    //let allcommon=((value) => () => setCount(count+value))
    function allcommon(value){
        setCount(count+value)
    }
    return(
        <div className="c1">
            <h1>{count}</h1>
            {/* <button onClick={Increment}>+1</button>
            <button onClick={Decrement}>-1</button>
            <button onClick={increment}>+5</button>
            <button onClick={decrement}>-5</button> */}
            <button onClick={()=>allcommon(1)}>+1</button>
            <button onClick={()=>allcommon(-1)}>-1</button>
            <button onClick={()=>allcommon(5)}>+5</button>
            <button onClick={()=>allcommon(-5)}>-5</button>
        </div>
    );
}

export default Counter;