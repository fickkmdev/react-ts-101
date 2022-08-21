import * as React from 'react';

function useTextTransform(textInput : string){
  const [text, setText] = React.useState(textInput)
  const upperCase = () =>{
    setText(text.toUpperCase())
  }
  const lowerCase = () =>{
    setText(text.toLowerCase())
  }
  return [text, setText, upperCase, lowerCase]
}

export default function App() {
  const [text, setText, upper, lower] = useTextTransform('react 101')

  return (
    <div>
      <div>{text}</div>
      <button onClick={upper}>upper</button>
      <button onClick={lower}>lower</button>
      <input onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}
