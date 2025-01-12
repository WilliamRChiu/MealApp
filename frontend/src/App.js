import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
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
          <Route
          path = '/signup'
          element = {<SignUp/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
