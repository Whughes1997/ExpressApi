const express = require('express');
const cors = require('cors');

import routes from('../routes')
let app = express();

app.use(cors());
app.use(express.json);

add('./api', apiRouter);


app.listen(3000);