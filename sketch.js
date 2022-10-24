function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);      
  noFill()           
  stroke(255)         
  rectMode(CENTER)
  var w=mouseX/10

  for(var j=0;j<height/50;j++)
  {
    for(var i=0;i<width/50;i++)
    {
      stroke("#d8e2dc") 
      rect(50+100*i,50+100*j,mouseX/10)

      stroke("#e76f51")
      ellipse(50+100*i,50+100*j,mouseY/4)

      stroke("#cdb4db")
      rect(100+50*i,100+50*j,50)
    }
  }
}
