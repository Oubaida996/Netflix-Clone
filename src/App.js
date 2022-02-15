import { Routes, Route  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';



function App() {
  return (
    <>
    {/* <Home /> */}
    
<Routes>
  <Route exact path='/' element={<Home />} />
</Routes>
    </>
  );
}

export default App;
