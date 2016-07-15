function Pinguin(){
  this.Engine = new Engine();
  this.Engine.position = createVector(width/2, height/2);
  this.Engine.direction = createVector(0,0);
  this.pos = this.Engine.position;
  this.dir = this.Engine.direction;
  this.target = createVector(0,0);

  this.style(1);
}

Pinguin.prototype.walk = function(){
  this.Engine.maxspeed = 1;
  this.target = createVector(random(width), random(height));

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

Pinguin.prototype.draw = function(){

this.style(2);
  rect(this.target.x, this.target.y, 30,30);
  push();
  translate(this.pos.x, this.pos.y);
  scale(2);
  //feet
  this.style(2);
  triangle(0,-10, 2, 4, 8,4);
  triangle(0,-10, -2, 4, -8,4);
  //wings
  this.style(1);
  ellipse(0,-30,30,50);
  //body and head
  this.style(0);
  ellipse(0,-30,20,60);
  ellipse(0,-60,18,20);
  //eyes
  ellipse(-4,-60, 5,5);
  ellipse(4,-60, 5,5);
  this.style(1);
  ellipse(-4+ (this.dir.x *2),-60 + (this.dir.y * 2),2,2);
  ellipse(4+ (this.dir.x * 2),-60+ (this.dir.y * 2), 2,2);
  //beak
  this.style(2);

  triangle(0,-55, 0,-60,0 + (this.dir.x * 10), -60 + (this.dir.y * 10));

  pop();
}
