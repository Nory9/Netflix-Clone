import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home.js';
import FavList from './components/favList/FavList.js';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
     {/* <Home/> */}
   <Routes>
    <Route path='/home' element ={<Home/>}></Route>
    <Route path='/favList' element ={<FavList/>}></Route>
  </Routes>
  </>
  );
 
}

export default App;
