import React, { useState, useEffect } from 'react';

export const ProductEdit = ({ product, onSubmit, onCancel }) => {
  const [productData, setProductData] = useState({
    productId: '',
    name: '',
    categoryName: '',
    description: '',
    price: '',
    image: null, // For the image file
    imageUrl: '',
    imageLocalPath: '',
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
        imageLocalPath: product.imageLocalPath || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component with the updated product data
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="container border p-3">
        <h1 className="text-white text-center">Edit Product</h1>
        <input type="hidden" name="ProductId" value={productData.productId} />
        <hr />
        <div className="row">
          <div className="col-10">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label className="control-label pt-2" style={{ fontSize: '20px' }}>
                  Image
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="form-control"
                />
                <input
                  type="hidden"
                  name="ImageUrl"
                  value={productData.imageUrl}
                  className="form-control"
                />
                <input
                  type="hidden"
                  name="ImageLocalPath"
                  value={productData.imageLocalPath}
                  className="form-control"
                />
              </div>

              <div className="col-5 offset-2">
                <button type="button" onClick={onCancel} className="btn-primary btn form-control">
                  Back to List
                </button>
              </div>
              <div className="col-5">
                <button type="submit" className="btn btn-success form-control">
                  Update
                </button>
              </div>
            </div>
          </div>

          <div className="col-2">
            {productData.imageUrl && (
              <img src={productData.imageUrl} className="w-100" alt="Product" />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
