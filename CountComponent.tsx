import * as React from 'react'

export default function CountComponent(props){
  return (
    <div>
      <div style={{marginTop:'30px'}}>{props.count}</div>
      <button
        onClick={()=>props.setCount((c)=>c+1)}
      >increase</button>
    </div>
  )
}