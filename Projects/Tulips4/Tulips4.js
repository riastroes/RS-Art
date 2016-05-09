function Tulip4(pos, size, stage, angle){

  this.pos = pos.copy();
  this.size = size;
  this.stage =stage;
  this.angle = angle;
  this.end = createVector(0,0);

  this.center = createVector(0, -this.size/2);
  this.center.rotate(this.angle);
  this.center.add(this.pos);
  this.begin = createVector(0, -this.size);
  this.begin2 = createVector(0, -this.size);
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();
  this.stage =0;

}
Tulip4.prototype.style = function(nr){
  switch(nr){
    case 1:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
      this.tickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = false;
      this.tickness = 1;
      break;
    }
    case 3:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.tickness = 1;
      break;
    }
    case 4:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[3];
      this.tickness = 1;
      break;
    }
    case 5:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[4];
      this.tickness = 1;
      break;
    }

  }
}
Tulip4.prototype.curve = function(size, angle){
  this.size = size;
  this.angle = angle;
  this.controlradius = this.size/2;
  this.control1 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
  this.control2 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
}

Tulip4.prototype.showStructure = function(nr){
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);
  switch(nr){
    case 1:{
      ellipse(this.end.x, this.end.y, 55,15);
      break;
    }
    case 2:{
      ellipse(this.begin.x, this.begin.y, 55,55);
      break;
    }
    case 3:{
      //ellipse(this.center.x, this.center.y, 55,55);
      ellipse(this.begin.x, this.begin.y, 5,5);
      ellipse(this.begin2.x, this.begin2.y, 5,5);
      break;
    }
    case 4:{
      ellipse(this.begin.x, this.begin.y, 5,5);
      ellipse(this.begin2.x, this.begin2.y, 5,5);
      ellipse(this.end.x, this.end.y, 15,15);
      //ellipse(this.control1.x, this.control1.y, 55,55);
      //ellipse(this.control2.x, this.control2.y, 5,5);
      break;
    }
  }
 pop();
}
Tulip4.prototype.draw1 = function(){
  push();
  translate(this.pos.x, this.pos.y);
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    curveVertex(this.control1.x, this.control1.y);
    curveVertex(this.begin.x, this.begin.y);
    curveVertex(this.end.x, this.end.y);
    curveVertex(this.control2.x, this.control2.y);
  endShape();
  pop();
}
Tulip4.prototype.draw3 = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);

    beginShape();
      vertex(this.begin.x, this.begin.y)
      bezierVertex(this.control1.x, this.control1.y,this.control2.x+this.size, this.control2.y,this.end.x, this.end.y);
      bezierVertex(this.control2.x-this.size, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

    endShape();
  pop();
}

Tulip4.prototype.draw4 = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);

    beginShape();
      vertex(this.begin.x, this.begin.y)
      bezierVertex(this.control1.x, this.control1.y,this.control2.x+this.size/2, this.control2.y,this.end.x, this.end.y);
      bezierVertex(this.control2.x-this.size/2, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

    endShape();
  pop();
}

Tulip4.prototype.grow = function(){

    for(var t = 0; t<20; t++){

      this.begin = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
      this.begin2 = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
      this.control2 = this.begin.copy();
      this.control2.y = this.control2.y + this.size/2;
      this.showStructure(4);
      this.style(1);

      this.draw4();

    }
}

Tulip4.prototype.grow2 = function(){
      for(var t = 0; t<10; t++){

        this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
        this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
        this.control2 = this.begin.copy();
        this.control2.y = this.control2.y + this.size;
      //  this.control1.y = this.control1.y + this.size;

        this.style(1);

        this.draw4();

      }
}
Tulip4.prototype.grow3 = function(){
      for(var t = 0; t<10; t++){

        this.begin = app.posOnEllipse(this.control1, this.size + (this.stage*t), (this.size+ (this.stage*t))/2, 20, t);
        this.begin2 = app.posOnEllipse(this.control1, this.size + (this.stage*t), (this.size+ (this.stage*t))/2, 20, 10 + t);
        this.control2 = this.begin.copy();
        this.control2.y = this.control2.y + this.size;
        this.control1.y = this.control1.y + this.size;

        this.style(1);

        this.draw4();

      }
}

Tulip4.prototype.drawShape = function(){

  this.style(1);
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);


  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.angle);

    beginShape();
      vertex(this.begin.x, this.begin.y);
      bezierVertex(this.control1.x, this.control1.y,this.control2.x, this.control2.y,this.end.x, this.end.y);
      bezierVertex(this.control2.x, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

    endShape();
    fill(255,0,0);
    //ellipse(0,0, 100,100);
    text(this.angle, 10, 0);
  pop();
}
Tulip4.prototype.draw = function(){


  for(var t = 0; t<20; t++){
    this.control1 = this.end.copy();
    this.control1.y -= this.size;
    this.control2 = this.end.copy();

    this.begin = app.posOnEllipse(this.control1, (this.size) + (this.stage*t), (this.size+ (this.stage*t))/2, 20, 10 + t);
    this.begin2 = app.posOnEllipse(this.control1, (this.size) + (this.stage*t), (this.size+ (this.stage*t))/2, 20, t);
    //this.end = this.end.copy();

    this.style(2);

    this.drawShape();

  }


}
