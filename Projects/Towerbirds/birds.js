function Birds(tops){
  this.birds = [];
  this.pg = createGraphics(width,height);
  for(var i = 2; i < tops.length-2; i +=2){
    append(this.birds, new Bird(this.pg,tops[i-2], tops[i-1], tops[i], tops[i+1]));
  }
}
Birds.prototype.draw = function(){
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawLegs();
  }
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawTales();
  }
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawBody();
  }
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawWings();
  }
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawHead();
  }
  for(var i = 0; i < this.birds.length; i++){
    this.birds[i].drawSnavel();
  }

  image(this.pg, 0,0);
}

function Bird(pg,posleft, posleftwidth, posright, posrightwidth){
  this.pg = pg;
  this.posleft = posleft.copy();
  this.posright = posright.copy();
  this.posleftwidth = posleftwidth;
  this.posrightwidth = posrightwidth;

  this.footleft = createVector(this.posleft.x + random(this.posleftwidth), this.posleft.y);
  this.footright = createVector(this.posright.x + random(this.posrightwidth), this.posright.y);

  this.legpos = createVector(this.footleft.x +((this.footright.x - this.footleft.x)/2), this.footright.y - 100);
}
Bird.prototype.style = function(nr){
  switch(nr){
    case 0: //legs
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 3;
    break;
    case 1: //body
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[2];
    this.thickness = 3;
    break;
    case 2: //eye
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 3;
    break;
    case 3: //snavel
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 4: //wings
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 5: //neck
    this.strokecolor = app.pal.colors[2];
    this.fillcolor = app.pal.colors[2];
    this.thickness = 4;
    break;
  }
  app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);

}
Bird.prototype.drawLegs = function(){
  this.style(0);

this.pg.line(this.legpos.x, this.legpos.y, this.footleft.x, this.footleft.y);
this.pg.line(this.legpos.x, this.legpos.y, this.footright.x, this.footright.y);


  this.pg.line(this.footleft.x, this.footleft.y,this.footleft.x+10, this.footleft.y+10);
  this.pg.line(this.footleft.x, this.footleft.y,this.footleft.x-10, this.footleft.y+10);
  this.pg.line(this.footleft.x, this.footleft.y,this.footleft.x, this.footleft.y+10);

  this.pg.line(this.footright.x, this.footright.y,this.footright.x+10, this.footright.y+10);
  this.pg.line(this.footright.x, this.footright.y,this.footright.x-10, this.footright.y+10);
  this.pg.line(this.footright.x, this.footright.y,this.footright.x, this.footright.y+10);
}
Bird.prototype.drawBody = function(){
  this.style(1);
  this.center = createVector(this.legpos.x, this.legpos.y - 30);
  this.pg.ellipse(this.center.x, this.center.y, 60,60);
  this.angle = random(PI, TWO_PI);
  this.body = app.posOnCircle(this.center, 20, TWO_PI, this.angle);

  this.pg.push();
  this.pg.translate(this.body.x, this.body.y);
  this.pg.rotate(this.angle);
  this.style(0);
  this.head = createVector(100,0);


  this.pg.pop();
}
Bird.prototype.drawHead = function(){
  this.pg.push();
  this.pg.translate(this.body.x, this.body.y);
  this.pg.rotate(this.angle);
  this.style(5);//neck
  this.pg.line(0,0, this.head.x, this.head.y);
  this.style(1);
  this.pg.ellipse(0,0,80,50);
  this.pg.ellipse(this.head.x, this.head.y,40,40);
  this.style(2);
  this.pg.ellipse(this.head.x, this.head.y+8,20,20);//eye
  this.style(3);
  this.pg.ellipse(this.head.x, this.head.y+3,10,10);//eye
  this.pg.pop();
}
Bird.prototype.drawSnavel = function(){
  this.style(3);
  this.pg.push();
  this.pg.translate(this.body.x, this.body.y);
  this.pg.rotate(this.angle);
  this.bek =[];
  append(this.bek, app.posOnCircle(this.head, 20, TWO_PI, TWO_PI));
  append(this.bek, app.posOnCircle(this.head, 20, TWO_PI, TWO_PI-(PI/5)));
  append(this.bek, app.posOnCircle(this.head, 20, TWO_PI, TWO_PI+(PI/5)));
  this.pg.triangle(this.bek[0].x-10, this.bek[0].y,this.bek[1].x, this.bek[1].y,this.bek[1].x+40, this.bek[1].y);
  this.pg.triangle(this.bek[0].x-10, this.bek[0].y,this.bek[2].x, this.bek[2].y,this.bek[2].x+40, this.bek[2].y);
  this.pg.pop();
}
Bird.prototype.drawWings = function(){
  this.style(4);
  this.pg.push();
  this.pg.translate(this.body.x, this.body.y);
  this.pg.rotate(this.angle - PI/2);
  var center = createVector(0,-60);
  var pos;
  var radius = random(50,150);
  for(var r = 0; r <10; r++){
    radius -= 10;
    for(var i = 0; i < PI; i += PI/30){
      pos = app.posOnEllipse(center,radius,120,TWO_PI, i);
      this.pg.line(0,0,pos.x,pos.y);
      this.pg.ellipse(pos.x, pos.y, 10-r,10-r);
      //this.style(3);

    }
  }

  this.pg.pop();
}
Bird.prototype.drawTales = function(){
  this.style(4);
  this.pg.push();
  this.pg.translate(this.legpos.x, this.legpos.y);

  this.pg.rotate(this.angle);
  var center = createVector(0,0);
  var pos;
  var radius =random(10,50)
  for(var i = 0; i < PI; i += PI/30){
    pos = app.posOnEllipse(center,radius,50,TWO_PI, i);
    // this.pg.ellipse(pos.x, pos.y, 5,5);
    // //this.style(3);
    // this.pg.line(0,0,pos.x,pos.y);
  }

  this.pg.pop();
}