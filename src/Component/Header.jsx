import React from 'react';  
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setuserDetails } from '../features/userDetaisSlice';
import { toast } from 'react-toastify';

export const Header = () => {
    const token = Cookies.get('loginToken') || null;
    const user = useSelector((state) => state.userDetails.user);

    console.log("HederUserDetails", user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(setuserDetails({ token: "", user: "" }));
        Cookies.remove('loginToken');
        toast.success("Logout Successful!");
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Restaurant Hub</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>

                        {/* Conditionally render Content Management if user is an admin */}
                        {user && user.role === "ADMIN" && (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Content Management
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item">Coupon</a></li>
                                    <li><a className="dropdown-item">Product</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul>
                            </li>
                        )}

                        <li className="nav-item">
                            <Link to="/OrderSummary" className="nav-link"> Manage Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/CartPage" className="nav-link"> &nbsp; <i className="bi bi-cart icon-white"></i>&nbsp;</Link>
                        </li>

                        {/* Conditionally render the All Pages dropdown if token is present */}
                        {token && (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/CartPage" className="dropdown-item">Cart Page</Link>
                                    <Link to="/Cardconfirmation" className="dropdown-item">Card Confirmation</Link>
                                    <Link to="/OrderSummary" className="dropdown-item">Order Summary</Link>
                                    <Link to="/couponCreate" className="dropdown-item">Coupon Create</Link>
                                    <Link to="/couponDelete" className="dropdown-item">Coupon Delete</Link>
                                    <Link to="/couponsList" className="dropdown-item">Coupons List</Link>
                                    <Link to="/orderDetails" className="dropdown-item">Order Details</Link>
                                    <Link to="/orderDetails" className="dropdown-item">Order Index</Link>
                                    <Link to="/productCreate" className="dropdown-item">Product Create</Link>
                                    <Link to="/productDelete" className="dropdown-item">Product Delete</Link>
                                    <Link to="/productEdit" className="dropdown-item">Product Edit</Link>
                                    <Link to="/productDetais" className="dropdown-item">Product Details</Link>
                                </ul>
                            </li>
                        )}
                    </ul>

                    {/* Conditionally render Logout if token exists, otherwise render Login/Register */}
                    {token ? (
                        <>
                            <p>{user && user.name ? user.name : 'Logout'}</p>
                            <button onClick={handleLogout} className="btn btn-danger">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                            <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};
