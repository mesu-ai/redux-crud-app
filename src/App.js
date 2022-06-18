import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Navbar from './components/navbar/Navbar';
import AddStation from './pages/adstation/AddStation';
import UpdateStation from './pages/updatestation/UpdateStation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/addbooks' element={<AddStation/>}/>
        <Route path='/updatebooks' element={<UpdateStation/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
