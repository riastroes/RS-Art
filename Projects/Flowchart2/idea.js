function Idea(pg){
  this.pos = createVector(15,5);
  this.width = 30;
  this.height = 30;
  this.pg = pg;
}
Idea.prototype.style = function(nr,y){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

  }
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Idea.prototype.scale = function(pscale){
  this.pos.mult(pscale);
  this.width *= pscale;
  this.height *= pscale;
}
Idea.prototype.draw = function(pos,pscale){
  this.pos = pos.copy();
  this.pg.push();
  this.pg.translate(pos.x, pos.y);
  this.pg.ellipse(this.pos.x, this.pos.y, this.width, this.height);
  this.pg.pop();
}
