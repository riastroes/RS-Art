function Leaves(begin, size, leavewidth){
  this.begin = begin.copy();
  this.end = this.begin.copy();
  this.size = size;
  this.width = leavewidth;
  this.end.y += this.size;
  this.center = begin.copy();
  this.center.y += this.size /2;

  this.control1 = this.center.copy();
  this.control1.x -= this.width/2;
  this.control2 = this.center.copy();
  this.control2.x += this.width/2;

  this.style(2);

}
Leaves.prototype.style = function(nr){
  app.pal.fromImage(app.images[2],10);
  switch(nr){
    case 1:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = false;
      this.tickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),50);
      this.tickness = 1;
      break;
    }
  }
}
Leaves.prototype.showStructure = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  ellipse(this.control1.x, this.control1.y, 10,10);
  ellipse(this.control2.x, this.control2.y, 10,10);
}
Leaves.prototype.draw = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  for(var i = 0; i< 2; i++){

    beginShape();
    vertex(this.end.x, this.end.y);
    bezierVertex(this.control1.x+(this.width/10), this.control1.y, this.control2.x, this.control2.y, this.begin.x, this.begin.y);
    bezierVertex(this.control2.x-(this.width/10), this.control2.y, this.control1.x, this.control1.y, this.end.x+this.width/10, this.end.y);


    endShape(CLOSE);
  }

}
