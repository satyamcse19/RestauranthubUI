
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


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/testmsgbox" element={<Testcount />} />
        <Route path="/Ludo" element={<Ludomove />} />
        <Route path="/Lottery" element={<Lottery />} />

        {/* //start auth  */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        {/* //end auth  */}

        {/* //start card  */}
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/Cardconfirmation" element={<Cardconfirmation />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        {/* //end card  */}

        {/* //start Coupon  */}
        <Route path="/couponCreate" element={<CouponCreate />} />
        <Route path="/couponDelete" element={<CouponDelete />} />
        <Route path="/couponsList" element={<CouponsList />} />
        {/* //end Coupon  */}

        {/* //start order  */}
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/orderDetails" element={<OrderIndex />} />

        {/* //end order  */}

        {/* //start Product  */}

        <Route path="/productCreate" element={<ProductCreate />} />
        <Route path="/productDelete" element={<ProductDelete />} />
        <Route path="/productEdit" element={<ProductEdit />} />
        <Route path="/productDetais" element={<ProductDetais />} />



      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
