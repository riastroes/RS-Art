function Tulip(pos, size){
  this.pos = pos.copy();
  this.size = size;
  this.begin = createVector(0, -this.size);
  this.end = createVector(0,0);
  this.rot = 0;
  this.style(3);
}
Tulip.prototype.style = function(nr){
  if(nr == 1){
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
  }
  if(nr == 2){
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
  }
  if(nr == 3){
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(app.pal.randomColor(), 20);
    this.thickness = 1;
  }

};
Tulip.prototype.construct = function(){
    this.begin = createVector(0, -this.size);
    this.control1 = this.begin.copy();
    this.control2 = createVector(-this.size, 0);
    this.control3 = createVector(this.size, -(this.size/4));
    this.control4 = createVector(-this.size/2, this.begin.y+(this.size/2));
}
Tulip.prototype.draw = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.rot);
  beginShape();
    vertex(this.begin.x, this.begin.y);
    bezierVertex(this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.end.x, this.end.y);
    bezierVertex(this.control3.x, this.control3.y, this.control4.x, this.control4.y, this.begin.x, this.begin.y);
  endShape(CLOSE);
  pop();
}
