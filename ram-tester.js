// Generated by Hexa https://hexalang.github.io
// RAM
// LICENSE LGPL-3.0
;(function() {
	"use strict"
	const $global = typeof(window) === "undefined"? global : window
	if (typeof($global.require) === "undefined") { $global.require = function () {} };
	var console_110 = $global.console
	function hasOwnProperty(object_144, name_145) { return object_144.hasOwnProperty(name_145) };
	{
		{
			window.window.document.getElementById('test').onclick = () => {
				const alloc05 = window.window.document.getElementById('alloc05').checked;
				const alloc1 = window.window.document.getElementById('alloc1').checked;
				const alloc2 = window.window.document.getElementById('alloc2').checked;
				const multiplier = (alloc05)? (1) : (alloc1)? (2) : (alloc2)? (4) : 8;
				console.log('Engage!');
				const bytes1Gb = 1024 * 1024 * 1024;
				const gigabyte = 33554432 * multiplier;
				const two_gigabyte = gigabyte * 2;
				try {
					const view = new Float64Array(two_gigabyte);
					const cache = new Float64Array(1024 * 1024 * 4);
					view.fill(123);
					view.fill(234);
					view.fill(456);
					const bytes = view.length * 8;
					console.log(bytes + ' bytes', (bytes / bytes1Gb) + ' gigabytes');
					let best = 99999;
					let i = 0;
					while (i < 20) {
						cache.fill(123 + i + 0);
						cache.fill(123 + i + 1);
						cache.fill(123 + i + 2);
						const begin1 = Date.now();
						view.copyWithin(gigabyte, 0, gigabyte);
						const diff1 = Date.now() - begin1;
						cache.fill(123 + i + 0);
						cache.fill(123 + i + 1);
						cache.fill(123 + i + 2);
						const begin2 = Date.now();
						view.copyWithin(0, gigabyte, gigabyte + gigabyte);
						const diff2 = Date.now() - begin2;
						cache.fill(123 + i + 0);
						cache.fill(123 + i + 1);
						cache.fill(123 + i + 2);
						const diff = (diff1 > diff2)? (diff1) : diff2;
						if (diff < best) { best = diff };
						i++;
					};
					window.window.document.getElementById('results').innerHTML = (('<p><b>RAM Speed fill: ' + (multiplier / 4) + ' Gb in ') + (best) + 'ms at ' + (Math.round((1 / ((best) / 1000)) * 1000 * 3) * (multiplier / 4)) + ' megabytes per second</b></p>');
					console.log('Engines off!');
				} catch (temp) {
					if (true) { 
					const e = temp
					{
						window.window.alert('Array buffer allocation failed. Try lower value, other browser or free some RAM!');
					} } else
					
					throw temp;
				};
			};
		}
	}
})();
