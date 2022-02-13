import './App.scss';
import MainPage from "./pages/main-page/main-page";
import Header from "./components/header/heade";
import Footer from "./components/footer/footer";
import {Routes,Route} from "react-router-dom";

import './App.scss'
export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>

            <Footer/>
        </div>
    );
};
