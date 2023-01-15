import './App.css';
import Card from './Card';
import FilterPage from './FilterPage';
import { Navbar } from './Navbar';
import Records from './records.json'
function App(props) {
  return (
    <div className="App">
    <Navbar/>
    <div className='filterbg'>
    <FilterPage/>
    </div>
  
  

    </div>
  );
}

export default App;
