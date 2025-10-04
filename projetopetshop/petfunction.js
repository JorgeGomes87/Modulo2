const sqlite3 = require('sqlite3').verbose();





const db = new sqlite3.Database('./petshop.db');

function listarPets() {
    db.all("select * from pets", [] , (err,rows)  => { console.log("pets cadastrados")
        console.log(rows)
    } ) }
    listarPets()
    

