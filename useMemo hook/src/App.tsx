import React, { useEffect, useMemo, useState } from 'react'

function App() {
    const [number,setNumber]=useState<number>(0);
    const [dark, setDark]=useState<boolean>(false);
    const doubleNumber=useMemo(()=>slowFunction(number),[number])  
    const styleTheme=useMemo(()=>({
        backgroundColor:dark? 'black' :'white',
        color:dark? 'white' :'black'
    }),[dark])
    useEffect(()=>{
        console.log('Theme Changed')
    },[styleTheme])

  return (
   <>
   <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
   <button onClick={()=>setDark(prevState=>!prevState)}>Change Theme</button>
   <div style={styleTheme}>{doubleNumber}</div>
   </>
  )
}
function slowFunction(num:number){
    for(let i=0;i<=20000000;i++){
    }
    if(num){
        return num *2;
    }
}

export default App