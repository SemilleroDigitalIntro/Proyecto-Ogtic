import { Dialog } from "@mui/material";

const DataServicios = [
    //OcidentalMall
    {
        MESCYT: [
            {
                ServiciosM: 'Legalización de Documentos Académicos Emitidos por las IES Nacionales Activas'
            }
        ],
        SIE:[
            {
                ServiciosSIE: 'Reclamaciones en Tarifas BTS1 y BTS2'
            }
        ],
        DIDA:[
            {
                ServiciosDIDA: 'No hay servicios Disponibles'
            }
        ],
        SISALRIL:[
            {
                ServiciosSISALRIL: 'Atención a Peticiones, Quejas, Reclamos y Sugerencias'
            },
            {
                ServiciosSISALRIL: 'Investigación de Traspasos por Alto Costo y/o Cirugía Pendiente'
            },
            {
                ServiciosSISALRIL: 'Respuesta a las Solicitudes y Casos (Revisión de cuenta clínica)'
            },
            {
                ServiciosSISALRIL: 'Respuesta a la solicitud de negación de cobertura '
            },
            {
                ServiciosSISALRIL: 'Investigación de Afiliación y/o Traspaso irregular'
            }
        ],
        TSS: [
            {
                ServiciosTSS: 'Información de Reclamaciones'
            }
        ],
        DMAPS:[
            {
                ServiciosDMAPS: 'Certificado Libre Venta para Medicamentos'
            }
        ],
        MINE:[
            {
                ServiciosMine: 'Certificación de Exequátur'
            }
        ],
        INTRANT: [
            {
                ServiciosINTRANT: 'Renovación licencia de conducir categoría 01'
            },
            {
                ServiciosINTRANT: 'Renovación licencia de conducir categoría 02'
            },
            {
                ServiciosINTRANT: 'Renovación licencia de conducir categoría 03'
            }
        ],
        DGM: [
            {
                ServiciosDGM: 'Autogate'
            }
        ],
        

    },
    //Sambil
    {
        DIDA:[
            {
                ServiciosDIDA:'Corrección de datos personales en la base de datos del Sistema Dominicano de Seguridad Social (SDSS)'
            },
            {
                ServiciosDIDA:'Solicitud de Número de Seguridad Social (NSS)'
            },
            {
                ServiciosDIDA:'Atención de reclamaciones en el SDSS'
            },
            {
                ServiciosDIDA:'Consultas y entrega de respuestas sobre el SDSS'
            },
            {
                ServiciosDIDA:'Solicitud de historial de aportes en el SDSS'
            },
            {
                ServiciosDIDA:'Solicitud de constancia de afiliación en el Seguro Familiar de Salud y de afiliación en el Seguro de Pensiones.'
            },
            
        ],
        PN:[
            {
                ServicioPN: 'Certificación de pérdida de documentos y objetos'
            }
        ],
        DGP:[
            {
                ServicioDGP: 'Renovación de pasaporte adulto por pérdida.'
            },
            {
                ServicioDGP: 'Renovación de pasaporte adulto por deterioro.'
            },
            {
                ServicioDGP: 'Renovación de pasaporte menor por pérdida.'
            },
            
        ],
        DGM:[
            {
                ServiciosDGM: 'Autogate'
            }
        ],
        TSS:[
            {
                ServiciosTSS: 'Información de reclamaciones relacionadas con normalización de RNC, nóminas de trabajadores y períodos omisos.'
            }
        ],

    },
    //Expreso
    {
        ADESS: [
            {
                ServiciosADESS: 'Consulta para ciudadanos sobre beneficios y perfil familiar.'
            }
        ],
        ASDE: [
            {
                ServiciosASDE: 'Información general.'
            },
            {
                ServiciosASDE: 'Registro civil para legalización de contratos de venta de muebles y financiamiento de vehículos.'
            }
        ],
        DGJP: [
            {
                ServiciosDGJP: 'Pensión por antigüedad'
            },
            {
                ServiciosDGJP: 'Inclusiones a nómina de pensiones'
            }
        ],
        DGP:[
            {
                ServicioDGP: 'Renovación de pasaporte para adultos por vencimiento.'
            }
        ]
    },


     //Megacentro
    {
        ADESS: [
            {
            ServiciosADESS: 'Solicitud Reemplazo de Tarjeta'
            },
            {
            ServiciosADESS: 'Consulta para Ciudadanos',
            }
        ],
        ASDE: [
            {
                ServiciosASDE: 'Registro civil.'
            }
        ],
        DIDA: [
            {
                ServiciosDIDA:'Consultas y entrega de respuestas sobre el SDSS'
            },
            {
                ServiciosDIDA:'Solicitud de corrección de datos personales en la base de datos del Sistema Dominicano de Seguridad Social (SDSS)'
            },
            {
                ServiciosDIDA:'Solicitud de Número de Seguridad Social (NSS)'
            },
            {
                ServiciosDIDA: 'Solicitud de Constancia de Afiliación en el Seguro Familiar de Salud y Afiliación en el Seguro de Pensiones'
            },
            {
                ServiciosDIDA: 'Atención de Reclamaciones'
            }
        ],
        INTRANT: [
            {
            ServiciosINTRANT:'Duplicado de Licencia de conducir por pérdida.'
            },
            {
            ServiciosINTRANT:'Duplicado de Licencia de conducir por deterioro.'
            },
            {
            ServiciosINTRANT: 'Renovación licencia de conducir categoría 02'
            },
        ],
        MIP: [
            {
            ServiciosMIP: 'Licenciamiento por Tenencia y Porte de Armas de Fuego para Persona Fisica'
            },
        ],
        PGR : [
            {
            ServiciosPGR: 'Certificacion de Firma de Documentos Notariales y Oficiales'
            },
        ],
        SIE: [
            {
                ServiciosSIE: 'Reclamaciones en Tarifas BTS1 y BTS2'
            },
        ],
        SISALRIL :[
            {
                ServiciosSISALRIL: 'Atención a Peticiones, Quejas, Reclamos y Sugerencias'
            },
            {
                ServiciosSISALRIL: 'Investigación de Traspasos por Alto Costo y/o Cirugía Pendiente'
            },
            {
                ServiciosSISALRIL: 'Respuesta a las Solicitudes y Casos (Revisión de cuenta clínica)'
            },
            {
                ServiciosSISALRIL: 'Respuesta a la solicitud de negación de cobertura '
            },
            {
                ServiciosSISALRIL: 'Investigación de Afiliación y/o Traspaso irregular'
            }
        ],
        SUPERATE: [
            {
                ServiciosSUPERATE: 'Solicitud de cambio de direccion'
            },
            {
                ServiciosSUPERATE: 'Solicitud de Exclusion de Miembro'
            },
            {
                ServiciosSUPERATE: 'Solicitud de cambio de jefe de hogar por discapacidad'
            },
            {
                ServiciosSUPERATE: 'Solicitud de Actualizacion de datos'
            }
        ],
    },

    //Santiago
    {
        TSS: [
            {
                ServiciosTSS: 'Información de reclamaciones relacionadas con normalización de RNC, nóminas de trabajadores y períodos omisos.'
            },
        ],
        SIE:[
            {
                ServiciosSIE: 'Reclamaciones en Tarifas BTS1 y BTS2'
            },
        ],
        SISALRIL :[
            {
                ServiciosSISALRIL: 'Atención a Peticiones, Quejas, Reclamos y Sugerencias'
            },
            {
                ServiciosSISALRIL: 'Investigación de Traspasos por Alto Costo y/o Cirugía Pendiente'
            },
            {
                ServiciosSISALRIL: 'Respuesta a las Solicitudes y Casos (Revisión de cuenta clínica)'
            },
            {
                ServiciosSISALRIL: 'Investigación de Afiliación y/o Traspaso irregular'
            },
        ],
        ADESS : [
            {
                ServiciosADESS: 'Solicitud Reemplazo de Tarjeta'
            },
            {
                ServiciosADESS: 'Reclamo por Aplicacion de nomina'
            }
        ],
        SUPERATE: [
            {
                ServiciosSUPERATE: 'Solicitud de cambio de direccion'
            },
        ],
        MESCYT: [
            {
                ServiciosM: 'Legalización de Documentos Académicos Emitidos por las IES Nacionales Activas'
            }
        ],
        INTRANT: [
            {
            ServiciosINTRANT:'Duplicado de Licencia de conducir por pérdida.'
            },
            {
            ServiciosINTRANT:'Duplicado de Licencia de conducir por deterioro.'
            },
            {
            ServiciosINTRANT: 'Renovación licencia de conducir categoría 02'
            },
        ],
        DIDA:[
            {
                ServiciosDIDA:'Solicitud de Número de Seguridad Social (NSS)'
            },
            {
                ServiciosDIDA:'Corrección de datos personales en la base de datos del Sistema Dominicano de Seguridad Social (SDSS)'
            },
            {
                ServiciosDIDA:'Solicitud de constancia de afiliación en el Seguro Familiar de Salud y de afiliación en el Seguro de Pensiones.'
            },
            {
                ServiciosDIDA:'Atención de reclamaciones en el SDSS'
            },
            {
                ServiciosDIDA:'Consultas y entrega de respuestas sobre el SDSS'
            },
        ],
        DGM: [
            {
                ServiciosDGM: 'Autogate'
            },
        ],
    },

    //Colina Centro
    {
        DGM:[
            {
                ServiciosDGM: 'Permiso de Salida de Menores de Edad'
            },
        ],
        ADESS : [
            {
                ServiciosADESS: 'Solicitud Reemplazo de Tarjeta'
            },
            {
                ServiciosADESS: 'Reclamo por Aplicacion de nomina'
            },
            {
                ServiciosADESS: 'Reclamo por Balance o Fondo no disponible'
            },
        ],
        SUPERATE: [
            {
                ServiciosSUPERATE: 'Solicitud de cambio de direccion'
            },
        ],
        TSS: [
            {
                ServiciosTSS: 'Información de reclamaciones relacionadas con normalización de RNC, nóminas de trabajadores y períodos omisos.'
            },
        ],
        SISALRIL:[
            {
                ServiciosSISALRIL: 'Investigación de Afiliación y/o Traspaso irregular'
            },
            {
                ServiciosSISALRIL: 'Investigación de Traspasos por Alto Costo y/o Cirugía Pendiente'
            },
            {
                ServiciosSISALRIL: 'Respuesta a las Solicitudes y Casos (Revisión de cuenta clínica)'
            },
        ],
        DIDA: [
            {
                ServiciosDIDA:'Consultas y entrega de respuestas sobre el SDSS'
            },
            {
                ServiciosDIDA:'Solicitud de corrección de datos personales en la base de datos del Sistema Dominicano de Seguridad Social (SDSS)'
            },
            {
                ServiciosDIDA:'Solicitud de Número de Seguridad Social (NSS)'
            },
            {
                ServiciosDIDA: 'Solicitud de Constancia de Afiliación en el Seguro Familiar de Salud y Afiliación en el Seguro de Pensiones'
            },
            {
                ServiciosDIDA: 'Atención de Reclamaciones'
            },
        ],
        MINE:[
            {
                ServiciosMine: 'Certificación de Exequátur'
            }
        ],
        MIP: [
            {
            ServiciosMIP: 'Licenciamiento por Tenencia y Porte de Armas de Fuego para Persona Fisica'
            },
        ],
        SIE:[
            {
                ServiciosSIE: 'Reclamaciones en Tarifas BTS1 y BTS2'
            },
        ],
    },
    
    //
];
export default DataServicios;