import './App.css';
import {useState} from "react";

function App() {
    // let name = "Mahdi"
    const [name, setName] = useState('Mahdi')

    const click = () => {
        // name = "Amir"
        setName('amir')
    }

  return (
    <div className="App">
        <h1>{name}</h1>
      <button onClick={click}>Click me</button>
    </div>
  );
}

export default App;
