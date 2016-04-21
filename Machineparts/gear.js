function Gear(size, points, pointsize, connection, acolor){
  // pos is the center of pg
  this.pos;
  this.size = size;
  this.points = points;
  this.pointsize = pointsize;
  this.radius = (this.size/2) - this.pointsize; //to innerpoints

  this.pg = createGraphics(this.size,this.size);
  this.center = createVector(this.pg.width/2, this.pg.height/2);
  //this.pg.background(0);
  this.rot = 0;
  this.angle = 0;

  this.speed = 0;
  this.dir = 1;
  this.color = acolor;
  this.inner =[];
  this.outer =[];
  this.connection = connection;
  this.create();
}
Gear.prototype.create = function(){


  for(var i = 0; i < this.points; i += 1 ){
    this.inner[i] = app.posOnCircle(this.center, this.radius, this.points, i);
    this.outer[i] = app.posOnCircle(this.center, (this.size/2), this.points, i - 0.5);

  }

  app.style.pg(this.pg, color(0,0,0), this.color,1);
  this.pg.beginShape();
    for(var i = 0; i < this.points; i += 1 ){
      this.pg.vertex(this.outer[i].x, this.outer[i].y);
      this.pg.vertex(this.inner[i].x, this.inner[i].y);
    }

  this.pg.endShape(CLOSE);
  app.style.pg(this.pg, color(0,0,0), app.project.pal.imgcolors[0],1);
  this.pg.line(this.inner[0].x, this.inner[0].y, this.center.x, this.center.y);
  this.pg.ellipse(this.center.x, this.center.y, this.radius,this.radius);

  if(this.connection % 4 == 1){
    this.angle = atan2(this.outer[0].y- this.center.y,this.outer[0].x-this.center.x)
  }
  else if(this.connection % 4 == 2){
    this.angle = -atan2(this.outer[0].y- this.center.y,this.outer[0].x-this.center.x)/2;
  }
  else if(this.connection % 4 == 3){
    this.angle = -atan2(this.outer[0].y- this.center.y,this.outer[0].x-this.center.x)/2;
  }
  else{
    this.angle = 0;
  }


}
Gear.prototype.rotate = function(speed){
  this.speed = speed;
  this.rot += this.dir * this.speed;

}
Gear.prototype.connectTo = function(gear,point){
  var c = gear.center.copy();
  var p = gear.outer[point].copy();
  var s = p5.Vector.sub(p, c);

  s.normalize();
  s.mult(gear.radius + (this.size/2));
  s.add(gear.pos);

  this.pos = s;
  this.dir = -gear.dir;
  this.speed = gear.speed * (gear.points/this.points);
  this.rot += this.dir * this.speed;
}
Gear.prototype.connectToAssemblyline = function(aline,point){
  var c = gear.center.copy();
  var p = gear.outer[point].copy();
  var s = p5.Vector.sub(p, c);

  s.normalize();
  s.mult(gear.radius + (this.size/2));
  s.add(gear.pos);

  this.pos = s;
  this.dir = -gear.dir;
  this.speed = gear.speed * (gear.points/this.points);
  this.rot += this.dir * this.speed;
}
Gear.prototype.draw = function(){

  push();
    translate(this.pos.x, this.pos.y)
    rotate(this.angle+this.rot);
    imageMode(CENTER);
    image(this.pg,0,0);
  pop();
  stroke(255);

}
