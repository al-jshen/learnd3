const dat = [
  {
    "name": "Andy",
    "val": 80
  },
  {
    "name": "Beth",
    "val": 57
  },
  {
    "name": "Craig",
    "val": 67
  },
  {
    "name": "Derek",
    "val": 25
  },
  {
    "name": "Evelyn",
    "val": 37
  },
  {
      'name': 'Felix',
      'val': 77}
]

const svg = d3.select('svg');
const height = +svg.attr('height');
const width = +svg.attr('width');
const cols = d3.scaleSequential(d3.interpolateYlOrBr);

const xScale = d3.scaleLinear()
    .domain([0, dat.length]).nice()
    .range([0, width])

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dat, d => d.val)]).nice()

const colScale = d3.scaleSequential()
    .domain([0, 100]).nice()
    .interpolator(d3.interpolateRainbow)

const lineGen = d3.line()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d.val)*height)
    .curve(d3.curveCatmullRom.alpha(0.3))

console.log(lineGen(dat))

svg.append('path')
    .attr('d', lineGen(dat))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
