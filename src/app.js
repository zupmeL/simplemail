const express = require( "express" );
const path = require( "path" );
const app = express();

app.use( express.static( path.join( __dirname, "..", "dist" ) ) );

app.get( "/emails", ( req, res ) => {
    const emails = [ 
        {
            id: 1,
            subject: "Test Subject 1",
            isImportant: true,
            content: "This is my test content 1",
            timestamp: Date.now() + 100000
        },
        {
            id: 2,
            subject: "Test Subject 2",
            isImportant: false,
            content: "This is my test content 2",
            timestamp: Date.now() + 200000
        },
        {
            id: 3,
            subject: "Test Subject 3",
            isImportant: true,
            content: "This is my test content 3",
            timestamp: Date.now() + 300000
        },
        {
            id: 4,
            subject: "Test Subject 4",
            isImportant: true,
            content: "This is my test content 4",
            timestamp: Date.now() + 400000
        },
    ];

    res.json( emails );
})

app.all( "*", ( req, res ) => {
    res.sendFile( path.join( __dirname, "..", "dist", "index.html" ) );
});

module.exports = app;

