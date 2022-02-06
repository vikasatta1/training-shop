import './App.scss';
import MainPage from "./pages/main-page/main-page";
import Header from "./components/header/header";


export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <MainPage/>
        </div>
    );
};
