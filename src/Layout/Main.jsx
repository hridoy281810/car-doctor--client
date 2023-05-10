
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sherd/Footer/Footer';
import NavBar from '../Pages/Sherd/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
          <Outlet></Outlet>  
          <Footer></Footer>
        </div>
    );
};

export default Main;