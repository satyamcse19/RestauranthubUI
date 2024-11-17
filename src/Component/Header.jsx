import React, { useState } from 'react';  // Only import React and hooks (if used)
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Restaurant hub</a>
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
                            <Link to="/" className="nav-link active" >Home</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Content Management
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item">Coupon</a></li>
                                <li><a class="dropdown-item">Product</a></li>
                                <li> <hr class="dropdown-divider"/></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ">
                                Manage Order
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                &nbsp; <i class="bi bi-cart icon-white"></i>&nbsp;
                            </a>
                        </li>

                    </ul>
                    <Link to="/login" className="btn btn-outline-light me-2" >Login</Link>
                    <Link to="/register" className="btn btn-outline-light me-2" >Register</Link>
                </div>
            </div>
        </nav>
    );
}
