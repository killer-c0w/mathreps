import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import SignUp from './componets/signup';
import Login from './componets/login';
import Home from './componets/home';
import PrivateRoutes from './componets/privRoutes';
import Practice from './componets/practice';



const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/signup', element: <SignUp />},
    {path: '/login', element: <Login />},
    {path: '/home', element: 
        <PrivateRoutes>
            <Home />
        </PrivateRoutes>},
    {path: '/practice', element: 
        <PrivateRoutes>
            <Practice />
        </PrivateRoutes>},
]);

export default router;