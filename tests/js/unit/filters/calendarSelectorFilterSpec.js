describe('The attendeeNotOrganizerFilter filter', function () {
	'use strict';

	var filter;

	beforeEach(function () {
		module('Calendar');

		inject(function ($injector) {
			filter = $injector.get('$filter')('attendeeNotOrganizerFilter');
		});
	});

	it('should be able to handle null', function () {
		expect(filter(null, null)).toEqual([]);

	});

	it('should be able to handle combinations of null and undefined', function () {
		expect(filter(undefined, null)).toEqual([]);
		expect(filter(null, undefined)).toEqual([]);

	});

	it('should be able to handle undefined', function () {
		expect(filter()).toEqual([]);
	});

	it('should be able to handle empty array', function () {
		expect(filter([])).toEqual([]);
	});

});