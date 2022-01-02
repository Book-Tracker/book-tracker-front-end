import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
