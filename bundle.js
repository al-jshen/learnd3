(function () {
	'use strict';

	const svg = d3.select('svg');
	const circle = svg.append('circle');
	circle.attr('r', svg.attr('height')/3);
	circle.attr('cx', svg.attr('width')/2);
	circle.attr('cy', svg.attr('height')/2);

}());
