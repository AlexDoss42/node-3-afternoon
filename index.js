require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance =>{
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => {
      console.log(`It's over Anakin! I have the ${SERVER_PORT} port!`)
    })
  })
    .catch((err) => {
      console.log(`Houston we have a problem`, err)
    })

