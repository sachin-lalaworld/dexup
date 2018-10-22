const mongoose  = require('mongoose')

var CustomerSchema  = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        default : null
    },
    emailId : {
        type   : String,
        unique : true 
    },
    mobile : {
        type : number,
        default : null,
        unique : true
    },
    country : {
        type : String,
        default : null
    },
    password : {
        type : String,
    },
    status : {
        type : Boolean,
        default : true
    },
    currency : {
        isoCode : {
            type : String,
            default : 'US Dollar'
        },
        currencyCode : {
            type : String,
            default : 'USD'
        },
        currencySymbol : {
            type : String,
            default : '$'
        }
    },
    twoFaStatus : {
        type : Boolean,
        default : false
    },
    twoFaCode : {
        type : String,
        default : null
    },
    twoFaSource : {
        type : String,
        default : null
    },
    ipWhitelist : {
        type : String,
        default : null
    },
    phisingCode: {
        type : String,
        default : null
    },
    createdAt : Date,
    updatedAt : Date
})

module.exports = mongoose.model("Customers", CustomerSchema)
