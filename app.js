const exp = require('express');
const app = exp();
const boutes = require('./routes/boutes');


app.listen(3000);

app.use(exp.static('public'));

app.use(boutes);