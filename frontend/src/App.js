import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import FetchGetTest from './components/Testing/Testing';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route 
          path = '/'
          element = {<Home/>}/>
          <Route
          path = '/login'
          element = {<Login/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
