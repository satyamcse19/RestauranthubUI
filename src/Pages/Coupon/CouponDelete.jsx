import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const CouponDelete = () => {
  const [coupon, setCoupon] = useState({
    couponId: '',
    couponCode: '',
    discountAmount: '',
    minAmount: '',
  });

  const navigate = useNavigate();
  const { couponId } = useParams(); // Assuming you pass the couponId in the URL

  useEffect(() => {
    // Fetch the coupon data from API by couponId (for example, make an API call to fetch data)
    const fetchCoupon = async () => {
      // Simulating an API call here
      const response = {
        couponId: couponId,
        couponCode: 'SAVE20',
        discountAmount: 20.00,
        minAmount: 50.00,
      };
      setCoupon(response);
    };

    fetchCoupon();
  }, [couponId]);

  const handleDelete = (e) => {
    e.preventDefault();
    // Perform the delete operation, like calling the API to delete the coupon
    alert(`Coupon with ID ${coupon.couponId} will be deleted.`);
    // Redirect to coupon list page after deletion
    navigate('/coupon-list');
  };

  return (
    <div className="container border p-3">
      <h1 className="text-white text-center">Delete Coupon</h1>
      <form onSubmit={handleDelete}>
        <input type="hidden" name="CouponId" value={coupon.couponId} />

        <hr />
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
              value={coupon.couponCode}
              disabled
              className="form-control"
            />
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
              value={coupon.discountAmount}
              disabled
              className="form-control"
            />
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
              value={coupon.minAmount}
              disabled
              className="form-control"
            />
          </div>

          <div className="col-5 offset-2">
            <button
              type="button"
              className="btn-primary btn form-control"
              onClick={() => navigate('/coupon-list')}
            >
              Back to List
            </button>
          </div>

          <div className="col-5">
            <input
              type="submit"
              value="Delete"
              className="btn btn-danger form-control"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
