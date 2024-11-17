
import './App.css';
import { Header } from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route,Routes} from 'react-router-dom';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';
import { Home } from './Pages/Home/Home';




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
