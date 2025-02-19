import React from "react";
import './Style/ServMas.less';
import DataServMasCon from "./Data/DataServMasCon";


export default function ServMasCon(){



    const ServConsultados = (props) => {
        return(
        
                <div className="card__serv">
                    <h3>{props.NameService}</h3>
                    <p>{props.DetailService}</p>
                    <a href="">Mas detalles</a>
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
                <h1><span>Servicios</span> mas consultados</h1>
                <a href="">Ver todas las novedades<i class='bx bx-right-arrow-alt'></i></a>
            </div>
            <div className="ServiciosMasConsultados_container">
                {DataServMasConList}
            </div>
        </section>
    )
};