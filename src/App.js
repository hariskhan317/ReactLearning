import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from './components/home'
import Product from './components/Products/products'
import List from './components/Products/list'
import Search from './components/Products/search'
 
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Product">Product</Link>
      </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Product" element={<Product />} >
                  <Route path="List" element={<List />} />
                  <Route path="Search" element={<Search />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
