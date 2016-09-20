function Flowchart(pg, x,y, pwidth){
  this.basis= createVector(x,y);
  this.pos= this.basis.copy();
  this.size = size;
  this.min = x -(pwidth/2) + 50;
  this.max = x +(pwidth/2) - 50;
  this.pg = pg;

}
Flowchart.prototype.add = function(x,y, size){
  this.basis.add(x,y);
  this.pos= this.basis.copy();
  this.size = size;

};
Flowchart.prototype.flow = function(pscale,stylenr){

  this.newpos = this.pos.copy();
  this.newpos.add(0,this.size);
  this.pg.line(this.pos.x, this.pos.y, this.newpos.x, this.newpos.y);
  this.pos = this.newpos.copy();
  var a = new IfElse(this.pg, this.min, this.max);
  a.draw(this.pos,pscale, stylenr);
  this.pos = a.choose();
  if(this.pos.y < height) {
    this.flow(pscale, stylenr);
  }

}
