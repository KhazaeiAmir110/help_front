import './App.css';
import {useState} from "react";
import * as events from "events";

function App() {
    // let name = "Mahdi"
    const [name, setName] = useState('Mahdi')

    // list on useState
    const [events , setEvents] = useState([
    {title: 'In the name of god', id: 1},
    {title: 'hellow word', id: 2},
    {title: 'i am amir hossein', id: 3},
    {title: 'In the name of god', id: 4}
    ])
    const click = () => {
        // name = "Amir"
        setName('amir')
    }

  return (
    <div className="App">
        <h1>{name}</h1>
      <button onClick={click}>Click me</button>

        <hr />
        {/*// usage list*/}
        {
        events.map((event, index) => (
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={event.id}>
                <h3 style={{color:'blue'}}>{index}_ </h3> <h3>{event.title}</h3>
            </div>
        ))
        }
        <hr />
    </div>
  );
}

export default App;
