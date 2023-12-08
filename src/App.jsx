import Home from "./pages/Home";
import Menu from "./components/menu";
import './css/app.css';
import Category from "./pages/Category";
import ProductAdd from "./pages/ProductAdd";
import { Routes, Route } from 'react-router-dom';
import ProductHome from "@/pages/ProductHome";



function App() {
    return <div>
                <>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<Category />} />
                        <Route path="/product" element={<ProductAdd />} />
                        <Route path="/producthome" element={<ProductHome />} />
                    </Routes>
                </>
            </div>
}

export default App;