import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CouponCreate = () => {
  const [couponData, setCouponData] = useState({
    CouponCode: '',
    DiscountAmount: '',
    MinAmount: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCouponData({
      ...couponData,
      [name]: value
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!couponData.CouponCode) newErrors.CouponCode = 'Coupon Code is required';
    if (!couponData.DiscountAmount || isNaN(couponData.DiscountAmount)) newErrors.DiscountAmount = 'Valid Discount Amount is required';
    if (!couponData.MinAmount || isNaN(couponData.MinAmount)) newErrors.MinAmount = 'Valid Minimum Amount is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Send POST request to create coupon (replace URL with your API endpoint)
      const response = await fetch('/api/coupons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(couponData)
      });

      if (response.ok) {
        // Redirect to coupon list on success
        navigate('/coupons');
      } else {
        // Handle server-side validation errors
        const result = await response.json();
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error creating coupon:', error);
    }
  };

  return (
    <div className="container border p-3">
      <h1 className="text-white text-center">Create Coupon</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Coupon Code
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="text"
              name="CouponCode"
              value={couponData.CouponCode}
              onChange={handleChange}
              className="form-control"
            />
            {errors.CouponCode && <span className="text-danger">{errors.CouponCode}</span>}
          </div>
          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Discount Amount
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="number"
              name="DiscountAmount"
              value={couponData.DiscountAmount}
              onChange={handleChange}
              className="form-control"
            />
            {errors.DiscountAmount && <span className="text-danger">{errors.DiscountAmount}</span>}
          </div>
          <div className="col-2">
            <label className="control-label pt-2" style={{ fontSize: '20px' }}>
              Minimum Amount
            </label>
          </div>
          <div className="col-10 pb-3">
            <input
              type="number"
              name="MinAmount"
              value={couponData.MinAmount}
              onChange={handleChange}
              className="form-control"
            />
            {errors.MinAmount && <span className="text-danger">{errors.MinAmount}</span>}
          </div>

          <div className="col-5 offset-2">
            <button
              type="button"
              onClick={() => navigate('/coupons')}
              className="btn-primary btn form-control"
            >
              Back to List
            </button>
          </div>
          <div className="col-5">
            <input type="submit" value="Create" className="btn btn-success form-control" />
          </div>
        </div>
      </form>
    </div>
  );
};

