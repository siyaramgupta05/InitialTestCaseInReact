import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    const [color,setColor]=useState()
    useEffect(()=>{
        if(count<0){
            setColor('red')
        }else if(count>5){
            setColor('yellow')
        }
        else{setColor('')}
    },[count])
    
  return (
    <>
        <h1>Counter</h1>
        <p data-testid="counterValue" className={color}><strong>{count}</strong></p>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Descrease</button>


        
  <style>
    {`
    .red{color:red}
    .yellow{color:yellow}
    `}
  </style>
    </>
    
  )
  
  
}
export default Counter