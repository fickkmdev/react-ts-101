import * as React from 'react';
import CountComponent from './CountComponent';
import InputComponent from './InputComponent';
import './style.css';

const Child = React.forwardRef<unknown, {label: string}>((props,ref) => {
  const focus = React.useRef<number>()
  const inputRef1 = React.useRef<HTMLInputElement>();
  const inputRef2 = React.useRef<HTMLInputElement>();

  React.useImperativeHandle(ref, () => ({
    focus: ()=>{
      inputRef2.current.focus();
      focus.current=2;
    },
    unfocus: ()=>{
      if(focus.current===2){
        focus.current=1;
        inputRef1.current.focus()
      }else{
        focus.current = 2;
        inputRef2.current.focus()
      }
    }
  }), []);
  return (
  <div>
    <input ref={inputRef1}/>
    <input ref={inputRef2}/>    
  </div>);
});

export default function App() {
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const childRef = React.useRef()

  return (
    <div>
      <Child ref={childRef} label={''}/>
      <button onClick={()=>{childRef.current.focus()}}>focus</button>
      <button onClick={()=>{childRef.current.unfocus()}}>unfocus</button>
    </div>
  );
}
