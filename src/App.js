import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home'
import Product from './components/Products/products'
import List from './components/Products/list'
import Profile from './components/profile'
import Search from './components/Products/search'
import { useState, createContext } from "react";

export const appContext = createContext();

function App() {
  const [user, setUser] = useState("Haris");
  return (
    <div className="App">
      <appContext.Provider value={{user, setUser}} >
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Product">Product</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Product" element={<Product />} >
              <Route path="List" element={<List />} />
              <Route path="Search" element={<Search />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </appContext.Provider>
    </div>
  );
}

export default App;
