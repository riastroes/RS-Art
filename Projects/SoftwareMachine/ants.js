/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Ants(){

};

Ants.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Ants.prototype.draw =function(){

  
}
