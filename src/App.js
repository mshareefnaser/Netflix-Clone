import './App.css';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_ from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar_ />
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/favorites" element={<FavList/>} ></Route>
    </Routes>
    </>
    );
}

export default App;
