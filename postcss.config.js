const postCssImport = require( "postcss-import" );

module.exports = {
    parser: "postcss",
    plugins: [
        postCssImport()
    ]
}