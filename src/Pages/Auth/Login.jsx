import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { fetchUserDetails } from '../../features/userDetaisSlice';
import { useDispatch ,useSelector} from 'react-redux';

export const Login = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch()
    const {token,user}= useSelector((state) => state.userDetails);
    const [LoginformData, setLoginFormData] = useState({
        userName: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setLoginFormData({
            ...LoginformData,
            [name]: value,
        });

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://122.166.86.165/Auth/api/auth/login', LoginformData);
            console.log(response,"response")
            const token = response.data.result.token;
              Cookies.set('loginToken', token);
              dispatch(fetchUserDetails(token));
              toast.success("Login Successful!");
              navigate('/');
              
              
        } catch (error) {
            toast.error("Something went wrong we are looking and try to fix as soon as posiable !");
            console.error("API error:", error);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div class="container border p-4 mt-5">
                <div class="row text-center">
                    <h1>Login</h1>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Username..."
                            name="userName"
                            value={LoginformData.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password..."
                            name="password"
                            value={LoginformData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-12 col-md-6 offset-md-3 pb-2">
                        <button type="submit" class="form-control btn btn-success" value="Submit">Login</button>
                    </div>
                </div>
            </div>
        </form>

    );
}
