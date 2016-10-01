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
  text(this.text,50,50);
}

Project.prototype.init = function(){
  this.feathers = [];
  for(var i = 0; i < 10; i++){
  this.feathers[i] = new Feather(random(width),random(height));
 }
}
Project.prototype.draw = function(nr){
  background(255);
  var center = createVector(width/2, height/2);
  var rot = 0;
  for(var i = 0; i < 10; i++){
  this.feathers[i].draw(center.x, center.y,rot);
  rot= 0.1;
 }

}
