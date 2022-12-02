import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='container__characters'>
        <Characters></Characters>
      </div>
      
    </div>
  );
}

export default App;
