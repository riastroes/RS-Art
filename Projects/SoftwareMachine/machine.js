/**
 * Created by Ria Stroes on 22-9-2016.
 */
 "use strict";
function Machine(pwidth, pheight){
   this.width = pwidth;
   this.height = pheight;
   this.pg = createGraphics(this.width, this.height);
   this.parts = [];
   this.software = [];

};
Machine.prototype.create = function(){
  var pos1, wheel1, size1;
  var pos2, wheel2, size2;
  var pos3,pos4, band1;
  var pos5,pos6, band2;
  var pos7;

  pos1 = createVector(100,100);
  size1 = 90;
  wheel1 = new Wheel(this.pg,pos1,90);


  pos2 = createVector(400,100);
  size2 = 100;
  wheel2 = new Wheel(this.pg,pos2,120);

  pos3 = app.posOnCircle(pos1,size1/2, TWO_PI, -(PI/2));
  pos4 = app.posOnCircle(pos2,size2/2, TWO_PI, -(PI/2));
  band1 = new Band(this.pg, pos3, pos4,15);

  pos5 = app.posOnCircle(pos1,size1/2, TWO_PI, (PI/2));
  pos6 = app.posOnCircle(pos2,size2/2, TWO_PI, (PI/2));
  band2 = new Band(this.pg, pos6, pos5,15);

  pos7 =createVector(300, 500);
  this.seesaw = new SeeSaw(this.pg, pos7, 400);


  append(this.parts, band1);
  append(this.parts, band2);
  append(this.parts, wheel1);
  append(this.parts, wheel2);
  append(this.parts, this.seesaw);

  var pos = createVector(0,-size1+20);
  this.software[0] = new Soft(this.pg, pos1, pos2,pos );

}
Machine.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Machine.prototype.run = function(){
  for(var i = 0; i < this.parts.length; i++){
    this.parts[i].run();
  }
  for(var i = 0; i < this.software.length; i++){
    this.software[i].run();
  }
}
Machine.prototype.draw = function(){
  this.pg.background(220);
  for(var i = 0; i < this.parts.length; i++){
    this.parts[i].draw();
  }
  for(var i = 0; i < this.software.length; i++){
    this.software[i].draw();
  }
  background(255);
 image(this.pg, 50,82);

}
