require("dotenv").config();
const express = require("express");
const massive = require("massive");
const productCtrl = require("./products_controller")

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(`Houston, we have a ${err}`));

app.use(express.json());
  
app.post('/api/products', productCtrl.create)
app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:id', productCtrl.getOne)
app.put('/api/products/:id', productCtrl.update)
app.delete('/api/products/:id', productCtrl.delete)

app.listen(SERVER_PORT, () => {
  console.log(`It's over Anakin! I have the ${SERVER_PORT} port!`)
});