import './App.css';
import Challenge from './components/Challenge';
import Event from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Event />
      <Challenge />
    </div>
  );
}

export default App;
