(function () {
    'use strict';

    const svg = d3.select('svg');

    const height = +svg.attr('height');
    const width = +svg.attr('width');
    const margin = {top: 20, right: 20, bottom: 20, left: 20};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const render = (data) => {
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([0, innerHeight]);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, innerWidth]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
            
        g.append('g')
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(0, ${innerHeight})`);

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
                .style('width', xScale.bandwidth()*0.95)
                //.style('width', innerWidth / data.length - innerWidth/250)
                .style('height', d => yScale(d.value))
                //.attr('x', (d, i) => margin.left + (innerWidth / data.length) * i  )
                .attr('x', d => xScale(d.name))    
                .attr('y', d => innerHeight - yScale(d.value));
    };

    d3.csv('data.csv')
        .then((data) => {
            data.forEach((d) => {
                d.value = +d.value;
            });
            render(data);
        });

    svg.style('border', '1px solid red');

}());
