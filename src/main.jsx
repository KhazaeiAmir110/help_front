import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {routers} from './router';

import 'swiper/css';
import './index.css';

import UserProvider from "./context/UserContext.jsx";


createRoot(document.getElementById('root')).render(
    <UserProvider>
        <RouterProvider router={routers}/>
    </UserProvider>
)
