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
        layout: HeaderOnly,
    },
    {
        path: '/about',
        component: About,
        layout: HeaderOnly,
    },
    {
        path: '*',
        component: Err,
        layout: HeaderOnly,
    },
    {
        path: '/toolsPage',
        component: ToolsPage,
        layout: HeaderOnly,
    },
    {
        path: '/login',
        component: Login,
        layout: HeaderOnly,
    },
    {
        path: '/signup',
        component: Signup,
        layout: HeaderOnly,
    },
    {
        path: '/resetPassword',
        component: ResetPassword,
        layout: HeaderOnly,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

// const privateRoutes = [];

export { publicRoutes, /*privateRoutes*/ };
