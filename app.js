
function randomizer () {
  var data = [];
  for (var i = 0; i < 30; i++) {
    data.push(Math.round(Math.random()*100));
  }
  return data;
}

console.log(data);

var data = randomizer();//simply the data

d3.select(".bars")//calling d3
  .selectAll('div')//select the components we are working with. They do not have to be a real thing yet
  .data(data)//This is the data that is being used
  .enter()//Enter is where the magic happens, this is the method in d3 that allows all of the functionality occur
  .append('div')//similar to jQuery, this is how you populate the data to the view. We are simply populating some divs
  .style("width", function(d){//The style may also be calculated. In this case we are setting width to 0. Note that the d in the function represented each data position.
    return 0;
  });

d3.select('.bars') //On the second go around we are referencing the element in which we are within
  .selectAll('div')//We need to select all of the divs we made in the enter function
  .data(data) //Once again, the data is used
  .transition() //Now in order to animate, we need to use a transition method
  .duration(2000) //This is how long the animation will last in milliseconds
  .style("width", function(d){ //Now I am setting actual values for visualization. I am multiplying times ten so I can amplify the values in pixels
    return d * 10 + "px";
  })
  .style('background-color', function(d,i){
        return d3.hsl(Math.random()*360,Math.random(),Math.random()); //color from 0 to 360 produces the rainbow, we are essentially evenly splitting said rainbow by number of data points
  });
