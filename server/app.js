/** require dependencies */
const express = require("express");
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

/** connec to MongoDB datastore */
try {
    mongoose.connect(url, {
        //userMongoClient: true
    })
} catch(error) {

}

let port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static', express.static(path.join(__dirname, 'static')))

app.use('/', router);

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});