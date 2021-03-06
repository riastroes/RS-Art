/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Compano";
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
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}

Project.prototype.init = function(){

}
Project.prototype.run = function(nr){
  this.showText();
  switch(nr){
    case 0:{
      background(app.palblue.colors[2]);
      this.landscape = new Landscape();
      break;
    }
    case 1:{

      this.landscape.draw1();
      break;
    }
    case 2:{
      background(app.palblue.colors[2]);
      this.landscape = new Landscape();
      break;
    }
    case 3:{

      this.landscape.draw2();
      break;
    }
  }
}
