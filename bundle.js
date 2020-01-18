(function () {
    'use strict';

    const svg = d3.select('svg');

    const height = +svg.attr('height');
    const width = +svg.attr('width');
<<<<<<< HEAD

    const render = (data) => {
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([0, height]);

        console.log(width / data.length);
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
                .style('width', width / data.length - 3)
                .style('height', d => yScale(d.value))
                .attr('x', (d, i) => (width / data.length) * i  )
                .attr('y', d => height - yScale(d.value));
    };

    d3.csv('data.csv')
        .then((data) => {
            data.forEach((d) => {
                d.value = +d.value;
            });
            render(data);
        });
=======
    const eyeRadius = 15;

    const g = svg
        .append('g')
            .attr('transform', `translate(${height/2}, ${width/2})`);

    const circle = g
        .append('circle')
            .attr('r', height/3)
            .attr('fill', 'yellow')
            .attr('stroke', 'black');

    const eyeG = g
        .append('g')
            .attr('transform', `translate(0, ${-height/8})`)
            .attr('fill', 'white')
            .attr('stroke', 'black')
            .attr('stroke-width', 3);
            

    const lEye = eyeG
        .append('circle')
            .attr('r', eyeRadius)
            .attr('cx', -width/8);

    const rEye = eyeG
        .append('circle')
            .attr('r', eyeRadius)
            .attr('cx', width/8);

    const innerEyeG = eyeG
        .append('g')
            .attr('fill', 'black');

    innerEyeG
        .transition().duration(1000)
            .attr('transform', `translate(0, ${-2*eyeRadius/3})`)
        .transition().duration(1000)
            .attr('transform', `translate(0, 0)`);

    const linnerEye = innerEyeG
        .append('circle')
            .attr('r', eyeRadius/3)
            .attr('cx', -width/8);
        

    const rinnerEye = innerEyeG
        .append('circle')
            .attr('r', eyeRadius/3)
            .attr('cx', width/8);
            
    g
        .append('path')
            .attr('d', d3.arc()({
                innerRadius: 70,
                outerRadius: 80,
                startAngle: Math.PI/2,
                endAngle: 3*Math.PI/2,
            }))
            .attr('transform', 'translate(0, 20)');
>>>>>>> 4096c4b714c024e19387695dcda1febaeb255cab

}());
