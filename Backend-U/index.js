const app = require('./app');
 app.listen(app.get('port'), ()=>{
    console.log('Escuchando servidor en puerto: '+ app.get('port'))
 });