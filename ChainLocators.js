describe('Chain locators demo', function() {

	// Navigate to super calculator application

	it('Open Angular js website', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');

		// Enter the inputs for calculation

		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");

		element(by.id("gobutton")).click();

		// repeater , chain locators, And css for identical tags
		element(by.repeater("result in memory")).element(
				by.css("td:nth-child(3)")).getText().then(function(text) {

			console.log(text);
		})

		// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

	})

})