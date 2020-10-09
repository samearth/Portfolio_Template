const exp = require('express');
const app = exp();
const boutes = require('./routes/boutes');

var port = process.env.PORT || 3000
app.listen(port);

app.use(boutes);