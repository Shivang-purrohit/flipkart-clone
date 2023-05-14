import './App.css';
import Card from './Card';
import FilterPage from './FilterPage';
import { Navbar } from './Navbar';
import Records from './records.json'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import  Addtocart  from './Addtocart'
import Cart from './Cart';
function App(props) {
  return (
<>
<Main>
 <div className="App">
    <Navbar/>

    <div className='filterbg'>
    <FilterPage/>
    </div>
   </div>

   {/* <Routes>
     <Route path= '/cart' element= {<Cart/>}/>
    </Routes> */}
    </Main>
   </>
  );
}

export default App;
