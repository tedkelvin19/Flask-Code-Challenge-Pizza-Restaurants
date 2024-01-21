import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Restaurant from './Restaurant';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurants/:id' element={<Restaurant/>}/>
      </Routes>
    </div>
  );
}

export default App