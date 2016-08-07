function People(pos, size){
  this.pos = pos;
  this.size = size;
  this.stylenr = app.randomInt(7);
  this.create();
}
People.prototype.style = function(nr){
  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1/this.size;
    break;
    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.imgcolors[this.stylenr];
    this.thickness = 1/this.size;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
People.prototype.createSkelet = function(){
  this.skelet =[];
  append(this.skelet, createVector(0,-5)); //kruis
  append(this.skelet, createVector(-0.7,0));//  foot
  append(this.skelet, createVector(-0.9,-3));// knee
  append(this.skelet, createVector(-1.1,-5.5)); //heap
  append(this.skelet, createVector(-0.7,-7));   //taille
  append(this.skelet, createVector(-1.1,-8.5)); //oksel
  append(this.skelet, createVector(-1.5,-4.5));  //hand
  append(this.skelet, createVector(-1.5,-9));//shoulder
  append(this.skelet, createVector(-0.2,-10)); //nek
  append(this.skelet, createVector(-0.6,-10.5)); //ears
  append(this.skelet, createVector(-0.7,-11.5)); //ears
  append(this.skelet, createVector(0,-12)); //top head
  append(this.skelet, createVector(0.7,-11.5)); //ears
  append(this.skelet, createVector(0.6,-10.5)); //ears
  append(this.skelet, createVector(0.2,-10)); // nek
  append(this.skelet, createVector(1.5,-9)); //shoulder
  append(this.skelet, createVector(1.5,-4.5)); //hand
  append(this.skelet, createVector(1.1,-8.5));//oksel
  append(this.skelet, createVector(0.7,-7));//taille
  append(this.skelet, createVector(1.1,-5.5));// heap
  append(this.skelet, createVector(0.9,-3));// knee
  append(this.skelet, createVector(0.7,0)); //foot

}
People.prototype.create = function(){
  this.body =[];
  append(this.body, this.cross());
  append(this.body, this.knee("l",0));
  append(this.body, this.just("l",0));
  append(this.body, this.just("l",1));
  append(this.body, this.knee("l",1));
  append(this.body, this.hip("l"));
  append(this.body, this.belly("l"));
  append(this.body, this.armpit("l"));
  append(this.body, this.elbow("l",0));
  append(this.body, this.wrist("l",0));
  append(this.body, this.hand("l"));
  append(this.body, this.wrist("l",1));
  append(this.body, this.elbow("l",1));
  append(this.body, this.shoulder("l"));
  append(this.body, this.neck("l"));
  append(this.body, this.jaw("l"));
  append(this.body, this.ears("l"));
  append(this.body, this.head());
  append(this.body, this.ears("r"));
  append(this.body, this.jaw("r"));
  append(this.body, this.neck("r"));
  append(this.body, this.shoulder("r"));
  append(this.body, this.elbow("r",0));
  append(this.body, this.wrist("r",0));
  append(this.body, this.hand("r"));
  append(this.body, this.wrist("r",1));
  append(this.body, this.elbow("r",1));
  append(this.body, this.armpit("r"));
  append(this.body, this.belly("r"));
  append(this.body, this.hip("r"));
  append(this.body, this.knee("r",0));
  append(this.body, this.just("r",0));

  //append(this.body, createVector(0.9,-3));// knee
  //append(this.body, createVector(0.7,0.5)); //foot
  append(this.body, this.just("r",1));// just

  append(this.body, this.knee("r",1));// knee

}
People.prototype.hand = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(1.5, -4.5),0.2,4,1);
  }
  else{
    pos = app.posOnCircle(createVector(-1.5, -4.5),0.2,4,1);
  }
  return pos;
}
People.prototype.wrist = function(side, io){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(1.5, -5),0.1,2,io);
  }
  else{
    pos = app.posOnCircle(createVector(-1.5, -5),0.1,2,io);
  }
  return pos;
}
People.prototype.elbow = function(side, io){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(1.3, -7),0.2,2,io);
  }
  else{
    pos = app.posOnCircle(createVector(-1.3, -7),0.2,2,io);
  }
  return pos;
}
People.prototype.armpit = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -9),1.3,8,1);
  }
  else{
    pos = app.posOnCircle(createVector(0, -9),1.3,8,3);
  }
  return pos;
}
People.prototype.head = function(){
  var pos;
  pos = app.posOnCircle(createVector(0, -10.6),1.3,8,6);
  return pos;
}
People.prototype.ears = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -10.8),1,8,7);
  }
  else{
    pos = app.posOnCircle(createVector(0, -10.8),1,8,5);
  }
  return pos;
}
People.prototype.jaw = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -11.5),1,8,1);
  }
  else{
    pos = app.posOnCircle(createVector(0, -11.5),1,8,3);
  }
  return pos;
}
People.prototype.neck = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -10),0.3,2,0);
  }
  else{
    pos = app.posOnCircle(createVector(0, -10),0.3,2,1);
  }
  return pos;
}
People.prototype.shoulder = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -9),1.3,2,0);
  }
  else{
    pos = app.posOnCircle(createVector(0, -9),1.3,2,1);
  }
  return pos;
}
People.prototype.belly = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -6.7),0.7,2,0);
  }
  else{
    pos = app.posOnCircle(createVector(0, -6.7),0.7,2,1);
  }
  return pos;
}
People.prototype.hip = function(side){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0, -5.4),1,2,0);
  }
  else{
    pos = app.posOnCircle(createVector(0, -5.4),1,2,1);
  }
  return pos;
}
People.prototype.cross = function(){
  var pos;
  pos = app.posOnCircle(createVector(0, -5),0,4,0);
  return pos;
}
People.prototype.knee = function(side, io){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0.7,-3),0.3,2,io);
  }
  else{
    pos = app.posOnCircle(createVector(-0.7,-3),0.3,2,io);
  }
  return pos;
}
People.prototype.just = function(side, io){
  var pos;
  if(side == "r"){
    pos = app.posOnCircle(createVector(0.8,0),0.2,2,io);
  }
  else{
    pos = app.posOnCircle(createVector(-0.8,0),0.2,2,io);
  }
  return pos;
}
People.prototype.draw = function(){
  this.style(1);
  push();
  translate(this.pos.x, this.pos.y);

  scale(this.size);
  beginShape();
    var last = this.body.length - 1;
    curveVertex(this.body[last].x, this.body[last].y);
    for(var i = 0; i < this.body.length; i++){
      curveVertex(this.body[i].x, this.body[i].y);
    }
    curveVertex(this.body[0].x, this.body[0].y);
    curveVertex(this.body[1].x, this.body[1].y);

  endShape();
  this.style(0);
  //ellipse (0,-9,2,2 )//shoulders
  //hip:    ellipse(0,-5.4, 2,2)
  //belly:  ellipse(0, -7, 1.4,1.4);

  // ellipse(0.5, -3, 0.7,0.7);
  // ellipse(-0.5, -3, 0.7,0.7);
  //
  // ellipse(0.5, 0, 0.2,0.2);
  // ellipse(-0.5, 0, 0.2,0.2);

  pop();
}
