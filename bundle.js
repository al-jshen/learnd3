'use strict';

var scores = [
  {
    "name": "Andy",
    "score": 80
  },
  {
    "name": "Beth",
    "score": 57
  },
  {
    "name": "Craig",
    "score": 67
  },
  {
    "name": "Derek",
    "score": 25
  },
  {
    "name": "Evelyn",
    "score": 37
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
            return `translate(50, ${i*100+20})`
        });

const cols = d3.scaleSequential(d3.interpolateYlOrBr);

svg.selectAll('.item')
    .append('rect')
        .attr('width', (d) => d.score)
        .attr('height', (d) => d.score)
        .attr('fill', (d) => cols(d.score/100));


svg.selectAll('.item')
    .append('text')
        .text((d, i) => {
            return d.name
        })
        .style('fill', 'black')
        .attr('font-size', 10)
    .attr('transform', (d, i) => `translate(100, ${d.score/2})`);
