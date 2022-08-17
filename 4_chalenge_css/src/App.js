import logo from './logo.svg';
import './App.css';
import Cars from './components/Car';

function App() {
  const cars = [
    {id: 1, carName: 'F250', brand: "Ferrari", color: "Red", km: 0},
    {id: 2, carName: 'Onix', brand: "Chevrolet", color: "White", km: 0},
    {id: 3, carName: 'Clio', brand: "Renault", color: "Blue", km: 0},
    {id: 4, carName: 'XF', brand: "Jaguar", color: "black", km: 0}
  ]

  return (
    <div className="App">
      <h1>Chalenge 3</h1>

      {cars.map((car) => (
        <Cars key={car.id} carName={car.carName} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  );
}

export default App;
