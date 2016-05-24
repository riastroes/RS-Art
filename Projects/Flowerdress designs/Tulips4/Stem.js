function Stem(begin,end, radius){
  this.center = begin.copy();
  this.center.add((end.x - begin.x) /2, (end.y - begin.y)/2);
  this.size = dist(begin.x, begin.y, end.x, end.y) + 10;
  this.control1 = createVector(random(width), random(height));
  this.control2 = createVector(random(width), random(height));
  this.angle = createVector((this.control1.x - begin.x),(this.control1.y - begin.y)).heading();
  this.begin =[];
  this.end = [];
  this.radius = radius;

  for(var i = 0; i < 10; i++){
    this.begin[i] = posOnEllipse(begin, this.radius/2, this.radius/2, 10, i);
    this.end[i] = posOnEllipse(end, this.radius, this.radius/2, 10, i);
  }
  this.style(1);

}
Stem.prototype.style = function(nr){
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
      this.fillcolor = app.pal.tint(app.pal.colors[1],10);
      this.tickness = 1;
      break;
    }
  }
}
Stem.prototype.showStructure = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  ellipse(this.control1.x, this.control1.y, 10,10);
  ellipse(this.control2.x, this.control2.y, 10,10);
}
Stem.prototype.draw = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  for(var i = 0; i< this.begin.length; i++){

    beginShape();
    curveVertex(this.control1.x, this.control1.y);
    curveVertex(this.begin[i].x, this.begin[i].y);
    curveVertex(this.end[i].x, this.end[i].y);
    curveVertex(this.control2.x, this.control2.y);
    endShape();
  }

}
