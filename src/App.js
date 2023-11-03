import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import { ThemeContext } from "./Context/ThemeContext";
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<Homepage />} />
                <Route path='/about' element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
