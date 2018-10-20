const express       = require('express')
const cors          = require('cors')
const helmet        = require('helmet')
const bodyParser    = require('body-parser')
const rateLimit     = require('express-rate-limit')
const csrf          = require('csurf')
const session       = require('express-session')
const cookieParser  = require('cookie-parser')
const config        = require('./config/config')
const errHndlr      = require('./src/utils/errors')
const logger        = require('./logs/logger')
//const winston       = require('winston')
// const expressWinston= require('express-winston')
require('winston-daily-rotate-file')
require('./database/db')

// Initializing express app
const app = express()

// Adds helmet middleware
app.use(helmet())

//Etag disable
app.set('etag', false)

//Body Parser Configuration
app.use(bodyParser.json({ // to support JSON-encoded bodies
    limit: '1mb'
}))
  
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    limit: '1mb',
    extended: true
}))

// Using CORS
app.use(cors())

//Rate Limit for API
app.enable('trust proxy'); 

const limiter = new rateLimit({
    windowMs: 60 * 1000,
    max: 50,
    delayMs: 0
});

//apply to all requests
app.use(limiter)

// winston Configuration
// expressWinston.requestWhitelist.push('body');
// expressWinston.responseWhitelist.push('body');
// expressWinston.bodyBlacklist.push('backupkey', 'password', 'pin', 'mPass', 'keyObject');
// app.use(expressWinston.logger({
//   transports: [
//     new (winston.transports.DailyRotateFile)({
//       dirname: './logs',
//       filename: 'access-%DATE%.log',
//       datePattern: 'YYYY-MM-DD-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '1d'
//     })]
// }));
// express-session config
app.use(session({
    secret: 'My super session secret',
    cookie: {
      httpOnly: true,
      secure: true,
    },
    resave: false,
    saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Router Initialization
app.get('/v2', (req, res) => {
    res.status(200).json({
      msg: 'Welcome to Node BoilerPlate v2.0'
    });
});
module.exports = app;

