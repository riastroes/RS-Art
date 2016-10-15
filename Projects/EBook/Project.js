/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "EBook";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.init = function(nr){
  switch(nr){
    case 0:{
      this.layout = new Layout(11,11);
      break;
    }
  }
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      background(255);
      this.layout.draw();
      break;
    }
  }

}
