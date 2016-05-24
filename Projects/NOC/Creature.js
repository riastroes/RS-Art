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
      this.thickness = 0.1;
      break;
    }
    case 1:{
      //random fillcolor
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.tint(app.pal.randomColor(),50);
      this.thickness = 0.2;
      break;
    }
    case 2:{
      //random strokecolor
      this.strokecolor = app.pal.tint(app.pal.randomColor(),50);
      this.fillcolor = app.pal.colors[1];
      this.thickness = 0.2;
      break;
    }
    case 3:{
      //random fillcolor
      this.strokecolor = app.pal.tint(app.pal.randomColor(),50);
      this.fillcolor = this.strokecolor;
      this.thickness = 0.1;
      break;
    }

  }
}
Creature.prototype.draw = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  if(this.leader !== true){
  line(this.pos.x, this.pos.y, this.leader.pos.x, this.leader.pos.y);
    ellipse(this.pos.x, this.pos.y, this.size,this.size);
  }
}
Creature.prototype.drawLines = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  if(this.leader !== true){
    line(this.pos.x, this.pos.y, this.leader.pos.x, this.leader.pos.y);
  }
}
Creature.prototype.draw2 = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  if(this.leader === true){
    //ellipse(this.pos.x, this.pos.y, 10,10);
  }
  else{
    line(this.pos.x, this.pos.y, this.leader.pos.x, this.leader.pos.y);
  }
}
Creature.prototype.draw3 = function(shiftx){

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  if(this.leader === true){
    //ellipse(this.pos.x, this.pos.y, 10,10);
  }
  else{
    line(this.pos.x + shiftx, this.pos.y, this.leader.pos.x + shiftx, this.leader.pos.y);
  }
}
Creature.prototype.moveRandom = function(speed){
  this.speed = speed;
  this.walker.randomWalk(this.speed, this.size);
}
Creature.prototype.moveDir = function(dir, speed){
  this.speed = speed;
  this.walker.moveDir(dir, this.speed, this.size);
}
Creature.prototype.moveTo = function(pos, speed){
  this.speed = speed;
  this.walker.moveTo(pos, this.speed, this.size);
}
Creature.prototype.grow = function(){
  if(this.leader === true){
    this.size += 0.1;
  }
  else{
    this.size -= 0.1;
  }
  this.size = constrain(this.size, 0, 50);
}
Creature.prototype.update = function(speed){
  this.grow();
  if(this.leader === true){
    this.moveRandom(0.1);
  }
  else{
    this.moveTo(this.leader.pos,speed);
  }
}
