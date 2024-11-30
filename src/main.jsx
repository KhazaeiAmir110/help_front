import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {routers} from './router';

import 'swiper/css';
import './index.css';


createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers}/>
)
