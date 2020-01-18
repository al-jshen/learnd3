const svg = d3.select('svg');

const height = +svg.attr('height');
const width = +svg.attr('width');
const eyeRadius = 10

const g = svg.append('g')
    .attr('transform', `translate(${height/2}, ${width/2})`)

const circle = g.append('circle')
    .attr('r', height/3)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')

const eyeG = g.append('g')
    .attr('transform', `translate(0, ${-height/8})`)

const lEye = eyeG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -width/8)

const rEye = eyeG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', width/8)

g.append('path')
    .attr('d', d3.arc()({
        innerRadius: 70,
        outerRadius: 80,
        startAngle: Math.PI/2,
        endAngle: 3*Math.PI/2,
    }))
    .attr('transform', 'translate(0, 20)')
