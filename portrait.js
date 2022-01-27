function setup() {
  createCanvas(300,400);
  background(25, 130, 80);
  
  //defalut
  circle(300/2,400/2,20);
  rect(200,80,80,20);
  
  //red fill
  fill(180,0,0);
  //circle(50,50,80);
  stroke(0,0,180);
  ellipse(200,40,80,20);
  
  // red stroke(line color)
  stroke(100,0,0);
  line(0,0,300,300);
  
  arc(50, 55, // center of ellipse
     50, 50, // width and height
     0, radians(120));// start and stop angle

}
