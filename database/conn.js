const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host : 'sql.freedb.tech',
//     user: 'freedb_adjerry_admin',
//     port : 3306,
//     password : 'YeGn3Bc%dQ#Q5Am',
//     database: 'freedb_adjerry'
// });

const connection = mysql.createConnection({
    host : '54.164.178.165',
    user: 'remote_ads',
    port : 3306,
    password : 'Admin@2024!',
    database: 'ads'
});

connection.connect(function(err){
    if(err){
        console.log('Error connection Mysql ' + err);
    }else{
        console.log('Connection successfull.');
    }
}); 

module.exports = connection;