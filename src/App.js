import './App.scss';
import MainPage from "./pages/main-page/main-page";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
};
