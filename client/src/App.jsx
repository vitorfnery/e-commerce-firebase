import { Home } from "~/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "~/pages/Layout";
import Cart from "~/pages/Cart";
import Login from "~/pages/Login";
import { productsData } from "~/api/Api";
import Product from "~/components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
