import './App.css';
import Header from './Context/Components/Header';
import Homepage from './Context/Pages/Homepage';
import About from './Context/Pages/About';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
