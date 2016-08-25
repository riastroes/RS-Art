/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Knitting by Ria Stroes";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 5;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 2;
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
  textSize(12);
  textFont("Courier");
  this.style(0);
  text(this.text,width-220,height-25);
  this.style(1);
  text(this.text,width-220,height-25);
}

Project.prototype.init = function(){
  this.knitting = new Knitting();

}
Project.prototype.draw = function(nr){
  //this.showText();
  switch(nr){

    //generate knitting
    case 0:{
      var pos = createVector(100,100);
      ellipse(pos.x, pos.y, 10,10);
      var stitchwidth = 35;
      var stitchheight = 70;
      var stitches = 5;
      var rows = 4;
      var pat = [];
      pat[0] = [0,0,0,0,0];
      var pscale = 1;
      pos.add(0,(rows/2 +1 * stitchheight));
      this.knitting.drawFabric(pos, 4,stitches, stitchwidth, stitchheight,pat, pscale);
      break;

    }
  }
}
