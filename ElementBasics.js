describe('Protractor Demo', function() {

	it('Locators', function() {

		// Open browser and navigate to super calculator

		browser.get('https://juliemr.github.io/protractor-demo/')

		// Enter the inputs and calculate
		element(by.model('first')).sendKeys('5')
		element(by.model('second')).sendKeys('5')
		element(by.id('gobutton')).click()

		// Validate the result

		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

		// Print the result in console
		element(by.css("h2[class='ng-binding']")).getText().then(
				function(text) {
					console.log(text);
				})

	})
})