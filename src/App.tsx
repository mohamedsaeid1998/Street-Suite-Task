
import "./Styles/global.scss";
import { MainPage } from './Pages'
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AuthLayout } from "./Components";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <MainPage /> },
      ],
    },
  ])

  return <>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </>
}

export default App
