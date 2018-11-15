require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();

app.use(json());

const port = 3001;

massive(process.env.STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    // dbInstance
    //   .create_table()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

app.listen(port, () => console.log(`Listening on ${port}`));
