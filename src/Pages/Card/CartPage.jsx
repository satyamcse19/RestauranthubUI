import React, { useState, useEffect } from 'react';

export const CartPage = ({ cart }) => {
    // Ensure cart is defined before accessing its properties
    const [couponCode, setCouponCode] = useState(cart?.CartHeader?.CouponCode || '');
    const [cartDetails, setCartDetails] = useState(cart?.CartDetails || []);

    useEffect(() => {
        // Check if cart is available before updating state
        if (cart) {
            setCouponCode(cart.CartHeader?.CouponCode || '');
            setCartDetails(cart.CartDetails || []);
        }
    }, [cart]);

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const applyCoupon = () => {
        console.log('Coupon applied:', couponCode);
        // Implement your apply coupon logic here
    };

    const removeCoupon = () => {
        setCouponCode('');
        console.log('Coupon removed');
        // Implement your remove coupon logic here
    };

    const handleRemoveItem = (cartDetailsId) => {
        setCartDetails(cartDetails.filter(item => item.CartDetailsId !== cartDetailsId));
        console.log('Item removed:', cartDetailsId);
        // Implement item removal logic here
    };

    const emailCart = () => {
        console.log('Emailing cart');
        // Implement email cart logic here
    };

    const goToCheckout = () => {
        console.log('Proceeding to checkout');
        // Implement checkout logic here
    };

    // If cart is not available or cart details are empty
    if (!cart || !cart.CartHeader || cartDetails.length === 0) {
        return (
            <div>
                <p>Please add items to cart.</p>
            </div>
        );
    }

    return (
        <form>
            <div className="container mt-4">
                <div className="card border">
                    <div className="card-header bg-dark text-light row">
                        <div className="col-6">
                            <h3 className="text-success"><i className="bi bi-cart"></i> Shopping Cart</h3>
                        </div>
                        <div className="col-6 text-end">
                            <a href="/home" className="btn btn-outline-warning mt-2 btn-sm">Continue Shopping</a>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-none d-lg-block">
                            <div className="row text-info">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-5">Product Details</div>
                                <div className="col-lg-2">Price</div>
                                <div className="col-lg-2">Count</div>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                        <hr />

                        {cartDetails.map(cartObj => (
                            <div key={cartObj.CartDetailsId} className="row h-100">
                                <div className="col-4 col-md-2 text-center py-2">
                                    <img src={cartObj.Product.ImageUrl} alt={cartObj.Product.Name} className="rounded" width="100%" />
                                </div>
                                <div className="col-8 col-md-5">
                                    <h5>{cartObj.Product.Name}</h5>
                                    <div style={{ fontSize: '11px' }} dangerouslySetInnerHTML={{ __html: cartObj.Product.Description }}></div>
                                </div>
                                <div className="col-3 col-md-2 pt-md-4" style={{ fontSize: '11px' }}>
                                    <span style={{ fontSize: '17px' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartObj.Product.Price)}</span>
                                </div>
                                <div className="col-3 col-md-2 pt-md-4" style={{ fontSize: '11px' }}>
                                    <span style={{ fontSize: '17px' }}>{cartObj.Count}</span>
                                </div>
                                <div className="col-2 col-lg-1 p-0 pt-lg-4 text-center">
                                    <button type="button" onClick={() => handleRemoveItem(cartObj.CartDetailsId)} className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                {!cart.CartHeader.CouponCode ? (
                                    <div>
                                        <span>Coupon:</span>
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={handleCouponChange}
                                            className="form-control"
                                        />
                                        <button type="button" onClick={applyCoupon} className="btn btn-sm btn-success">Apply</button>
                                    </div>
                                ) : (
                                    <div>
                                        <span>Coupon:</span>
                                        <input
                                            type="text"
                                            value={couponCode}
                                            disabled
                                            className="form-control"
                                        />
                                        <button type="button" onClick={removeCoupon} className="btn btn-sm btn-success">Remove</button>
                                    </div>
                                )}
                            </div>
                            <div className="col-6 text-end">
                                <span className="text-danger" style={{ fontSize: '21px' }} >
                                    Order Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cart.CartHeader.CartTotal)}
                                    <br />
                                </span>
                                {cart.CartHeader.Discount > 0 && (
                                    <span className="text-success">
                                        Order Discount: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cart.CartHeader.Discount)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer row">
                        <div className="col-6 col-md-3">
                            <button type="button" onClick={emailCart} className="btn btn-outline-danger form-control">
                                Email Cart
                            </button>
                        </div>
                        <div className="col-6 col-md-3 offset-md-6">
                            <a href="/checkout" onClick={goToCheckout} className="btn btn-success form-control">
                                Looks Good?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
