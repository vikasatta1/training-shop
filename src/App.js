import './App.scss';
import Header from "./components/header/Header";
import MainPage from "./pages/main-page/main-page";

function App() {
    return (
        <div className='app' data-test-id='app'>
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
