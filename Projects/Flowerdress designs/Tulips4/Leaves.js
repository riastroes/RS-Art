function Leaves(begin,end, radius){
  this.center = begin.copy();
  this.center.add((end.x - begin.x) /2, (end.y - begin.y)/2);
  this.size = dist(begin.x, begin.y, end.x, end.y) + 10;
  this.control1 = this.center.copy();
  this.control1.x -= 150;
  this.control2 = this.center.copy();
  this.control2.x += 150;
  this.angle = createVector((this.control1.x - begin.x),(this.control1.y - begin.y)).heading();


  this.begin = begin.copy();
  this.begin.y = begin.y /3*2;
  this.end = end.copy();
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
    bezierVertex(this.control1.x+50, this.control1.y, this.control2.x, this.control2.y, this.begin.x, this.begin.y);
    bezierVertex(this.control2.x-50, this.control2.y, this.control1.x, this.control1.y, this.end.x+50, this.end.y);


    endShape(CLOSE);
  }

}
