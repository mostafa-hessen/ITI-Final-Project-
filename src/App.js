import './App.css';
import Button from 'react-bootstrap/Button';
import Bestfood from './Component/HomeUser/Bestfood/Bestfood';
import FilterItems from './Component/HomeUser/FilterItems/FilterItems';
import FoodCard from './Component/HomeUser/FoodCard/FoodCard'


// or less ideally
// import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
    <h1>
      hi 

    </h1>
 
    <Button className=''>heloo from bootsrtab</Button>
 

    
    <Button>heloo from bootsrtab</Button>
    <FoodCard/>
    <FilterItems/> 
    <Bestfood/>
    
 
    </div>
    
  );
}

export default App;
