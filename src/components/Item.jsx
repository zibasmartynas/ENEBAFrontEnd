import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <button
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span>
  </button>

    </div>
  );
};