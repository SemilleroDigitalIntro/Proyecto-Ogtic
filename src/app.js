import React, { useEffect, useState } from 'react';

function App() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        // Hacer la solicitud al backend
        fetch('http://localhost:5000/api/datos')
            .then((response) => response.json())
            .then((data) => setDatos(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Datos de la tabla</h1>
            <ul>
                {datos.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;