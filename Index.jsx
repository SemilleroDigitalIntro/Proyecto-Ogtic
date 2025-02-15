import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicia_de_Sesion from "./Components/Inicia_de_Sesion";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Inicia_de_Sesion/>
    },
    {
        path: '/Inicio',
        element: <Inicio/>
    },
    {
        path: '/Registro',
        element: <Registro/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)