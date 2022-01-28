function setup() {
  createCanvas(300,400);
  background(135,206,250);
  fill(255,229,204);
  //face
  ellipse(145,170,120,140);
  
  
  //defalut
  fill(255,259,204);
  //nose
  circle(145,185,20);
  
  //red fill
  fill(160,82,45);
  circle(120,150,40);
  circle(170,150,40);
  stroke(0,0,180);
  
  
  // red stroke(line color)
  stroke(100,100,100);
  //torso
  line(145,240,145,350);
  //legs
  line(145,350,125,370);
  line(145,350,165,370);
  //arms
  line(145,270,125,250);
  line(145,270,165,250);
  
  //mouth
  fill(255,182,193);
  arc(145, 205, // center of ellipse
     50, 50, // width and height
     0, radians(180));// start and stop angle
  
  //hair
  line(145,100,100,80);
  line(145,100,190,80);
  line(100,80,65,240);
  line(190,80,220,240);
  
  line(145,100,90,82);
  line(90,82,60,240);
  
  line(145,100,195,82);
  line(195,82,225,235);
  
  line(145,100,80,85);
  line(80,85,55,250);
  
  line(145,100,205,85);
  line(205,85,230,230);
  
}

function draw(){ print(mouseX, mouseY);}
