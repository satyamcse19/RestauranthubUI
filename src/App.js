// src/App.js
import './App.css';
import { Header } from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';
import { Home } from './Pages/Home/Home';
import { Testcount } from './Pages/Home/Testcount';
import { Ludomove } from './Pages/Home/Ludomove';
import { Lottery } from './Pages/Home/Lottery';
import { CartPage } from './Pages/Card/CartPage';
import { Cardconfirmation } from './Pages/Card/Confirmation';
import { OrderSummary } from './Pages/Card/OrderSummary';
import { CouponCreate } from './Pages/Coupon/CouponCreate';
import { CouponDelete } from './Pages/Coupon/CouponDelete';
import { CouponsList } from './Pages/Coupon/CouponIndex';
import OrderDetails from './Pages/Order/OrderDetais';
import OrderIndex from './Pages/Order/OrderIndex';
import { ProductCreate } from './Pages/Product/ProductCreate';
import { ProductDelete } from './Pages/Product/ProductDelete';
import { ProductEdit } from './Pages/Product/ProductEdit';
import { ProductDetais } from './Pages/Product/ProductDetails';
import PrivateRoute from './Component/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserDetails } from './features/userDetaisSlice';

function App() {
  const {token,user}= useSelector((state) => state.userDetails);
  const dispatch = useDispatch()
  useEffect(() => {
      if (token && !user) {
        // If there is a token but no user data, fetch the user details
        dispatch(fetchUserDetails(token));
      }
    }, [user,token]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
  
        

        {/* Private Routes */}
        <Route
          path="/testmsgbox"
          element={<PrivateRoute element={<Testcount />} />}
        />
        <Route
          path="/Ludo"
          element={<PrivateRoute element={<Ludomove />} />}
        />
        <Route
          path="/Lottery"
          element={<PrivateRoute element={<Lottery />} />}
        />
        <Route
          path="/CartPage"
          element={<PrivateRoute element={<CartPage />} />}
        />
        <Route
          path="/Cardconfirmation"
          element={<PrivateRoute element={<Cardconfirmation />} />}
        />
        <Route
          path="/OrderSummary"
          element={<PrivateRoute element={<OrderSummary />} />}
        />
        <Route
          path="/couponCreate"
          element={<PrivateRoute element={<CouponCreate />} />}
        />
        <Route
          path="/couponDelete"
          element={<PrivateRoute element={<CouponDelete />} />}
        />
        <Route
          path="/couponsList"
          element={<PrivateRoute element={<CouponsList />} />}
        />
        <Route
          path="/orderDetails"
          element={<PrivateRoute element={<OrderDetails />} />}
        />
        <Route
          path="/orderDetails"
          element={<PrivateRoute element={<OrderIndex />} />}
        />
        <Route
          path="/productCreate"
          element={<PrivateRoute element={<ProductCreate />} />}
        />
        <Route
          path="/productDelete"
          element={<PrivateRoute element={<ProductDelete />} />}
        />
        <Route
          path="/productEdit"
          element={<PrivateRoute element={<ProductEdit />} />}
        />
        <Route
          path="/productDetais"
          element={<PrivateRoute element={<ProductDetais />} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
