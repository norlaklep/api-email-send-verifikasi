require('dotenv').config();

const app = require("./app");

const port = 8000;
app.listen(port, () => console.log(`listening to port ${port}`))