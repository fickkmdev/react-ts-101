import * as React from 'react';
import CountComponent from './CountComponent';
import InputComponent from './InputComponent';
import './style.css';

export default function App() {
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const inputRef1 = React.useRef<HTMLInputElement>();
  const inputRef2 = React.useRef<HTMLInputElement>();

  return (
    <div>
      <input
        ref={inputRef1}
        onChange={(e) => {
          setValue1(e.target.value);
          if (e.target.value.length > 2) {
            inputRef2.current.focus();
          }
        }}
      />
      <input ref={inputRef2} />

      <button>click</button>
    </div>
  );
}
