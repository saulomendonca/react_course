import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const people = [
    { id: 1, name: 'Saulo', age: '36', profession: "Software developer"},
    { id: 1, name: 'Juliana', age: '37', profession: "Entrepreneur"},
    { id: 1, name: 'Rita', age: '5', profession: "Dog influencer"}
  ]
  return (
    <div className="App">
      { people.map( (person) => (
        <UserDetails name={person.name} age={person.age} profession={person.profession} />
      ))}
    </div>
  );
}

export default App;
