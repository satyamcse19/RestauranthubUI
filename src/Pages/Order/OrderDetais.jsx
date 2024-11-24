import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDetails = ({ orderHeader }) => {
  const [orderData, setOrderData] = useState(orderHeader);
  const [userRole, setUserRole] = useState('');  // Example role, you can fetch from context or an API
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user role and order data (you can replace this with actual logic)
    setUserRole('admin'); // Or 'user' depending on role
    // Replace with an actual fetch call if necessary
    setOrderData(orderHeader);
  }, [orderHeader]);

  // Navigate to the orders list
  const handleBackToOrders = () => {
    navigate('/orders');  // Adjust this path based on your routing
  };

  const handleOrderAction = async (action) => {
    // Replace with actual API request based on the action
    try {
      let response;
      switch (action) {
        case 'readyForPickup':
          response = await fetch(`/api/orders/${orderData.OrderHeaderId}/readyForPickup`, { method: 'POST' });
          break;
        case 'completeOrder':
          response = await fetch(`/api/orders/${orderData.OrderHeaderId}/complete`, { method: 'POST' });
          break;
        case 'cancelOrder':
          response = await fetch(`/api/orders/${orderData.OrderHeaderId}/cancel`, { method: 'POST' });
          break;
        default:
          break;
      }

      if (response.ok) {
        // Redirect or update the state based on the action
        navigate('/orders');
      } else {
        // Handle error
        console.error('Failed to process the order action');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-dark text-light ml-0">
          <div className="row">
            <div className="col-12 d-none d-md-block col-md-6 pb-1 text-warning h3">
              Order Summary
            </div>
            <div className="col-12 col-md-4 offset-md-2 text-right mt-2">
              <button onClick={handleBackToOrders} className="btn btn-warning form-control btn-sm">
                Back to Orders
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="container rounded p-2">
            <div className="row">
              <div className="col-12 col-lg-6 pb-4">
                <div className="row my-1">
                  <div className="col-3">Name</div>
                  <div className="col-9">
                    <input value={orderData?.Name} readOnly className="form-control" />
                  </div>
                </div>

                <div className="row my-1">
                  <div className="col-3">Phone</div>
                  <div className="col-9">
                    <input value={orderData?.Phone} readOnly className="form-control" />
                  </div>
                </div>

                <div className="row my-1">
                  <div className="col-3">Email</div>
                  <div className="col-9">
                    <input value={orderData?.Email} readOnly className="form-control" />
                  </div>
                </div>

                <div className="row my-1">
                  <div className="col-3">Order Date</div>
                  <div className="col-9">
                    <input value={new Date(orderData?.OrderTime).toLocaleDateString()} readOnly className="form-control" />
                  </div>
                </div>

                {userRole === 'admin' && (
                  <>
                    <div className="row my-1">
                      <div className="col-3">Session ID</div>
                      <div className="col-9">
                        <input value={orderData?.StripeSessionId} readOnly className="form-control" />
                      </div>
                    </div>

                    <div className="row my-1">
                      <div className="col-3">Payment Intent ID</div>
                      <div className="col-9">
                        <input value={orderData?.PaymentIntentId} readOnly className="form-control" />
                      </div>
                    </div>
                  </>
                )}

                <div className="row my-1">
                  <div className="col-3">Order Status</div>
                  <div className="col-9">
                    <input value={orderData?.Status} readOnly className="form-control" />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 offset-lg-1">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-warning">Order Summary</span>
                </h4>
                <label className="bg-info text-dark text-center form-control my-2">
                  Order Status - {orderData?.Status}
                </label>

                <ul className="list-group mb-3">
                  {orderData?.OrderDetail?.map((detail) => (
                    <li className="list-group-item d-flex justify-content-between p-2" key={detail.ProductName}>
                      <div className="row container">
                        <div className="col-8">
                          <h6 className="my-0 text-white-50">{detail.ProductName}</h6>
                          <small className="text-muted">Price: {detail.Price.toLocaleString()}</small><br />
                          <small className="text-muted">Quantity: {detail.Count}</small>
                        </div>
                        <div className="col-4 text-end">
                          <p className="text-success">{(detail.Count * detail.Price).toLocaleString()}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  <li className="list-group-item bg-primary">
                    <div className="row container">
                      <div className="col-6">
                        <h5 className="text-white">TOTAL</h5>
                      </div>
                      <div className="col-6 text-end">
                        <h5 className="text-white">{orderData?.OrderTotal.toLocaleString()}</h5>
                      </div>
                    </div>
                  </li>
                </ul>

                {userRole === 'admin' && (
                  <>
                    {orderData?.Status === 'Approved' && (
                      <button onClick={() => handleOrderAction('readyForPickup')} className="btn btn-success form-control my-1">
                        Ready for Pickup
                      </button>
                    )}

                    {orderData?.Status === 'ReadyForPickup' && (
                      <button onClick={() => handleOrderAction('completeOrder')} className="btn btn-success form-control my-1">
                        Complete Order
                      </button>
                    )}

                    {(orderData?.Status === 'Approved' || orderData?.Status === 'ReadyForPickup') && (
                      <button onClick={() => handleOrderAction('cancelOrder')} className="btn btn-danger form-control my-1">
                        Cancel Order
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
