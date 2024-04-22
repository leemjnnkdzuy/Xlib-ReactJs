//import HeaderOnly
import { HeaderOnly } from '~/components/Layout/';

//import Pages
import Welcome from '~/pages/Welcome';
import Err from '~/pages/Err';
import About from '~/pages/About';
import ToolsPage from '~/pages/ToolsPage';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import ResetPassword from '~/pages/ResetPassword';
import Home from '~/pages/Home';
import Search from '~/pages/Search';


const publicRoutes = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '*',
        component: Err,
    },
    {
        path: '/toolsPage',
        component: ToolsPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/resetPassword',
        component: ResetPassword,
    },
    {
        path: '/home',
        component: Home,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
