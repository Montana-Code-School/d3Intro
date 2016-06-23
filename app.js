
function randomizer () {
  var data = [];
  for (var i = 0; i < 10; i++) {
    data.push(Math.round(Math.random()*100));
  }
  return data;
}
var data = randomizer();

d3.select("body")
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style("width", function(d){
    return 0;
  });

d3.select('body')
  .selectAll('div')
  .data(data)
  .transition()
  .duration(2000)
  .style("width", function(d){
    console.log(d);
    return d * 10 + "px";
  })
  .style('background-color', function(d,i){
        return d3.hsl(i/data.length*360,0.5,0.5); //color from 0 to 360 produces the rainbow, we are essentially evenly splitting said rainbow by number of data points
  });
