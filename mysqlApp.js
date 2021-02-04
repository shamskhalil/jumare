const mysql = require('mysql');

let connStr = 'mysql://root:secret@localhost:3306/testdb';
let connection = mysql.createConnection(connStr);



connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connnected !");


        let tableQuery = `CREATE TABLE IF NOT EXISTS users(
            id int primary key auto_increment, 
            fname varchar(50),
            lname varchar(50)
            ); `;

        connection.query(tableQuery, (err, a) => {
            if (err) {
                console.log('Error creating table >> ', err);
            } else {
                console.log('Table Created!');
                let insertQuery = `INSERT INTO users(fname, lname) VALUES (
                    ?,
                    ?
                );`;

                connection.query(insertQuery, ['Shams', 'Khalil'], (err, a, b, c) => {
                    if (err) {
                        console.log('Error inserting into table >> ', err);
                    } else {
                        console.log('Record Inserted ! >> ', a, b, c);
                    }
                })
            }
        })

    }
})