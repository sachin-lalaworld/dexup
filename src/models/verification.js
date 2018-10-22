const mongoose  = require('mongoose')

var VerificationSchema = {
    emailID : {
        type : String,
        default : null
    },
    mobile : {
        dialCode : {
            type : String,
            default : null
        },
        number : {
            type : Number,
            default : null
        }
    },
    otp : {
        code : {
            type : String,
        },
        attempt : {
            type : Number,
            default : 0
        }
    },
    verified : {
        type : Boolean,
        default : false
    }
}

module.exports = mongoose.model("Verification", VerificationSchema)
