import './App.css';
import { SearchBar } from './components/SearchBar';
import { ItemsGrid } from './components/ItemsGrid';
import { ItemsCount } from './components/ItemsCount';
import { useState, useEffect } from 'react';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Routes, Route, Link } from "react-router-dom";
import { Item } from "./components/Item";
import { Creator } from './components/Creator';
import {AdminPage} from './components/Admin';

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(()=>{
    fetch(`https://enebabackend.onrender.com/list?search=${encodeURIComponent(search)}`)
    .then(res => res.json())
    .then(data => setProducts(data)) //console.log("Fetched ", data)})
    .catch(err=>console.error("Error fetching products: ", err));
  }, [search]);

  return (
    <div className="App">
      <button className="floating-button">
        Report a problem
      </button>
      <div className='header'>
          <div className='search-bar-container'>
            <img src="https://static.eneba.games/branding/v2/logoFull.svg" alt="ENEBA" className='search-logo'/>
            <SearchBar search={search} setSearch={setSearch}></SearchBar>

            <div className='flagCircle'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Lithuania_%281918%E2%80%931940%29.svg/250px-Flag_of_Lithuania_%281918%E2%80%931940%29.svg.png' alt="LT" className='flag-icon'/>
            </div>
            
            <div className='searchTextIcons'>
                <p className='languageText'>English EU | EUR</p>
                <div className='iconGroup'>
                  <FiHeart size={25} color='white'></FiHeart>
                  <FiShoppingCart size={25} color='white'></FiShoppingCart>
                  <div>
                  <div className='profileIcon' onClick={toggleMenu}>
                    <img src='https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' alt="profile" className='profile-icon'/>
                  </div>

                   {isOpen && (
    <div className="dropdown-menu">
      <Link to="/creator" className="dropdown-item" onClick={() => setIsOpen(false)}>
        Creator Page
      </Link>

      <Link to="/admin" className="dropdown-item" onClick={() => setIsOpen(false)}>
        Admin Page
      </Link>
    </div>
  )}
                  </div>
                </div>
                  
            
            </div>

            
              
            
            
        </div>
      </div>
      
      {/*<div className='body'>
        <ItemsCount products={products}></ItemsCount>
        <div className='items-container'>
          <ItemsGrid products={products}></ItemsGrid>
        </div>

      </div>*/}
      
      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="body">
              <ItemsCount products={products} />
              <div className="items-container">
                <ItemsGrid products={products} />
              </div>
            </div>
          }
        />

        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/product/:id" element={<Item />} />
      </Routes>


    </div>
  );
}

export default App;
