/* eslint-disable no-undef */
const dbconnection = require("./config/db");
const express = require("express");
const helmet = require("helmet");
const app = express();



/* Db Connection*/
dbconnection();
/**Middlewares   helmet , bodyparser, json */
app.use(helmet());
app.use(express.urlencoded({extended : true}));
app.use(express.json());



app.listen(8888);