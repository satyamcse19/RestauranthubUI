import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // You can use react-router to handle navigation

export const ProductDetais = () => {
  const [products, setProducts] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Example product data, replace with actual API call
    const fetchedProducts = [
      {
        productId: 1,
        name: 'Sample Product 1',
        categoryName: 'Category 1',
        price: 19.99,
      },
      {
        productId: 2,
        name: 'Sample Product 2',
        categoryName: 'Category 2',
        price: 29.99,
      },
      {
        productId: 3,
        name: 'Sample Product 3',
        categoryName: 'Category 3',
        price: 49.99,
      },
    ];

    setProducts(fetchedProducts);
  }, []);

  const handleDelete = (productId) => {
    // Here you can add the logic for deleting the product (e.g., making an API call)
    alert(`Delete product with ID: ${productId}`);
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-secondary bg-gradient ml-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-white">Products List</h1>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="row pb-3">
          <div className="col-6"></div>
          <div className="col-6 text-end">
            <Link to="/product-create" className="btn btn-outline-primary">
              <i className="bi bi-plus-square"></i> Create New Product
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.productId}>
                <td>{item.name}</td>
                <td>{item.categoryName}</td>
                <td>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                <td>
                  <Link to={`/product-edit/${item.productId}`} className="btn btn-success">
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.productId)}
                    className="btn btn-danger ms-2"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
