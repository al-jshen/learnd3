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
  },
  {
      'name': 'Felix',
      'score': 77}
];

const svg = d3.select('svg');
const height = +svg.attr('height');
const width = +svg.attr('width');
const cols = d3.scaleSequential(d3.interpolateYlOrBr);

//const xScale = d3.scale.ordinal()
//    .domain([d3.range(data.length)]).nice()
//
//const yScale = d3.scale.linear()
//    .domain([0, d3.max(data, d => d.score)]).nice()

const colScale = d3.scaleSequential()
    .domain([0, 100]).nice()
    .interpolator(d3.interpolateRainbow);

const g = svg.selectAll('g')
    .data(scores)
    .enter()
    .append('g')
        .attr('class', 'item')
        .attr('transform', (d, i) => `translate(50, ${i*100+20})`);

g.append('rect')
    .attr('width', (d) => d.score)
    .attr('height', (d) => d.score)
    .attr('fill', (d) => colScale(d.score));


g.append('text')
    .text((d) => d.name)
    .style('fill', 'black')
    .attr('font-size', 20)
    .attr('transform', (d) => `translate(100, ${d.score/2})`);
    
// svg.selectAll('.item')
//     .sort((a, b) => {
//         console.log(a.score - b.score)
//         return b.score - a.score
//     })
