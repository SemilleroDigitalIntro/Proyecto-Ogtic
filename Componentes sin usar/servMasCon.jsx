import React from "react";
import './Style/cards.css';
import DataServMasCon from "./Data/DataServMasCon";


export default function ServMasCon(){



    const ServConsultados = (props) => {
        return(
            <div className="card__serviciosMasC">
                <div className="serv__title">
                    <h1>Servicios mas consultados</h1>
                    <hr class="hr__serv"/>
            </div>



                <div className="card__serv">
                    <h3>{props.NameService}</h3>
                    <p>{props.DetailService}</p>
                    <a href="">Mas detalles</a>
                </div>
            </div>
        )
    };

    const DataServMasConList = DataServMasCon.map( DSC =>{
        return(
            <ServConsultados
            NameService = {DSC.NameService}
            DetailService ={DSC.DetailService}
            />
        )
    })



    return (
        <section className="ServiciosMasConsultados">
            <div className="ServiciosMasConsultados_title">
                <h1>Servicios mas consultados</h1>
                <hr class="hr__serv"/>
            </div>
            <div className="ServiciosMasConsultados_container">
                {DataServMasConList}
            </div>
        </section>
    )
};