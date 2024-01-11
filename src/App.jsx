import Home from "./pages/Home";
import Menu from "./components/menu";
import './css/app.css';
import Category from "./pages/Category";
import ProductAdd from "./pages/ProductAdd";
import { Routes, Route } from 'react-router-dom';
import Product from "@/pages/Product";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import CategoryAdd from "@/pages/CategoryAdd";
import CategoryList from "@/pages/CategoryList";



function App() {
    return <div>
                <>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/productadd" element={<ProductAdd />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/productlist" element={<ProductList />} />
                        <Route path="/productdetail/:id" element={<ProductDetail />} />
                        <Route path="/categoryadd" element={<CategoryAdd />} />
                        <Route path="/categorylist" element={<CategoryList />} />
                    </Routes>
                </>
            </div>
}

export default App;