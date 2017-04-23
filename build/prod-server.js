const env = require('../config/prod.env');
const express = require('express');

const app = express();

app.use('/', express.static(`${__dirname}/../dist`));

app.listen(env.PORT, function () {
  console.log(`${env.APP_NAME} ${env.NODE_ENV} mode listening on port ${env.PORT}!`);
});
