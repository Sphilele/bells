import { Outlet } from 'react-router-dom';
import  Navigation from '../navigation/Navigation';
// import  Footer  from '../navigation/Footer';

function RootLayout () {
    return (
        <div>
       <Navigation /> 
       <Outlet />
   

       </div>
    )
}

export default RootLayout;