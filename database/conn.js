const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'sql.freedb.tech',
    user: 'freedb_adjerry_admin',
    port : 3306,
    password : 'YeGn3Bc%dQ#Q5Am',
    database: 'freedb_adjerry'
});

connection.connect(function(err){
    if(err){
        console.log('Error connection Mysql ' + err);
    }else{
        console.log('Connection successfull.');
    }
});

module.exports = connection;