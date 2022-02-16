import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import NavbarHeader from './components/Navbar/Navbar';



function App() {
  return (
    <>
      {/* <Home /> */}
      <NavbarHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favList' element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
