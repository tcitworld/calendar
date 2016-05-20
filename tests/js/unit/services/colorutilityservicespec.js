describe('ColorUtilityService', function () {
	'use strict';

	var colorUtilityService;

	beforeEach(function () {
		module('Calendar');

		inject(function ($injector) {
			colorUtilityService = $injector.get('ColorUtilityService');
		});
	});

	it ('should return a list of default colors', inject(function() {
		expect(colorUtilityService.colors).toEqual([]);
	}));

	it ('should extract RGB codes from HEX string', inject(function() {
		expect(colorUtilityService.extractRGBFromHexString('#000')).toEqual('');
	}));

	it ('should ensure to return two digits', inject(function() {
		expect(colorUtilityService._ensureTwoDigits('1')).toEqual('01');
		expect(colorUtilityService._ensureTwoDigits('42')).toEqual('42');
	}));

	it ('should convert RGB to HEX properly', inject(function() {
		expect(colorUtilityService.rgbToHex(0,0,0)).toEqual('#000000');
		expect(colorUtilityService.rgbToHex(123,0,0)).toEqual('#7b0000');
		expect(colorUtilityService.rgbToHex(0,123,0)).toEqual('#007b00');
		expect(colorUtilityService.rgbToHex(0,0,123)).toEqual('#00007b');
		expect(colorUtilityService.rgbToHex(255,255,255)).toEqual('#ffffff');
	}));

	it ('should return a random color', inject(function() {
		expect(colorUtilityService.randomColor()).toMatch(/^#([0-9a-f]{6})$/i);
		expect(colorUtilityService.randomColor()).not.toEqual(colorUtilityService.randomColor());
	}));
});
