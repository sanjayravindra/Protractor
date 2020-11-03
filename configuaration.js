exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// set javascript file to run

	specs : [ 'AlertPopUP.js' ],

// set capabilities to run tests on different browsers

/*
 * capabilities: { 'browserName': 'internet explorer' }
 */

};