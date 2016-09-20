
function Module(pg){
  this.pos = createVector(10,5);
  this.width = 100;
  this.height = 30;
  this.pg = pg;
}
Module.prototype.style = function(nr,y){

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
Module.prototype.scale = function(pscale){
  this.pos.mult(pscale);
  this.width *= pscale;
  this.height *= pscale;
}
Module.prototype.draw = function(pos){
  this.pg.push();
  this.pg.translate(pos.x, pos.y);
  this.pg.rect(this.pos.x, this.pos.y, width, height, 10);
  this.pg.pop();
}
