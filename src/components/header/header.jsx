import {Contacts} from "./contacts/contacts";
import './header.scss';
import SocialNetwork from "../social-network/social-network";
const Header = () => (
    <div className='header' data-test-id='header'>
        <div className='header-contacts'>
            <div className='wrapper'>
                <Contacts />
                <SocialNetwork />
            </div>
        </div>
        <div className='header-nav'>
            <div className='wrapper'>
               {/* <Link to='/' className='header-nav-logo-a' data-test-id='header-logo-link'>
                    <img src={Logo} alt='Logo' className='header-nav-logo' />
                </Link>*/}
             {/*   <Menu />*/}
               {/* <HeaderIconsNav />*/}
            </div>
        </div>
    </div>
);
export default Header;
