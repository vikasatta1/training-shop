import './App.scss';
import Header from "./components/header/Header";
export const App = () => {
    return (
        <div className='app' data-test-id='app'>
            <Header />

        </div>
    );
};
