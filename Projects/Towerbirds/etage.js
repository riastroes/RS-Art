/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Etage(pg, pos, width, height){
  this.pg = pg;
  this.pos = pos.copy();    //center bottom
  this.top = createVector(this.pos.x - (width/2),this.pos.y - height);
  this.width = width;
  this.height = height;
  this.iscollapsed = false;
};

Etage.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[2];
    this.thickness = 1;
    break;
  }
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Etage.prototype.draw = function(nr){
  if(this.iscollapsed){
    this.style(1);
  }
  else{
    this.style(0);
    this.pg.rect(this.top.x, this.top.y, this.width, this.height, 5);
  }

}
