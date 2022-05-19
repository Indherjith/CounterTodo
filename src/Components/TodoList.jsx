import React from "react";

    const styles = {margin:"-10px 20px",fontWeight:"700",fontSize:"25px"}
    const TodoList=({data,onDelete})=>{
    console.log(data)
    return (<>
        {data.map((item)=>(
            <div key={item.id} style={{display:"flex",backgroundColor:"lightblue",borderRadius:"10px",width:"200px",margin:"auto",padding:"10px",marginTop:"10px"}}>
                <input type="checkbox" />
                <div style={styles}>{item.value}</div>
                <button onClick={()=>onDelete(item.id)}>del</button>
            </div>
        ))}
    </>
    )
}   
export default TodoList

// const [styles,setStyles] = React.useState({})
