import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Admin from './Components/Admin';


function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/admin" element = {<Admin />} />
      </Routes>
    </>
  );
}

export default App;
