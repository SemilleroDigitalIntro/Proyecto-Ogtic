const mysql = require('mysql');
const express = require('express');

const App = express();
App.set('port', config.app.port)
module.exports = App;
App.use('/Users',Usuarios);