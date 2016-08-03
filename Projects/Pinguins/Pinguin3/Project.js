/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Pinguins by Ria Stroes";
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
  text(this.text,width-150,height-10);
}

Project.prototype.init = function(){
  this.pinguins=[];
  for(var i = 0; i < 80; i++){
    append(this.pinguins, new Pinguin());
  }


}
Project.prototype.update = function(){
  for(var i = 0; i < this.pinguins.length; i++){
    this.pinguins[i].update(createVector(random(100,width-100), height-300 + (i*3)));
  }
}
Project.prototype.draw = function(nr){
  this.style(0);
  this.showText();
  for(var i = 0; i < this.pinguins.length; i++){
    this.pinguins[i].draw();
  }

}
