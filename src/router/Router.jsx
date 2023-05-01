import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Career from "../pages/Home/Career/Career";
import About from "../pages/Home/About/About";
import News from "../pages/Home/News/News";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import Login from "../pages/shared/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
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