function Assemblyline(begin, end, points, pointsize, acolor){
  //the pos of an assemblyline is at the center.
  this.pos = begin.copy();
  this.points = points;
  this.pointsize = pointsize;
  this.begin = p5.Vector.sub(begin, this.pos);
  this.begin.y += this.pointsize;
  this.end = p5.Vector.sub(end, this.pos);
  this.end.y += this.pointsize;

  this.size = dist(this.begin.x, this.begin.y, this.end.x, this.end.y);
  this.pg = createGraphics(this.size+2,this.pointsize*2);

  this.center = createVector(this.pg.width/2, this.pg.height/2);
  this.rot = 0;
  this.angle = 0;

  this.speed = 0;
  this.dir = 1;
  this.color = acolor;
  this.outer = [];
  this.inner = [];
  this.connect =[];
  this.create();
}
Assemblyline.prototype.create = function(){
  var i;
  for(i = 0; i < this.points+1; i += 1 ){

    this.inner[i] = app.posOnLine(this.begin, this.end, this.points, i);
    if(i< this.points){
      this.begin1 = this.begin.copy();
      this.begin1.y +=this.pointsize;
      this.end1 = this.end.copy();
      this.end1.y +=this.pointsize;
      this.outer[i] = app.posOnLine(this.begin1, this.end1, this.points, i + 0.5);
    }
  }
  app.style.pg(this.pg, color(0,0,0), this.color,1);
  this.pg.rectMode(CORNER);
  this.pg.rect(this.begin.x, this.begin.y, this.size, -this.pointsize);
  this.pg.beginShape();
    for(var i = 0; i < this.points + 1; i += 1 ){
      this.pg.vertex(this.inner[i].x, this.inner[i].y);
      if(i< this.points){
        this.pg.vertex(this.outer[i].x, this.outer[i].y);
      }
    }
  this.pg.endShape(CLOSE);

  this.connect[0] = this.connectpos(0);
  this.connect[1] = this.connectpos(int(this.points/2));
  this.connect[2] = this.connectpos(this.points);
}
// Assemblyline.prototype.rotate = function(speed){
//   this.speed = speed;
//   this.rot += this.dir * this.speed;
// }
Assemblyline.prototype.connectTo = function(gear){
  if(dist(this.pos.x, this.pos.y, gear.pos.x, gear.pos.y)< (this.size/2) +(gear.size/2)){
    this.dir = -gear.dir;
    this.speed = gear.speed * (gear.points/this.points);
    this.rot += this.dir * this.speed;

  }
}
Assemblyline.prototype.connectpos = function(i){
    var con = p5.Vector.add(this.inner[i], this.pos);
    con.x -= this.size/2;
    con.y -= this.pointsize;
    return con;
}
Assemblyline.prototype.draw = function(){

  push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle+this.rot);
    imageMode(CENTER);
    image(this.pg,0,0);

  pop();

  //ellipse(this.pos.x, this.pos.y-5,10,10);
}