/*!
 * UUID v4 generator and parser
 * author: Stefan Benicke <stefan.benicke@gmail.com>
 * version: 1.1
 * license: MIT
 */

;(function(global) {
	'use strict';

	function uuid() {
		return uuid.create();
	}


	uuid.create = function() {
		var bytes = uuid.createBinary();
		return uuid.parseBinary(bytes);
	};

	uuid.createBinary = function() {
		// version 4
		var bytes = _getRandomBytes();
		bytes[6] = bytes[6] & 0x0f | 0x40;
		bytes[8] = bytes[8] & 0x3f | 0x80;
		return bytes;
	};

	uuid.parseBinary = function(bytes) {
		var result = '';
		for (var i = 0; i < 16; i++) {
			if (i === 4 || i === 6 || i === 8 || i === 10) {
				result += '-';
			}
			result += _toHex(bytes[i]);
		}
		return result;
	};

	uuid.parse = function(string) {
		var result = new BufferView(16);
		var charCount = 0;
		for (var i = 0; i < 16; i++) {
			if (i === 4 || i === 6 || i === 8 || i === 10) {
				charCount++;
			}
			result[i] = _toNumber(string[charCount] + string[charCount + 1]);
			charCount += 2;
		}
		return result;
	};

	var BufferView = global.Buffer || global.Uint8Array || Array;

	var _getRandomBytes;
	if ( typeof global.require === 'function') {
		_getRandomBytes = function() {
			return global.require('crypto').randomBytes(16);
		};
	} else if (global.crypto && crypto.getRandomValues) {
		_getRandomBytes = function() {
			var bytes = new Uint8Array(16);
			return crypto.getRandomValues(bytes);
		};
	} else {
		_getRandomBytes = function() {
			var bytes = [];
			for (var i = 0; i < 16; i++) {
				bytes[i] = Math.random() * 16 | 0;
			}
			return bytes;
		};
	}

	function _toHex(number) {
		var hex = Number(number).toString(16);
		if (hex.length & 1) {
			return '0' + hex;
		}
		return hex;
	}

	function _toNumber(hex) {
		return parseInt(hex, 16);
	}

	if ( typeof define === 'function' && define.amd) {
		define(function() {
			return uuid;
		});
	} else if ( typeof module !== 'undefined' && module.exports) {
		module.exports = uuid;
	} else {
		global.uuid = uuid;
	}

})(this);
