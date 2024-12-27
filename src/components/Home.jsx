import React, { useContext } from "react";
import { ApiContext } from "../ApiProvider";
// import { ApiContext } from "./ApiContext";

const Home = () => {
  const { data, loading } = useContext(ApiContext); // Access data from context

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <h5 style={{ margin: "10px 0", fontWeight: "bold" }}>
                {product.title}
              </h5>
              <p style={{ color: "green", fontWeight: "bold" }}>
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
