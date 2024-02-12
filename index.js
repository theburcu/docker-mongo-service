require('dotenv').config();
require('./src/config/dbconnect').connect();

const express = require('express');

const UserRouter = require('./src/routes/UserRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', UserRouter);

const PORT = process.env.NODE_PORT;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
});
