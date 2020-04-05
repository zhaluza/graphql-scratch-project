const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const schema = require('./schema/schema');
const path = require('path');

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

// handle requests for client files
app.use(express.static(path.resolve(__dirname, '../client')));

// enable cors
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
};
app.use(cors(corsOptions));

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
