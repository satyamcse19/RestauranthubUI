import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Home = () => {
    const [product, setProduct] = useState([]);

    const getproductdata = () => {
        axios.get('http://122.166.86.165/product/api/product')
            .then(function (response) {
                setProduct(response?.data?.result);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    useEffect(() => {
        getproductdata();
    }, []);

    return (
        <div className="container row">
            {product.map((product) => (
                <div key={product.productId} className="col-12 col-md-6 col-lg-4">
                    <div className="p-0 my-3 border rounded">
                        <div className="card">
                            <h3 className="card-title text-white-50 text-center py-2">{product.name}</h3>
                            {/* Image Handling */}
                            <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                                <img 
                                    src={product.imageUrl} 
                                    className="card-img-top" 
                                    alt={product.name} 
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between py-2">
                                    <span className="text-danger" style={{ fontSize: "20px" }}>
                                        {product.price.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}
                                    </span>
                                    <span className="badge bg-warning text-white p-2">{product.categoryName}</span>
                                </div>
                                
                                {/* Responsive Description */}
                                <div className="description">
                                    <p className="card-text"  style={{color:'black'}} dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                                
                                {/* Responsive Details Button */}
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <a href="#" className="btn btn-success form-control">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
