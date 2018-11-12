const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const EmailSchema = new Schema( {
    recipients: { type: Array, required: true },
    subject: { type: String, required: true },
    isImportant: { type: Boolean, required: false },
    message: { type: String, required: true },
    type: {
        type: String,
        enum: [ "received", "outgoing", "sent" ],
        required: true
    },
    created_at: { type: Date, default: Date.now },
} );

module.exports = mongoose.model( "Email", EmailSchema ); 