{
	"use strict"
	const $global$ = typeof(window) === "undefined"?global:window
	var Buffer = $global$.Buffer
	var ProcessStd = $global$.ProcessStd
	var Process = $global$.process
	var ParsedPath = $global$.ParsedPath
	var Path = require("path")
	var Fs = require("fs")
	var RangeError = $global$.RangeError
	var ReferenceError = $global$.ReferenceError
	var SyntaxError = $global$.SyntaxError
	var TypeError = $global$.TypeError
	var URIError = $global$.URIError
	var EvalError = $global$.EvalError
	var Error = $global$.Error
	var RegExpMatch = $global$.RegExpMatch
	var RegExp = $global$.RegExp
	var Date = $global$.Date
	var Array = $global$.Array
	var Console = $global$.console
	var Map = $global$.Map
	var JSON = $global$.JSON
	var Math = $global$.Math
	var String = $global$.String
	var Float = $global$.Float
	var Bool = $global$.Bool
	var Int = $global$.Int
	var Any = $global$.Any
	var Void = $global$.Void
	var Float64Array = $global$.Float64Array
	{
		{
			{
				console.log('Engage!');
				const bytes = (1024 * 1024 * 1024 * 1) || 0;
				const half_of_elements = ((bytes) / 8) / 2;
				const gigabyte = 134217728;
				const two_gigabyte = 268435456;
				const view = new Float64Array(two_gigabyte - 2);
				view.fill(123);
				view.fill(234);
				console.log(view.length);
				let best = 9999;
				{
					let i = 0;
					while (i < 20) {
						const begin = Date.now();
						view.copyWithin(gigabyte, 0, gigabyte);
						const diff = Date.now() - begin;
						if (diff < best) { best = diff };
						i++;
					};
				};
				document.write('<p><b>RAM Speed fill: 1 Gb in ' + (best) + 'ms at ' + Math.round((1 / ((best) / 1000)) * 1000 * 3) + ' megabytes per second</b></p>');
				console.log('Engines off!');
			};
		}
	}
}