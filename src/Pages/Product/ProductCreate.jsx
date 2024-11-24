import React, { useState } from 'react';

export const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: '',
    categoryName: '',
    description: '',
    price: '',
    imageUrl: '',
    image: null,
  });

  const [errors, setErrors] = useState({});

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setProduct((prevState) => ({
        ...prevState,
        [name]: files[0], // Store the file object in the state
      }));
    } else {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const formErrors = {};
    if (!product.name) formErrors.name = 'Name is required';
    if (!product.categoryName) formErrors.categoryName = 'Category name is required';
    if (!product.description) formErrors.description = 'Description is required';
    if (!product.price || isNaN(product.price)) formErrors.price = 'Valid price is required';
    if (!product.image) formErrors.image = 'Image is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform the form submission logic here
      console.log('Form submitted', product);
      // Example: Call an API to save the product
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="container border p-3">
        <h1 className="text-white text-center">Create Product</h1>
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
              value={product.name}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
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
              value={product.categoryName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.categoryName && <span className="text-danger">{errors.categoryName}</span>}
          </div>

          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Description
            </label>
          </div>
          <div className="col-10 pb-3">
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="form-control"
              rows="5"
            ></textarea>
            {errors.description && <span className="text-danger">{errors.description}</span>}
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
              value={product.price}
              onChange={handleChange}
              className="form-control"
            />
            {errors.price && <span className="text-danger">{errors.price}</span>}
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
              onChange={handleChange}
              className="form-control"
            />
            {errors.image && <span className="text-danger">{errors.image}</span>}
          </div>

          <div className="col-5 offset-2">
            <button type="button" className="btn-primary btn form-control">
              Back to List
            </button>
          </div>
          <div className="col-5">
            <button type="submit" className="btn btn-success form-control">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
