/**
 * Created by Ria Stroes on 22-9-2016.
 */
 "use strict";
function Band(pg,from, to, thickness){

   this.pg = pg;
   this.from = from.copy();
   this.to = to.copy();
   this.thickness = thickness;
   this.speed = 0;
};

Band.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.imgcolors[0];
    this.fillcolor = app.pal.imgcolors[1];
    //this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.imgcolors[2];
    this.fillcolor = app.pal.imgcolors[3];
    //this.thickness = 1;
    break;
  }
  app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);

};
Band.prototype.run = function(){
  this.speed = dist(this.from.x , this.from.y, this.to.x, this.to.y)/20;
}
Band.prototype.draw = function(){
  var diff = 0;
  this.style(0);
  this.pg.line(this.from.x, this.from.y, this.to.x, this.to.y);

  for(var i = 0; i < 10; i += 2){
    if(frameCount % 20 < 10)
    { diff = this.speed;}
    else{ diff = 0;}
    var pos = app.posOnLine(this.from, this.to, 10, i);
    var pos1 = app.posOnLine(this.from, this.to, 10, i+1);
    this.style(1);
    this.pg.line(pos.x + diff, pos.y,pos1.x + diff, pos1.y);
    
  }

}
