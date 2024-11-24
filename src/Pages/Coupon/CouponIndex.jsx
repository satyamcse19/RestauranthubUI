import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CouponsList = () => {
  const [coupons, setCoupons] = useState([]);

  // Fetch the coupons list when the component mounts
  useEffect(() => {
    // Example API call to get coupons data
    const fetchCoupons = async () => {
      try {
        const response = await fetch('/api/coupons'); // Replace with your API endpoint
        const data = await response.json();
        setCoupons(data);
      } catch (error) {
        console.error('Error fetching coupons:', error);
      }
    };

    fetchCoupons();
  }, []);

  // Handle deleting a coupon
  const handleDelete = async (couponId) => {
    try {
      const response = await fetch(`/api/coupons/${couponId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted coupon from the state
        setCoupons(coupons.filter(coupon => coupon.CouponId !== couponId));
      }
    } catch (error) {
      console.error('Error deleting coupon:', error);
    }
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-secondary bg-gradient ml-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-white">Coupons List</h1>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="row pb-3">
          <div className="col-6">
            {/* Empty div for layout spacing */}
          </div>
          <div className="col-6 text-end">
            <Link to="/create-coupon" className="btn btn-outline-primary">
              <i className="bi bi-plus-square"></i> Create New Coupon
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Discount Amount</th>
              <th>Minimum Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.CouponId}>
                <td>{coupon.CouponCode}</td>
                <td>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coupon.DiscountAmount)}</td>
                <td>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coupon.MinAmount)}</td>
                <td>
                  <button onClick={() => handleDelete(coupon.CouponId)} className="btn btn-danger">
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

