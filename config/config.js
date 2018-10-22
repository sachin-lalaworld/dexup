require('dotenv').config();
const config = {
    local : {
        app : {
            env  : process.env.ENVIRONMENT,
            port : process.env.PORT,
            name : process.env.APP,
            host : process.env.HOST
        },
        db : {
            uri  : process.env.DB_URI
        },
        trello : {
            token : process.env.TRELLO_TOKEN,
            key   : process.env.TRELLO_KEY,
            secret: process.env.TRELLO_SECRET,
            board : process.env.TRELLO_BOARD_ID
        } 
    }
}
module.exports = config[process.env.ENVIRONMENT]