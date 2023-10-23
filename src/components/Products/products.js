import React from 'react';
import { Outlet,Link } from "react-router-dom";

function Product(props) {
    return (
        <div>
          this Product
          <br/>
          <div>
          <Link to="/Product/List">list</Link>
            <Link to="/Product/Search">search</Link>
   
          
          </div>
        <Outlet/>
        </div>
    );
}

export default Product;