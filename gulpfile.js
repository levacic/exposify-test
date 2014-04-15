var gulp = require( "gulp" );
var sourceStream = require( "vinyl-source-stream" );
var browserify = require( "browserify" );
var exposify = require( "exposify" );

exposify.config = {
	jquery: "$"
};

gulp.task( "default", function() {
	browserify( "./source/app.js" )
		.transform( exposify )
		.bundle()
		.pipe( sourceStream( "output.js" ) )
		.pipe( gulp.dest( "build" ) );
});
