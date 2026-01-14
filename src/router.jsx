import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    }
])

export default router