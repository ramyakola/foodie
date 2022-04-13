import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Items from './items'
import App from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Categories from './categories';
import Footer from './footer';

function Header(){
        return (
           
        <div className='header'>
         <header>
        <h1>Happy Foodie</h1>
    </header>
    <Router>
    <nav>
        <ul>
            <li >
               <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Categories">  About </Link>
            </li>
            <li>
                Restaurants
            </li>
            <li>
                Orders
            </li>
            <li>
            <Link to="/categories"> Categories</Link>
            </li>
            <li>
            <Link to="/contact"> Contact</Link>
            </li>
        </ul>
        </nav>
        <Routes>
          <Route path="/items" element={<Items />} />
           
          <Route path="/footer" element={<Footer />} />
          <Route path="/categories" element={<Categories />} />
            
         
         
        </Routes>
    

        
        </Router>
  
    <Items />
    
  
    
        </div>
        
        

        );
}

export default Header ;