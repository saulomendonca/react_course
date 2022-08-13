import './App.css';
import Img1 from './assets/img2.png';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  const name = "saulo"
  const cars = [
    {id: 1, brand: "Ferrari", color: "Red", km: 0},
    {id: 2, brand: "Chevrolet", color: "White", km: 0},
    {id: 3, brand: "Renault", color: "Blue", km: 0},
    {id: 4, brand: "Jaguar", color: "black", km: 0}
  ]

  const [message, setMessage] = useState("")

  function showMessage(){
    console.log("Event message");
  }
  
  function handleMessage (msg) {
    setMessage(msg);
  }


  return (
    <div className="App">
      <h1>Advanced react</h1>
      <div>
        <img src="/img1.png" alt="logo" width="200px"/>
        <br />
        <img src={Img1} alt="logo" width="200px" />
      </div>

      <ManageData></ManageData>

      <ListRender></ListRender>

      <ConditionalRender></ConditionalRender>

      <ShowUserName name={name} /> 
      
      <CarDetails  km={100001} brand="VW"  color="Azul" />
      
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}

      <Fragment text="test" />

      <Container myValue="test">
        <p>This is the content</p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />
     

      {/* state lift */}
      <Message message={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      

    </div>
  );
}

export default App;
