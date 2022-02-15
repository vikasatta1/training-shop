import './App.scss';
import MainPage from "./pages/main-page/main-page";
import Header from "./components/header/heade";
import Footer from "./components/footer/footer";
import {Routes ,Route} from "react-router-dom";
import ProductsPage from "./pages/products-page/products-page";
import ProductPage from "./pages/product-page/product-page";
import './App.scss'
export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <Routes>

                <Route exact path={'/'} element={<MainPage/>}/>
                <Route path={'/women'} element={ <ProductsPage productType='women' />}/>
                <Route  path={'/men'} element={<ProductsPage productType='men' />}/>
                <Route  path={'/women/:id'} element={<ProductPage productType='women' />}/>
                <Route  path={'/men/:id'} element={<ProductPage productType='men' />}/>
            </Routes>


            <Footer/>
        </div>
    );
};
