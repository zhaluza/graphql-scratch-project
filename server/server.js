const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');

const PORT = 3000;

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
