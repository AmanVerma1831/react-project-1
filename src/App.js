import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"
import Shimmer from "./components/Shimmer";
import Auth from "./components/Auth";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import "./index.css"

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            },
            {
                path: "/auth",
                element: <Auth />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);