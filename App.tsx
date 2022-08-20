import * as React from 'react';
import './style.css';

export default function App() {
  const [str, setStr] = React.useState<string>('init value');
  const [count, setCount] = React.useState(0);
  const ins = () =>{
    setCount((c)=>c+1)
    setCount((c)=>c+1)
    setCount((c)=>c+1)
    setCount((c)=>c+1)
  }
  return (
    <div style={{display:'flex', justifyContent:'center', alignItem:'center', flexDirection:'column'}}>
      <div>{str}</div>
      <input 
        value = {str}
        onChange={(e)=>setStr(e.target.value)}
      />
      <div style={{marginTop:'30px'}}>{count}</div>
      <button
        onClick={ins}
      >increase</button>
    </div>
  );
}
