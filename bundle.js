'use strict';

var scores = [
  {
    "name": "Andy",
    "score": 25
  },
  {
    "name": "Beth",
    "score": 39
  },
  {
    "name": "Craig",
    "score": 42
  },
  {
    "name": "Diane",
    "score": 35
  },
  {
    "name": "Evelyn",
    "score": 48
  }
];

const svg = d3.select('svg');

const height = +svg.attr('height');
const width = +svg.attr('width');

svg.selectAll('g')
    .data(scores)
    .enter()
    .append('g')
        .attr('class', 'item')
        .attr('transform', (d, i) => {
            return `translate(50, ${i*50+20})`
        });

svg.selectAll('.item')
    .append('rect')
        .attr('width', 20)
        .attr('height', 30);

svg.selectAll('.item')
    .append('text')
        .text((d, i) => {
            return d.name
        })
        .style('fill', 'black')
        .attr('font-size', 10)
        .attr('transform', 'translate(50, 0)');
