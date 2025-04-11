import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import SignUp from './componets/signup';
import Login from './componets/login';
import PrivateRoutes from './componets/privRoutes';
import Practice from './componets/practice';
import Stats from './componets/stats';



const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/signup', element: <SignUp />},
    {path: '/login', element: <Login />},
    {path: '/stats', element: 
        <PrivateRoutes>
            <Stats/>
        </PrivateRoutes>},
    {path: '/practice', element: <Practice />},
]);

export default router;