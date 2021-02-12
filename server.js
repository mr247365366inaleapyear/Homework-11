
const express = require('express');

//Initializing app and creating port

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);


app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
