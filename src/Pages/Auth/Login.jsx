import React, { useState } from 'react';  // Only import React and hooks (if used)

export const Login = () => {
    return (

        <form method="post">
        <div class="container border p-4 mt-5"> 
            <div class="row text-center">
                <h1>Login</h1>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 offset-md-3 pb-2">
                    <input class="form-control" placeholder="Username..." />
                    <span class="text-danger"></span>
                </div>
                <div class="col-12 col-md-6 offset-md-3 pb-2">
                    <input class="form-control" placeholder="Password..." />
                    <span class="text-danger"></span>
                </div>
                <div class="col-12 col-md-6 offset-md-3 pb-2">
                    <button type="submit" class="form-control btn btn-success" value="Submit">Login</button>
                </div>
            </div>
        </div>
    </form>
    
    );
}
