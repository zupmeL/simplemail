const express = require( "express" );
const path = require( "path" );
const { emailService } = require( "./lib/services" );
const validateIncomingEmail = require( "./lib/services/emailService/validateIncomingEmail" );
const catchExceptions = require( "./lib/utils/catchExceptions" );

const app = express();

app.use( express.json() );
app.use( express.static( path.join( __dirname, "..", "dist" ) ) );

app.get( "/emails", ( req, res ) => {
    const emails = [ 
        {
            id: 1,
            subject: "Test Subject 1",
            isImportant: true,
            content: "This is my test content 1",
            timestamp: Date.now() - 450000
        },
        {
            id: 2,
            subject: "Test Subject 2",
            isImportant: false,
            content: "This is my test content 2",
            timestamp: Date.now() - 600000
        },
        {
            id: 3,
            subject: "Test Subject 3",
            isImportant: true,
            content: "This is my test content 3",
            timestamp: Date.now() - 500000
        },
        {
            id: 4,
            subject: "Test Subject 4",
            isImportant: true,
            content: "This is my test content 4",
            timestamp: Date.now() - 400000
        },
    ];

    res.json( emails );
});

app.post( 
    "/emails",
    validateIncomingEmail,
    catchExceptions( async ( req, res ) => {
        const { recipients, subject, message } = req.body;
        const email = await emailService.createEmail( recipients, subject, message );
        res.json( email );
    } )
);

app.all( "*", ( req, res ) => {
    res.sendFile( path.join( __dirname, "..", "dist", "index.html" ) );
});

app.use( ( error, req, res, next ) => {
    res.status( 500 ).json( { error: error.message } );
})

module.exports = app;

