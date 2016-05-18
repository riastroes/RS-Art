function Creature(){
  this.pos = createVector(random(width), random(height));
  this.walker = new Walker(this.pos);
  this.speed = 0;
  this.leader = undefined;
  this.size = 0;
  this.style(1);

}
Creature.prototype.style = function(nr){
  switch(nr){
    case 0:{
      //black and white
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
      break;
    }
    case 1:{
      //random fillcolor
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.tint(app.pal.randomColor(),50);
      this.thickness = 1;
      break;
    }

  }
}
Creature.prototype.draw = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

  line(this.pos.x, this.pos.y, this.leader.pos.x, this.leader.pos.y);
  ellipse(this.pos.x, this.pos.y, this.size,this.size);

}
Creature.prototype.moveRandom = function(speed){
  this.speed = speed;
  this.walker.randomWalk(this.speed, this.size);
}
Creature.prototype.moveDir = function(dir, speed){
  this.speed = speed;
  //dir.add(this.walker.feelForce());
  this.walker.moveDir(dir, this.speed, this.size);
}
Creature.prototype.moveTo = function(pos, speed){
  this.speed = speed;
  //pos.add(this.walker.feelForce());
  this.walker.moveTo(pos, this.speed, this.size);
}
Creature.prototype.grow = function(){
  if(this.leader){
    this.size += 0.1;
  }
  else{
    this.size -= 0.1;
  }
  this.size = constrain(this.size, 0, 50);
}
Creature.prototype.update = function(speed){
  this.grow();
  this.moveTo(this.leader.pos,speed);
}
