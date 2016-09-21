/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Etage(pg, pos, shape){
  this.pg = pg;
  this.pos = pos.copy();    //center bottom
  this.shape = shape;
  this.width = this.shape.width;
  this.height = this.shape.height;
  this.top = createVector(this.pos.x - (this.shape.width/2),this.pos.y - this.shape.height);

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
    this.shape.draw(this.top);
  }

}
function Keyboard(pg){
  this.pg = pg;
  this.width = 100;
  this.height = 30;
}
Keyboard.prototype.draw = function(pos){
  this.pg.rect(pos.x,pos.y, this.width, this.height,5);
  for(var i = 1; i < 16; i++){
    this.pg.rect(pos.x + (i *6), pos.y+5, 4,4);
    this.pg.rect(pos.x + (i *6), pos.y+12, 4,4);
    this.pg.rect(pos.x + (i *6), pos.y+19, 4,4);
  }
}
function Monitor(pg){
  this.pg = pg;
  this.width = 100;
  this.height = 80;
}
Monitor.prototype.draw = function(pos){
  this.pg.rect(pos.x,pos.y, this.width, this.height,5);
  this.pg.rect(pos.x + 5,pos.y + 5, this.width -10, this.height -10,5);
}
function Computer(pg){
  this.pg = pg;
  this.width = 40;
  this.height = 100;
}
Computer.prototype.draw = function(pos){
  this.pg.rect(pos.x,pos.y, this.width, this.height,5);
  this.pg.rect(pos.x +5,pos.y +20, this.width-10, 10,3);
  this.pg.rect(pos.x +30,pos.y +10, 5, 5,3);
}
