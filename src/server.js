
import './env';
const express = require('express')
const app = express()
import logger from 'morgan';

const PORT = process.env.PORT || 4000;


const alramRouter = require('./routes/alram')

app.use('/', alramRouter);
app.use('/alram', alramRouter);



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})










// $env:NODE_ENV="dev"; yarn dev