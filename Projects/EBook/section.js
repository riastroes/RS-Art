/**
 * Created by Ria Stroes on 15-10-2016.
 */
 "use strict";
function Section(x,y, sectionwidth, sectionheight){
  this.x = x;
  this.y = y;
  this.width = sectionwidth;
  this.height = sectionheight;
}
Section.prototype.getContent = function(atext, rows){
  this.style(1);
  textSize(floor(this.height / rows));
  textAlign(LEFT);
  text(atext, this.x, this.y);
}
Section.prototype.draw = function(nr){

  this.style(1);
  rect(this.x,this.y, this.width, this.height);
}
Section.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;

    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
