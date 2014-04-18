var browserify = require( "browserify" );
var exposify = require( "exposify" );
var fs = require( "fs" );
var path = require( "path" );

exposify.config = {
	jquery: "$"
};

browserify( "./source/app.js" )
	.transform( exposify )
	.bundle({ debug: true })
	.pipe( fs.createWriteStream( path.join( __dirname, "bundle.js" ), "utf-8" ) );
