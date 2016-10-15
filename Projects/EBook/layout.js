/**
 * Created by Ria Stroes on 15-10-2016.
 */
 "use strict";
function Layout(maxw, maxh){
  this.maxw = maxw;
  this.maxh = maxh;
  this.grid = [];
  this.cellwidth = width /  (this.maxw);
  this.cellheight = height / (this.maxh);
  this.init();
  this.sections =[];

};
Layout.prototype.init = function(){
  for(var h = 0; h < this.maxh; h++ ){
    for(var w = 0; w < this.maxw; w++){
      this.grid[this.get(w,h)] = [w * this.cellwidth,h * this.cellheight];
    }
  }
}
Layout.prototype.get = function(w,h){
  return (h * this.maxw) + w;
}
Layout.prototype.addSection = function(w,h,width, height){
  var x = this.grid[this.get(w,h)][0];
  var y = this.grid[this.get(w,h)][1];
  var  sectionwidth = width * this.cellwidth;
  var  sectionheight = height * this.cellheight;
  append(this.sections, new Section(x,y, sectionwidth, sectionheight));
}
Layout.prototype.twoColumns = function(){
  this.addSection(1,1,4,9);
  this.addSection(6,1,4,9);
}
Layout.prototype.twoColumnsWithTitle = function(){
  this.addSection(1,1,9,2);
  this.addSection(1,4,4,6);
  this.addSection(6,4,4,6);
}
Layout.prototype.twoTopOneTwoBottom = function(){
  this.addSection(1,1,4,2);
  this.addSection(1,8,4,2);
  this.addSection(6,1,4,2);
  this.addSection(6,8,4,2);
  this.addSection(1,4,9,3);
}
Layout.prototype.twoLeftOneTwoRight = function(){
  this.addSection(1,1,2,4);
  this.addSection(1,6,2,4);
  this.addSection(8,1,2,4);
  this.addSection(8,6,2,4);
  this.addSection(4,1,3,9);
}
Layout.prototype.twoLeftOneRight = function(){
  this.addSection(1,1,2,4);
  this.addSection(1,6,2,4);
  this.addSection(4,1,6,9);
}
Layout.prototype.twoRightOneLeft = function(){
  this.addSection(8,1,2,4);
  this.addSection(8,6,2,4);
  this.addSection(1,1,6,9);
}
Layout.prototype.twoLeftOneRightWithTitle = function(){
  this.addSection(1,1,2,4);
  this.addSection(1,6,2,4);
  this.addSection(4,1,6,2);
  this.addSection(4,4,6,6);
}
Layout.prototype.twoRightOneLeftWithTitle = function(){
  this.addSection(8,1,2,4);
  this.addSection(8,6,2,4);
  this.addSection(1,1,6,2);
  this.addSection(1,4,6,6);
}
Layout.prototype.draw = function(nr){

  this.style(0);
  for(var h = 0; h < this.maxh; h++ ){
    for(var w = 0; w < this.maxw; w++){
      point(this.grid[this.get(w,h)][0], this.grid[this.get(w,h)][1]);
    }
  }
  for(var s in this.sections){
    this.sections[s].draw();

  }
  if(this.sections.length>0){
    this.sections[0].getContent("LESSON",1);
  } 
}
Layout.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
