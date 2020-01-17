
var r = 0;
var g = 0;
var b=0;
var rv, gv, bv;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r = 255*rv;
  // change the value of Green based on the mouse movement about the X axis
  g = 255*gv;
  // change the value of Blue based on the mouse movement about the X axis
  b = 255*bv;
  // Use the map() function to do so. 
  if(World.mouseX<400){
    rv = 1;
    gv = World.mouseX/400;
    bv = 0;
  } else if(World.mouseX>=400 && World.mouseX<800){
    rv = 1-(World.mouseX%400/400);
    gv = 1;
    if(World.mouseX>600){
      bv = (World.mouseX)%400/400;
    }
  } else if(World.mouseX>=800 && World.mouseX<1200){
    rv = 0
    gv = 1-(World.mouseX%800/400);
    bv = 1
  }
  // Pass the values to the background() function you have learnt previously.
  background(rgb(r,g,b));
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill("white");
  ellipse(World.mouseX,200,50);
}