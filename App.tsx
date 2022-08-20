import * as React from 'react';
import CountComponent from './CountComponent';
import InputComponent from './InputComponent';
import './style.css';

const Header = (props) =>{
  return (
    <h1 style={{color:props.color}}>{props.title}</h1>
  )
}

Header.defaultProps = {
  color:'red'
}

export default function App() {
  const [title, setTitle] = React.useState<string>('init value');
  const [count, setCount] = React.useState<number>(0);
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(()=>{
    setShow(count>=0&&count<=5&&title==='show')
  },[title])

  return (
    <div>
      {show&&<h3>{title}</h3>}
      <InputComponent title={title} setTitle={setTitle}/>
      <Header title={`count : ${count}`}/>
      <CountComponent count={count} setCount={setCount}/>
      {count>0&&<button onClick={()=>setCount((c)=>c-1)}>decrease</button>}
    </div>
  );
}
