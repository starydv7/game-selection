import './App.css';
import Home from './components/Home';
import Home2 from './components/Country';
import Filter from './components/Filter';
import Reverse from './components/Reverse';

function App() {
  return (
    <div className="App">
      <Home />
      <hr/>
      <Home2 />
      <hr/>
      <Filter />
      <hr />
      <Reverse/>
    </div>
  );
}

export default App;
