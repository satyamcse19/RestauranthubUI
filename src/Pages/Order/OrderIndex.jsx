
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderIndex = () => {
  const [orders, setOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');
  const location = useLocation();
  const navigate = useNavigate();

  // Get status from the URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location?.search);
    console.log(queryParams,"queryParams")
    const status = queryParams.get('status') || 'all'; // Default to 'all' if no status is provided
    setActiveStatus(status);
    
    // Fetch orders based on the active status
    fetchOrders(status);
  }, [location]);

  const fetchOrders = async (status) => {
    // Replace this with actual API call based on status
    try {
      const response = await fetch(`/api/orders?status=${status}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleStatusChange = (status) => {
    // Update the active status and push the new URL
    setActiveStatus(status);
     navigate(`/orders?status=${status}`);
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-secondary bg-gradient ml-0 py-3 d-flex justify-content-between">
        <div className="row">
          <h1 className="text-white">Order List</h1>
        </div>
        <ul className="list-group list-group-horizontal-sm pt-2">
          <li
            className={`list-group-item ${activeStatus === 'approved' ? 'active text-white bg-secondary' : ''}`}
            onClick={() => handleStatusChange('approved')}
            style={{ cursor: 'pointer' }}
          >
            Approved
          </li>
          <li
            className={`list-group-item ${activeStatus === 'readyforpickup' ? 'active text-white bg-secondary' : ''}`}
            onClick={() => handleStatusChange('readyforpickup')}
            style={{ cursor: 'pointer' }}
          >
            Ready for Pickup
          </li>
          <li
            className={`list-group-item ${activeStatus === 'cancelled' ? 'active text-white bg-secondary' : ''}`}
            onClick={() => handleStatusChange('cancelled')}
            style={{ cursor: 'pointer' }}
          >
            Cancelled
          </li>
          <li
            className={`list-group-item ${activeStatus === 'all' ? 'active text-white bg-secondary' : ''}`}
            onClick={() => handleStatusChange('all')}
            style={{ cursor: 'pointer' }}
          >
            All
          </li>
        </ul>
      </div>

      <div className="card-body p-4">
        <table id="tblData" className="table table-bordered table-striped pt-3" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.OrderHeaderId}>
                <td>{order.OrderHeaderId}</td>
                <td>{order.Email}</td>
                <td>{order.Name}</td>
                <td>{order.Phone}</td>
                <td>{order.Status}</td>
                <td>{order.OrderTotal}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/orders/${order.OrderHeaderId}`)}
                  >
                    View Details
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

export default OrderIndex;
