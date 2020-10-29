//To handle javascript promises

describe('Handle Promises', function() {

	it('Open protractor website', function() {

		browser.get('https://www.protractortest.org/#/').then(function() {

			console.log('protractor website is opened');
		})

	})
})
