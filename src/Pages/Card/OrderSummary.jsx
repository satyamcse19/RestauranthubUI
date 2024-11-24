import React, { useState } from 'react';

export const OrderSummary = ({ model }) => {

//   // Guard clause before calling useState to ensure model and model.CartHeader are defined
//   if (!model || !model.CartHeader) {
//     return <div>Loading...</div>; // Display loading if model or CartHeader is missing
//   }

//   // Now it's safe to use useState and include all properties from model.CartHeader
//   const [cartHeader, setCartHeader] = useState({
//     userId: model.CartHeader.UserId,
//     cartHeaderId: model.CartHeader.CartHeaderId,
//     couponCode: model.CartHeader.CouponCode,
//     discount: model.CartHeader.Discount,
//     cartTotal: model.CartHeader.CartTotal,
//     name: model.CartHeader.Name,
//     email: model.CartHeader.Email,
//     phone: model.CartHeader.Phone,
//     address: model.CartHeader.Address,  // Add more properties as needed
//     deliveryDate: model.CartHeader.DeliveryDate, // Example: Date of delivery
//     status: model.CartHeader.Status, // Example: Order status
//     // You can add any other properties that exist in model.CartHeader
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCartHeader((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Order submitted', cartHeader);
//   };

//   return (
//     <form onSubmit={handleSubmit} method="post">
//       <input type="hidden" name="CartHeader.UserId" value={cartHeader.userId} />
//       <input type="hidden" name="CartHeader.CartHeaderId" value={cartHeader.cartHeaderId} />
//       <input type="hidden" name="CartHeader.CouponCode" value={cartHeader.couponCode} />
//       <input type="hidden" name="CartHeader.Discount" value={cartHeader.discount} />
//       <input type="hidden" name="CartHeader.CartTotal" value={cartHeader.cartTotal} />
      
//       {/* Add other hidden inputs as necessary */}
//       <input type="hidden" name="CartHeader.Address" value={cartHeader.address} />
//       <input type="hidden" name="CartHeader.DeliveryDate" value={cartHeader.deliveryDate} />
//       <input type="hidden" name="CartHeader.Status" value={cartHeader.status} />

//       {/* The rest of your component code */}
//     </form>
//   );
};
