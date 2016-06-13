function BottomUp(center, left, right, level){
  this.hangers = [];
  this.center = center.copy();
  this.top = center.copy();
  this.gravity = createVector(0,0.01);
  this.level = level;

  append(this.hangers, new Hanger(this.center,left, 0));
  append(this.hangers, new Hanger(this.center,right, PI));

  this.t = left / (left+right);
  this.top.x = curvePoint(this.hangers[0].pos.x,this.hangers[0].top.x,this.hangers[1].top.x,this.hangers[1].pos.x, this.t);
  this.top.y = curvePoint(this.hangers[0].pos.y,this.hangers[0].top.y,this.hangers[1].top.y,this.hangers[1].pos.y, this.t);

  this.force = this.gravity.copy();
  this.force.mult(this.mass);
  this.begin = this.top.copy();
  this.begin.sub(this.force);

  if(this.level < 2){
    this.parent = new BottomUp(this.hangers[0].top, left, right, this.level +1);
  }

}

BottomUp.prototype.update = function(){
  this.mass = 0;
  for(var i = 0; i < this.hangers.length; i++){
    this.hangers[i].rot += 0.1;
    this.mass += this.hangers[i].mass;
    this.hangers[i].update(this.getPos(this.hangers[i]));
  }
  this.t = this.hangers[0].mass / this.mass;
  this.top.x = curvePoint(this.hangers[0].pos.x,this.hangers[0].top.x,this.hangers[1].top.x,this.hangers[1].pos.x, this.t);
  this.top.y = curvePoint(this.hangers[0].pos.y,this.hangers[0].top.y,this.hangers[1].top.y,this.hangers[1].pos.y, this.t);

  this.force = this.gravity.copy();
  this.force.mult(this.mass);
  this.begin = this.top.copy();
  this.begin.sub(this.force);

  if(this.level < 2){
    this.parent.center = this.hangers[0].top.copy();
    this.parent.update();
  }

}
BottomUp.prototype.getPos = function(hanger){
  var pos = app.posOnEllipse(this.center, hanger.size ,hanger.size * 0.3, TWO_PI,  hanger.rot);
  app.style.set(0, false, 1);
  ellipse(this.center.x, this.center.y, hanger.size, hanger.size * 0.3);
  return pos;

}
BottomUp.prototype.style = function(nr){
  switch (nr) {
    case 0:
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break;
    case 1:
      this.strokecolor = false;
      this.fillcolor = app.pal.tint(app.pal.imgcolors[0], 50);
      this.thickness = 1;
      break;
    default:

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
BottomUp.prototype.draw = function(){
  //app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  this.style(1);

  for(var i = 0; i < this.hangers.length; i++){
    this.hangers[i].draw();
  }
  this.style(0);
  curve(this.hangers[0].pos.x,this.hangers[0].pos.y,this.hangers[0].top.x,this.hangers[0].top.y,this.hangers[1].top.x,this.hangers[1].top.y,this.hangers[1].pos.x,this.hangers[1].pos.y)

  line(this.begin.x, 0, this.top.x, this.top.y);

  if(this.level < 2){
    this.parent.draw();
  }
}
