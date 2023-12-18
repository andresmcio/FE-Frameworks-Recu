import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import Home from './components/views/Home/Home';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div className="App">
      <MyProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
      </MyProvider>
    </div>
  );
}

export default App;
