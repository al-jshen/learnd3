const svg = d3.select('svg');

const height = +svg.attr('height');
const width = +svg.attr('width');

const render = (data) => {
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, height])

    console.log(width / data.length)
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
            .style('width', width / data.length - 3)
            .style('height', d => yScale(d.value))
            .attr('x', (d, i) => (width / data.length) * i  )
            .attr('y', d => height - yScale(d.value))
}

d3.csv('data.csv')
    .then((data) => {
        data.forEach((d) => {
            d.value = +d.value
        })
        render(data)
    })

