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
  const [email, setEmail] = React.useState<string>();
  const [password, setPasswoed]= React.useState<string>();

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert("success")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e)=>setPasswoed(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  );
}
