const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
require('dotenv').config();
const schema = require('./schema/schema');

const app = express();
const PORT = 3000;

// connect to database
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
