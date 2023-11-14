const mongoose = require('mongoose');
const express = require('express');
const app = express();
const employeeRoute = require('./controller/employeeRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://challadeepika2004:Deepika2004@cluster0.lakefw4.mongodb.net/employees");

var db = mongoose.connection;
db.on('open', () => console.log('Connected to DB'));
db.on('error', () => console.log('Error Occurred'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/employeeRoute', employeeRoute);

app.listen(4000, () => {
    console.log('Server Started at 4000');
});
