import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button1 } from "./Button1.jsx";
import { DropDown } from "./DropDown.jsx";

export const Item = () => {
  const { id } = useParams();           // get ID from URL
  const [item, setItem] = useState(null); // state to store fetched item
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    setLoading(true);
    fetch(`https://enebabackend.onrender.com/item/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Item not found");
        return res.json();
      })
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading item...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.item_name}</h1>
      <img src={item.item_image} alt={item.item_name} style={{ maxWidth: "300px" }} />
      <p>Console: {item.item_comsole}</p>
      <p>Region: {item.item_region}</p>
      <p>Price: €{item.item_price.toFixed(2)}</p>
      {item.item_sale === 1 && (
        <p>Sale Price: €{item.item_salePrice.toFixed(2)}</p>
      )}
      <p>Likes: {item.item_likes}</p>
      <div className="Choise-wrapper">
        <DropDown></DropDown>
        <Button1></Button1>
      </div>
      
    </div>
  );
};