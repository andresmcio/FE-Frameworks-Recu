import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import Home from './components/views/Home/Home';
import Products from './components/views/Products/Products';
import ProductDetail from './components/views/Products/ProductDetail/ProductDetail';
import Login from './components/views/Users/Login/Login';
import Register from './components/views/Users/Register/Register';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div className="App">
      <MyProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:sku" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* <Footer /> */}
      </MyProvider>
    </div>
  );
}

export default App;
