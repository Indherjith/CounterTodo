import React from "react";

const Counter=()=>{
    const [count,setcount]=React.useState(0);
    const [colors,setcolors]=React.useState("green")
    
    function handlecolor(x){
        setcount(x)
        if(x%2===0){
            setcolors("green")
        }
        else {
            setcolors("red")
        }
    }
    let styles={color:colors}
    return(
        <>
            <h1 style={styles}>Counter : {count}</h1>
            <button onClick={()=>handlecolor(count+1)}>Increment</button>
            <button onClick={()=>handlecolor(count-1)}>Decrement</button>
            <button onClick={()=>handlecolor(count*2)}>Double</button>
        </>
    )
}
export default Counter;