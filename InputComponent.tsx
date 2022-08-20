import * as React from 'react';

export default function InputComponent(props){
  return (
    <div>
      <h3>{props.title}</h3>
      <input 
        placeholder = {props.title}
        onChange={(e)=>props.setTitle(e.target.value)}
      />
    </div>
  )
}