import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useAuthenticationContext } from './hooks/useAuthenticationContext';


function App() {
  const {user} = useAuthenticationContext();
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route 
          path = '/'
          element = {user ? <Home/> : <Navigate to="/login"/>}/>
          <Route
          path = '/login'
          element = {!user ? <Login/> : <Navigate to = "/"/>}/>
          <Route
          path = '/signup'
          element = {!user ? <SignUp/> : <Navigate to = "/"/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
