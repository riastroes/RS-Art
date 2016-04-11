function Circle(vector, radius){
  this.center = vector.copy();
  this.radius = radius;
  this.strokecolor = app.pal.colors[0];
  this.fillcolor = app.pal.colors[1];
  this.thickness = 1;
  this.seed = random(10);
  this.noise = 0;
  this.speed = 0;
  this.hasmoved = false;
};
Circle.prototype.style = function(strokecolor, fillcolor, thickness){
  if(app.is(strokecolor)|| !strokecolor){
    this.strokecolor = strokecolor;
  }
  if(app.is(fillcolor) || !fillcolor){
    this.fillcolor = fillcolor;
  }
  if(app.is(thickness)){
    this.thickness = thickness;
  }
};
Circle.prototype.scale = function(factor){
  this.radius += this.radius * factor;
};
Circle.prototype.overlap = function(circle){
  var d;
  var isoverlap = false;
  if(dist(this.center.x, this.center.y, circle.center.x, circle.center.y)< (this.radius + circle.radius)){
    isoverlap = true;
  }
  return isoverlap;
}
Circle.prototype.move = function(index, circles, speed){
  var newpos, isoverlap, c, i ;
  this.hasmoved = false;
  this.speed = speed;
  newpos = this.center.copy();
  newpos.x += map(noise(this.seed + this.noise), 0,1, -1,1);
  newpos.y += map(noise(10 + this.seed + this.noise), 0,1, -1,1);
  isoverlap = false;
  for(i = 0; i < circles.length; i++){
    if(i != index){
      c = circles[i];
      if(dist(newpos.x, newpos.y, c.center.x, c.center.y)< (this.radius + c.radius)){
        isoverlap = true;
        break;
      }
    }
  }
  if(!isoverlap){
    this.center = newpos.copy();
    this.hasmoved = true;
  }
  this.noise += this.speed;
  return this.hasmoved;
}
Circle.prototype.draw = function(){

  if(!this.strokecolor){
    noStroke();
  }
  else{
    stroke(this.strokecolor);
  }
  if(!this.fillcolor){
    noFill();
  }
  else{
    fill(this.fillcolor);
  }
  strokeWeight(this.thickness);
  ellipse(this.center.x, this.center.y, this.radius, this.radius);
};
