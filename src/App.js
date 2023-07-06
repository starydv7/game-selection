import './App.css';
import Home from './components/Home';
import Home2 from './components/Country';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Home />
      <hr/>
      <Home2 />
      <hr/>
      <Filter/>
    </div>
  );
}

export default App;
