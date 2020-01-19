(function () {
    'use strict';

    const svg = d3.select('svg');

    const height = +svg.attr('height');
    const width = +svg.attr('width');
    const margin = {top: 30, right: 80, bottom: 70, left: 40};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const render = (data) => {
        
        const maxminScale = (d, max, min) => {
            return (d - min) / (max - min)
        };

        const c10 = d3.scaleSequential(d3.interpolateYlOrBr);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([innerHeight, margin.top]);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, innerWidth])
            .padding(0.1);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
            
        const axisG = g.append('g');

        const bottomAxisG = axisG.append('g')
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(${margin.left}, ${innerHeight})`)
            .attr('stroke', 'white');

        bottomAxisG.selectAll('.domain, .tick line')
            .remove();

        bottomAxisG.append('text')
            .text('Letter')
            .attr('fill', 'white')
            .style('font-size', '1.5em')
            .attr('x', innerWidth / 2)
            .attr('y', margin.bottom / 1.5);

        const leftAxisG = axisG.append('g')
            .call(d3.axisLeft(yScale))
            .attr('transform', `translate(${margin.left}, 0)`)
            .attr('stroke', 'white');

        leftAxisG.selectAll('.domain, .tick line')
            .remove();

        leftAxisG.append('text')
            .text('Relative Frequency')
            .attr('fill', 'white')
            .style('font-size', '1.5em')
            .attr('x', -innerHeight / 2)
            .attr('y', -margin.left*1.5)
            .attr('transform', 'rotate(-90)');

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
                .style('width', xScale.bandwidth())
                //.style('width', innerWidth / data.length - innerWidth/250)
                .style('height', d => innerHeight - yScale(d.value))
                //.attr('x', (d, i) => margin.left + (innerWidth / data.length) * i  )
                .attr('x', d => margin.left + xScale(d.name))    
                .attr('y', d => yScale(d.value))
                .attr('fill', d => c10(maxminScale(d.value, yScale.domain()[1], yScale.domain()[0])));

        g.append('text')
            .text('Relative Frequency of Letters in the English Language')
            .attr('fill', 'white')
            .attr('x', innerHeight/3)
            .attr('y', 30)
            .style('font-size', '1.5em')
            .style('font-family', 'Garamond');
    };

    d3.csv('./data/data.csv')
        .then((data) => {
            data.forEach((d) => {
                d.value = +d.value;
            });
            render(data);
        });

    d3.select('svg')
        .style('background-color', '#333')
        .style('padding', '20px');

}());
