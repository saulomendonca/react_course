import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <MyForm user={{ name: 'Jose', email: 'jose@gmail.com' }}/>
    </div>
  );
}

export default App;
