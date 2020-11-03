describe('Protractor Element Demo', function() {

	// create a function to enter the values and select the operator to do
	// calculation

	function Calc(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values)

			{

				if (values == c) {
					item.click();
				}

			})
		})

		element(by.id("gobutton")).click();
	}

	it('Locators', function() {

		/*
		 * browser.waitForAngularEnabled(false);
		 * browser.get("http://google.com");//non angular apps
		 */

		// Navigate to protractor demo app
		browser.get('http://juliemr.github.io/protractor-demo/');

		// Pass the arguments to the Calc function

		Calc(3, 5, "MULTIPLICATION");
		Calc(3, 5, "DIVISION");
		Calc(3, 5, "DIVISION");
		Calc(10, 6, "ADDITION");

		// get all the results and print the values in console

		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {

								console.log(text);
							})

				})

	})

})