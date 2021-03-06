/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Pinguin";
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
  text(this.text,60,50);
}

Project.prototype.init = function(){
  this.pinguin = new Pinguin();
  this.pinguin.target = createVector(random(width), random(height));
  this.pinguin.seek();
}
Project.prototype.update = function(){
  var d = dist(this.pinguin.target.x, this.pinguin.target.y, this.pinguin.pos.x, this.pinguin.pos.y);
  if(d < 30)
  {
    this.pinguin.seek();

  }
  this.pinguin.walk();
  this.pinguin.update();

}
Project.prototype.draw = function(nr){
  this.showText();
  switch(nr){
    case 0:{

      this.pinguin.draw();
      break;
    }
  }
}
