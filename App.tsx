import * as React from 'react';

const contextValue = React.createContext(undefined);

function Child1() {
  return (
    <contextValue.Consumer>
      {(props) => {
        return <div>child1 context: {props}</div>;
      }}
    </contextValue.Consumer>
  );
}

function Child2() {
  const props = React.useContext(contextValue);
  return <div>child2 context: {props}</div>;
}

export default function App() {
  const [value, setValue] = React.useState<string>();

  return (
    <contextValue.Provider value={value}>
      <div>
        <Child1/>
        <Child2/>
        <input onChange={(e) => setValue(e.target.value)} />
      </div>
    </contextValue.Provider>
  );
}
