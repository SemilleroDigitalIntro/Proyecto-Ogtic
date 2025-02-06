import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactoH from "./Components/ContactoH";
import Header from "./Components/Header";
import Smain from "./Components/Smain";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContactoH/>
        <Header/>
        <Smain/>
    </StrictMode>
)