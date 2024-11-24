import React, { useState, useEffect } from 'react';

export const ProductDelete = ({ product }) => {
  const [productData, setProductData] = useState({
    productId: '',
    name: '',
    categoryName: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (product) {
      setProductData({
        productId: product.productId,
        name: product.name,
        categoryName: product.categoryName,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the delete logic (e.g., making an API call)
    console.log('Product deleted:', productData);
    // Example: Call an API to delete the product
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container border p-3">
        <h1 className="text-white text-center">Delete Product</h1>
        <input type="hidden" name="ProductId" value={productData.productId} />
        <hr />
        <div className="row">
          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Name
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="text"
              name="name"
              value={productData.name}
              disabled
              className="form-control"
            />
          </div>

          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Category Name
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="text"
              name="categoryName"
              value={productData.categoryName}
              disabled
              className="form-control"
            />
          </div>

          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Description
            </label>
          </div>
          <div className="col-10 pb-3">
            <textarea
              name="description"
              value={productData.description}
              disabled
              className="form-control"
              rows="5"
            ></textarea>
          </div>

          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Price
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="text"
              name="price"
              value={productData.price}
              disabled
              className="form-control"
            />
          </div>

          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Image URL
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="text"
              name="imageUrl"
              value={productData.imageUrl}
              disabled
              className="form-control"
            />
          </div>

          <div className="col-5 offset-2">
            <a href="/products" className="btn-primary btn form-control">
              Back to List
            </a>
          </div>
          <div className="col-5">
            <button type="submit" className="btn btn-danger form-control">
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
