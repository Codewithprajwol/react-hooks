import React, { useEffect, useRef, useState } from 'react'
//? if i want to show how much the component render then instead of useState that cause mulitple unnecessary render ....where useRef doesnot re-render and might be efficient.

function ExampleuseRef() {
    let renderCount=useRef<number>(0);
    const [count,setCount]=useState<number>(0);
    console.log(renderCount.current)
    useEffect(()=>{
        renderCount.current=renderCount.current + 1;
    },[count])
  return (
   <>
    <div>ExampleuseRef</div>
    <button onClick={()=>{setCount(count+1)}}>render</button></>

  )
}

export default ExampleuseRef