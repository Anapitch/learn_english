const express = require('express')
const mysql = require('mysql');
const router = express.Router()
const  con  = require('../database/index')
let consql = mysql.createConnection(con);

router.get('/',async(req,res) =>{
    const sql = "SELECT * FROM datavocab WHERE type = 2 ORDER BY RAND()"
    consql.query(sql,(error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.json(results)
      });
    //res.json("hello world")
})
module.exports = router

