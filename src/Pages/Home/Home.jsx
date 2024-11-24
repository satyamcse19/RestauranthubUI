import axios from 'axios';
import React, { useEffect, useState } from 'react';  // Only import React and hooks (if used)

export const Home = () => {
    const [product, setProduct] = useState([]);
    const getproductdata = () => {
        axios.get('https://localhost:7000/api/product')
            .then(function (response) {
                // handle success
                console.log("Api responce",response)
                setProduct(response?.data?.result);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    console.log(product)
    useEffect(() => {
        getproductdata();
    }, [])

    return (

        <div class="container row">
            {product.map((product) => (

                <div key={product.productId} class="col-12 col-md-6 col-lg-4">
                    <div class="p-0 my-3 border rounded">
                        <div class="card">
                            <h3 class="card-title text-white-50 text-center py-2">{product.name}</h3>
                            <img src={product.imageUrl} class="card-img-top" />
                            <div class="card-body">
                                <div class="d-flex justify-content-between py-2">
                                    <span className="text-danger" style={{ fontSize: "20px" }}>
                                        {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                    </span>
                                    <span class="badge bg-warning text-white p-2">{product.categoryName}</span>
                                </div>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }} />
                                <div class="row">
                                    <div class="col">
                                        <a class="btn btn-success form-control">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            ))}
        </div>
    )

}