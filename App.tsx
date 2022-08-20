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
  const [name, setName] = React.useState<string>();
  const [names, setNames]= React.useState<string[]>([]);

  const handleSubmit = (event) =>{
    event.preventDefault();
    setNames((ns)=> {return [...ns, name]})
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>submit</button>
      </form>
      <ul>
      {names.map((n, index)=><li key={index}>{n}</li>)}
      </ul>
    </div>
  );
}
