import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Career from "../pages/Home/Career/Career";
import About from "../pages/Home/About/About";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import News from "../pages/Home/Home/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    },
    {
        path: '/news-layout',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>

            }
        ]
    }
]);

export default router;