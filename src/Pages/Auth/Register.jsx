import React, { useState } from 'react';  // Only import React and hooks (if used)

export const Register = () => {
    return (

        <form method="post">
            <div class="container border p-4 mt-5">
                <div class="row text-center p-3">
                    <h1>Register</h1>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input class="form-control" placeholder="Email..." />
                        <span  class="text-danger" />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input  class="form-control" placeholder="Name..." />
                        <span  class="text-danger" />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input class="form-control" placeholder="Phone Number..." />
                        <span  class="text-danger" />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input  class="form-control" placeholder="Password..." />
                        <span  class="text-danger" />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <select  class="form-select">
                            <option disabled selected>--Select Role--</option>
                        </select>
                    </div>

                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <button type="submit" class="form-control btn btn-success" value="Submit">Register</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
