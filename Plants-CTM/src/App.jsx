import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home.jsx';
import Products from './pages/Products';
import Sales from './pages/Sales';
import './styles/global.css';


function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Products />} />
        <Route path="/Sales" element={<Sales />} />
     </Routes>
   </>
 );
}


export default App;

