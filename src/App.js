import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './sections/Navbar';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
