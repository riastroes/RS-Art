function Pinguin(){

  this.pos = createVector(width/2, height/2);
  this.dir = createVector(0,0);
  this.body = new Blobber();
  this.wings = new Blobber();

  this.head = new Blobber();
  this.face = new Blobber();
  this.eye = new Blobber();
  this.leftfeed = new Blobber();
  this.rightfeed = new Blobber();

  this.style(1);
}

Pinguin.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[2];
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[8];
    this.thickness = 1;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}

Pinguin.prototype.update = function(pos){

  this.pos = pos.copy();

  this.wings.init(createVector(0,0),6,100,150,300,300);
  this.wings.rot = 0;

  this.body.init(createVector(0,50),6,70,100,200,200);
  this.body.rot = 0;


  this.head.init(createVector(0,-150),5,100,100,50,80);
  this.head.pos[2].x -= 50;
  this.head.rot = 0;

  this.face.init(createVector(0,-150),5,40,60,30,60);
  this.face.rot = 0;


  this.eye.init(createVector(0,-160),5,10,20,10,10);
  this.eye.rot = 0;

  this.leftfeed.init(createVector(-20,150),3,50,50,50,50);
  this.leftfeed.rot = 0;

  this.rightfeed.init(createVector(20,150),3,50,50,50,50);
  this.rightfeed.rot = 0;


}
Pinguin.prototype.drawHead = function(){
  this.style(1);
  this.head.style(this.strokecolor,this.fillcolor,this.thickness);
  this.head.draw();
  this.style(0);
  this.face.style(this.strokecolor,this.fillcolor,this.thickness);
  this.face.draw();
  this.style(3);
  this.eye.style(this.strokecolor,this.fillcolor,this.thickness);
  this.eye.draw();

}
Pinguin.prototype.drawWings = function(){
  this.style(1);
  this.wings.style(this.strokecolor,this.fillcolor,this.thickness);

  this.wings.draw();

}

Pinguin.prototype.drawBody = function(){
  this.style(0);
  this.body.style(this.strokecolor,this.fillcolor,this.thickness);

  this.body.draw();
  //this.body.showPoints();

}
Pinguin.prototype.drawFeet = function(){
  this.style(2);
  this.leftfeed.style(this.strokecolor,this.fillcolor,this.thickness);
  this.leftfeed.draw();
  //this.leftfeed.showPoints();

  this.style(2);
  this.rightfeed.style(this.strokecolor,this.fillcolor,this.thickness);
  this.rightfeed.draw();
  //this.rightfeed.showPoints();
}
Pinguin.prototype.draw = function(){



  push();
    translate(this.pos.x, this.pos.y);
    //feet
    this.drawFeet();
    //wings
    this.drawWings();
    //body
    this.drawBody();
    //head
    this.drawHead();
  pop();
}
