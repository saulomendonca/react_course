import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name, setName] = useState("Matheus")
  const redTitle = false;

  return (
    <div className="App">
      {/* Global CSS */}
      <h1>Css in React</h1>

      {/* Component CSS */}
      <MyComponent />
      <p>App paragraph</p>

      {/* inline CSS */}
      <p style={{backgroundColor: '#010101', padding: '10px', color: '#fff'}}> inline CSS </p>

      {/* dynamic inline CSS */}
      <p style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}> dynamic CSS </p>
      <p style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}> dynamic CSS </p>

      <p
        style={
          name === "Matheus" ? {
            color: '#fff',
            backgroundColor: "#5F5F5F"
          }: null
        }
      >
        Name: {name}
      </p>

      {/* Dynamic class */}

      <h2 className={redTitle ? "red-title" : "title"}>Dinamic class title</h2>

      {/* Scoped CSS Modules */}
      <Title />
      <h1 className="my_title">Not a component</h1>
    </div>
  );
}

export default App;
