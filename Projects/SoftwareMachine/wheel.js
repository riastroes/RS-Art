/**
 * Created by Ria Stroes on 22-9-2016.
 */
 "use strict";
function Wheel(pg,pos, size){

   this.pg = pg;
   this.pos = pos.copy();
   this.size = size;
   this.rot = 0;
   this.speed = 0;
};

Wheel.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.imgcolors[0];
    this.fillcolor = app.pal.imgcolors[1];
    this.thickness = this.size/5;
    break;
  }
  app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);

};
Wheel.prototype.run = function(){
  this.speed = 0.1;
}
Wheel.prototype.draw = function(){
  this.style(0);
  this.pg.push();
  this.pg.translate(this.pos.x, this.pos.y);
  this.pg.rotate(this.rot);
  this.pg.ellipse(0,0, this.size,this.size);
  this.pg.line(0,0, this.size/2, 0);
  this.pg.pop();
  this.rot += this.speed;
}
