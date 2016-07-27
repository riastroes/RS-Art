function Pinguin(){

  this.pos = createVector(width/2, height/2);
  this.dir = createVector(0,0);
  this.Engine = new Engine();
  this.Engine.position = this.pos;
  this.Engine.direction = this.dir;
  this.target = createVector(0,0);

  this.style(1);
}
Pinguin.prototype.seek = function(){
  this.Engine.maxspeed = 1;
  this.target = createVector(random(width), random(height));

  this.dir = this.Engine.seek(this.target);
  //this.Engine.direction.x = this.dir.x;
  //this.Engine.direction.y = dir.y;

  this.Engine.applyForce(this.dir);

}
Pinguin.prototype.walk = function(){

  var dir = this.Engine.seek(this.target);
  this.Engine.direction.x = dir.x;
  this.Engine.direction.y = dir.y;

  this.Engine.applyForce(this.dir);

}
Pinguin.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[2];
    this.thickness = 1;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
Pinguin.prototype.update = function(){
  this.Engine.applyForce(this.Engine.direction);
  this.Engine.update();
}
Pinguin.prototype.drawHead = function(high){
  push()
  translate(0,high);
  this.style(1);
  triangle(0 + high,-80, -9,-60, 9,-60);
  this.style(0);
  ellipse(0,-60,18,20);
  //eyes
  ellipse(-4,-60, 5,5);
  ellipse(4,-60, 5,5);
  this.style(1);
  ellipse(-4+ (this.dir.x *5),-60 + (this.dir.y * 5), 2,2);
  ellipse(4+ (this.dir.x * 5),-60 + (this.dir.y * 5),2,2);
  //beak
  this.style(2);
  triangle(-3,-55, 3,-55,0 , -55 + (this.dir.y * 200));

  pop();

}
Pinguin.prototype.drawWings = function(high){
  this.style(1);
  ellipse(0,-30,30 * (1+high),50);
}

Pinguin.prototype.drawBody = function(high){
  this.style(0);
  ellipse(0,-30,20 * (1+high),60);
}
Pinguin.prototype.drawFeet = function(high){
  this.style(2);
  push()
  translate(0,high);

  if(frameCount% 20 < 10){

    rect(2,-15,2,20);
    rect(-5,-15,2,20);
    triangle(2,0, 0, 12, 12,12);
    triangle(-2,0, 0, 7, -7,7);

  }
  else{
    rect(-5,-15,2,20);
    rect(2,-15,2,20);
    triangle(-2,0, 0, 12, -12,12);
    triangle(2,0, 0, 7, 7,7);

  }
  pop();
}
Pinguin.prototype.draw = function(){

  this.style(2);
  ellipse(this.target.x, this.target.y, 30,50);
  push();
    translate(this.pos.x, this.pos.y);
    scale(3);
    //feet
    var d = p5.Vector.dist(this.target,this.pos);
    this.drawFeet(d/100);
    //wings
    this.drawWings(d/250);
    //body
    this.drawBody(d/200);
    //head
    this.drawHead(d/50);
  pop();
}
