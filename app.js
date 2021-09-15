require("dotenv/config");

require("./db");

const express = require("express");
const app = express();

const hbs = require("hbs");
hbs.registerPartials(`${__dirname}/views/pages/partials`);

require("./config")(app);
require('./config/session.config')(app);

app.locals.siteTitle = 'Backend Project';

require("./routes")(app);

require("./error-handling")(app);

module.exports = app;
