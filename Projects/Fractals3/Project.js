/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;



  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(1);
  text(this.text,60,50);
}

Project.prototype.init = function(){
  this.text ="fractals";
  this.pos = createVector(width/2,-100);
  this.fractals = new Fractals(this.pos);


}
Project.prototype.run = function(nr){

  switch(nr){
    case 0:{

      this.text ="fractals 0";
      this.fractals.draw0(0);
      break;
    }
    case 1:{
      
      this.text ="fractals 1";
      this.fractals.draw1(100,0);
      break;
    }
  }
  this.showText();
}
