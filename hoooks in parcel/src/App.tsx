import React, { useRef } from 'react'
import ExampleuseRef from './components/ExampleuseRef'

function App() {
  const test=useRef<HTMLInputElement|null>(null)
  console.log(test)
  function focus(){
    test.current!.focus()
  }
  return (
    <>
    {/* <input ref={test} type="text" />
    <button onClick={focus}>Focus</button> */}
    <ExampleuseRef />
    </>
  )
}

export default App