import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicia_de_Sesion from "./Components/Inicia_de_Sesion";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";
import Structura from "./Componentes sin usar/Structura";
import React from 'react';
import Prueba from "./prueba";


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
    
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
)