import { useParams } from "react-router-dom";

export const Item = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product</h1>
      <p>Item ID: {id}</p>
    </div>
  );
};