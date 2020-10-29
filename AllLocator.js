describe('Protractor Element Demo', function() {

	// Create a function
	function Add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element(by.id("gobutton")).click();

	}

	it('Locators', function() {

		// Syntax for non angular apps

		/*
		 * browser.waitForAngularEnabled(false);
		 * browser.get("http://google.com");//non angular apps
		 */

		// Navigate to protractor demo app
		browser.get('http://juliemr.github.io/protractor-demo/');

		// Pass the arguments for the add function

		Add(2, 3);
		Add(4, 3);
		Add(8, 3);

		// get all the results and display in console

		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {

								console.log(text);
							})

				})

	})

})