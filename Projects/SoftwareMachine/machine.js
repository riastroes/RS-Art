/**
 * Created by Ria Stroes on 22-9-2016.
 */
 "use strict";
function Machine(pwidth, pheight){
   this.width = pwidth;
   this.height = pheight;
   this.pg = createGraphics(this.width, this.height);
   this.parts = [];

};

Machine.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Machine.prototype.draw = function(){

  for(var i = 0; i < this.parts.length; i++){
    this.parts[i].draw(this.pg);
  }
  background(255);
  this.pg.background(220);
  rectMode(CENTER);
  image(this.pg, width/2, height/2);

}
