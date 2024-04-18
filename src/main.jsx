import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./stores";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Builder from "./pages/Builder";
import { ErrorPage } from "./components/error-page";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cvbuilder",
    element: <Builder />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </>
);
