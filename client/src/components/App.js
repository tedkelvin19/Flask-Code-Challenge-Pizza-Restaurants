import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Restaurant from './Restaurant';
import RestaurantPizza from './RestaurantPizza';
import Pizza from './Pizza';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/restaurantpizza' element={<RestaurantPizza/>}/>
        <Route path='/restaurants/:id' element={<Restaurant/>}/>
      </Routes>
    </div>
  );
}

export default App