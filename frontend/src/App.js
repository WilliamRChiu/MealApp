import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
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
        </Routes>
      </div>
    <FetchGetTest/>
    </BrowserRouter>
  );
}

export default App;
