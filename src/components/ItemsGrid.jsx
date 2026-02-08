import "./ItemsGrid.css";
//import React, {useState, useEffect} from "react";
import { FiHeart } from "react-icons/fi";
import React from "react";
import { Link } from "react-router-dom";

/*export const ItemsGrid = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch("http://localhost:3001/list")
      .then((res) => res.json())
      .then((data) => {
        //console.log("Fetched products:", data); // debug in React
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []); // empty array = run once on mount

  return (
    <div className="grid">
      {products.map((p) => (
        <div key={p.id} className="grid-item">
          <img src={p.item_image} alt={p.item_name} className="product-img" />
          <h3>{p.item_name}</h3>
          <h3 className="regioncolor">{p.item_region}</h3>
          <h2>€{p.item_price}</h2>
          <p className="likes">
            <FiHeart size={20} color="grey" /> {p.item_likes}
          </p>
        </div>
      ))}
    </div>
  );
}*/

export const ItemsGrid = ({ products })=>{
//console.log(products);
//<img src={p.item_image} alt={p.item_name} className="product-img" />

    return(
    <div className="grid">
        {products.map((p) => (
        <Link
          to={`/product/${p.item_id}`}
          key={p.item_id}
          className="grid-item-link"
        >


            <div key={p.id} className="grid-item">
                <div className="image-wrapper">
    <img
      src={p.item_image}
      alt={p.item_name}
      className="product-img"
    />

    <div className="image-overlay">
      <span className="overlay-text"><h5>{p.item_comsole}</h5></span>
    </div>
  </div>
  <div className="infoTop"><h5>{p.item_name}</h5>
                <h5 className="regioncolor">{p.item_region}</h5></div>
  <div className="infoBottom">{p.item_sale === 1 ? (
                  <>
                <p className="from">From <span className="oldPrice">€{p.item_price.toFixed(2)}</span> <span className="sale">-{Math.round(100-(p.item_salePrice*100/p.item_price))}%</span></p>
                <h2>€{p.item_salePrice.toFixed(2)}</h2>
                <p className="cashback">Cashback: €{(p.item_salePrice*0.11).toFixed(2)}</p>
                </>
                ): (
                  <>
                  <p className="from">From</p>
                  <h2>€{p.item_price.toFixed(2)}</h2>
                <p className="cashback">Cashback: €{(p.item_price*0.11).toFixed(2)}</p>
                  </>
                )}
                

                
                <p className="likes">
                    <FiHeart size={20} color="grey"/> {p.item_likes}
                </p></div>
          

                
                
            </div>
            </Link>
        ))}
    </div>
    );
};
        