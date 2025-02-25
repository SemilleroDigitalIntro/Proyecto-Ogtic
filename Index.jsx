import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicia_de_Sesion from "./Components/Iniciarsesion";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";
import Structura from "./Componentes sin usar/Structura";
import React from 'react';
import Prueba from "./prueba";
import InicioAdm from "./Components/InicioAdm";
import Forgetpassword from "./Components/ForgetPassword";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Structura/>
    },  
    {
        path: '/Inicio',
        element: <Inicio/>
    },
    {
        path: '/Registro',
        element: <Registro/>
    },
    {
        path: '/login',
        element: <Inicia_de_Sesion/>
    },
    {
        path: '/PEPE',
        element: <Prueba/>
    },
    {
        path: '/admin',
        element: <InicioAdm/>
    },
    {
        path: '/Forgetpassword',
        element: <Forgetpassword/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)