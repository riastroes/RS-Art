/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Feathers";
  this.rot =0;
  this.init();
};

Project.prototype.style = function(nr){

    if(nr == 1){
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
    }
    if(nr == 2){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.colors[0];
      this.thickness = 1;
    }
    if(nr == 3){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.randomImgColor;
      this.thickness = 1;
    }

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,50,50);
}

Project.prototype.init = function(){
  this.style(0);

  this.feather = new Feather(150, 100);
}
Project.prototype.draw = function(nr){
  this.showText();
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
  switch(nr){
    case 0:{
      this.feather.draw(width/2,height/2, this.rot);
      this.rot += 0.1;
      break;
    }
  }
}
