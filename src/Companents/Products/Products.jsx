import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="card m-2" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={'/view/' + product.id} className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
