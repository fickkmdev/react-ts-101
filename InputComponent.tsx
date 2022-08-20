import * as React from 'react';

export default function InputComponent(props){
  return (
    <div>
      <input 
        value = {props.title}
        onChange={(e)=>props.setTitle(e.target.value)}
      />
    </div>
  )
}