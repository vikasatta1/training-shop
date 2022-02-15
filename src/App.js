import './App.scss';
import MainPage from "./pages/main-page/main-page";
import Header from "./components/header/heade";
import Footer from "./components/footer/footer";
import {Routes ,Route} from "react-router-dom";
import './App.scss'

import Clothes from "./components/main-blocks/clothes/clothes";
export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <Routes>

                <Route exact path={'/'} element={<MainPage/>}/>
                <Route path={'/women'} element={ <Clothes productType='women' />}/>
                <Route  path={'/men'} element={<Clothes productType='men' />}/>
            </Routes>


            <Footer/>
        </div>
    );
};
