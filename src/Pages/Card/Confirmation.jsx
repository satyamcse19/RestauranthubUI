import React from 'react';

export const Cardconfirmation = ({ orderId }) => {
  return (
    <div className="text-center">
      <h1 className="text-info pt-4">Congratulations! You are one step closer to amazing food.</h1>
      <p className="pb-3">
        We have received your order and will be ready in 30 minutes during regular business hours!
      </p>
      <h4 className="text-warning pb-3">Order ID - {orderId}</h4>
      <img src="/images/order.PNG" alt="Order Confirmation" width="80%" />
    </div>
  );
};


