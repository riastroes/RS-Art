/**
 * Created by Ria Stroes on 12-4-2016.
 */
function Project(){
  this.smoke = [];
  this.sky = new Sky();
  this.water = new Water();
  this.dok = new Dok();
  this.ferry = new Ferry();
  this.dokL = createVector(((this.ferry.width/2)-20), height/3*2);
  this.dokR = createVector(width -((this.ferry.width/2)-20), height/3*2);
  this.ferry.startEngine(this.dokL, this.dokR,0);
  this.pos;
  this.crossing = 0;
  this.wave = new Wave();
  this.peoples = [];

 this.createPeople(5);

};
Project.prototype.createPeople = function(count){
  for(i =0; i < count ; i++){
    append(this.peoples, new People());
  }
}
Project.prototype.loadPeople = function(count){
  var i;
  for(i =0; i < this.peoples.length; i++){
    this.peoples[i].move(app.randomInt(3));
    this.peoples[i].draw();
  }
}
Project.prototype.ferryPeople = function(){
  var i, x,y;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].t == this.peoples[i].track.length-1 ){
      x = this.peoples[i].track[this.peoples[i].t].x + (this.ferry.speed * this.ferry.dir);
      y = this.peoples[i].track[this.peoples[i].t].y;
      append(this.peoples[i].track,createVector(x,y))

    }
    this.peoples[i].move(1);
    this.peoples[i].draw();
  }
}
Project.prototype.startLeft = function(){
  this.ferry.startEngine(this.dokL, this.dokR,1);

};
Project.prototype.startRight = function(){
  this.ferry.startEngine(this.dokR, this.dokL, -1);

};
Project.prototype.goRight = function(){
  this.ferry.goRight(3);
  this.wave.makeWave(this.ferry.pos, this.ferry.bow);
  if(random(10) < 1){
        append(this.smoke, new Smoke(this.ferry.pipe));
  }
};
Project.prototype.goLeft = function(){
  this.ferry.goLeft(3);
  this.wave.makeWave(this.ferry.pos, this.ferry.bow);
  if(random(10) < 1){
    append(this.smoke, new Smoke(this.ferry.pipe));
  }
};
Project.prototype.drawSmoke = function(){
  var i;
  for(i = 0; i < this.smoke.length; i++){
    this.smoke[i].draw();
  }
}
Project.prototype.stopWave = function(dir){

  this.wave = new Wave();

}
Project.prototype.stop = function(){
  var i, dir;
  this.ferry.smoke = [];
  this.stopWave();
  this.ferry.stop();
  this.crossing++;
};
Project.prototype.draw = function(){

  this.sky.draw();
  this.water.draw();
  this.wave.draw();
  this.dok.draw();
  this.ferry.draw();
  this.drawSmoke();
};
/*********************SKY***************************/
function Sky(){}
Sky.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[3]);
    noStroke();
    strokeWeight(0);
  }
}
Sky.prototype.draw = function(){
  this.style(1);
  rect(0,0, width, height/4);
}
/*********************SKY***************************/
function Water(){}
Water.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[4]);
    noStroke()
    strokeWeight(0);
  }
}
Water.prototype.draw = function(){
  this.style(1);
  rect(0,height/4, width, height);

}
/*********************DOK***************************/
function Dok(){}
Dok.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[2]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
  else if(nr == 2){
    fill(app.pal.colors[3]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
  else if(nr == 3){
    fill(app.pal.colors[5]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
}
Dok.prototype.construct = function(){

  //left pier
  this.style(2);
  beginShape();
    vertex(0,height/3);
    vertex(0,height/3 - 10);
    vertex(200,height/3 - 10);
    vertex(200,height/3);
  endShape(CLOSE);
  //left dok
  this.style(1);
  beginShape();
    vertex(0,height/3*2);
    vertex(0,height/3);
    vertex(100,height/3);
  endShape(CLOSE);
  this.style(3);
  beginShape();
    vertex(0,(height/3*2)+ 20);
    vertex(100,height/3 +20);
    vertex(200,height/3 +20);
    vertex(200,height/3);
    vertex(100,height/3);
    vertex(0,(height/3*2));
  endShape(CLOSE);
  //right dok
  this.style(1);
  beginShape();
    vertex(width,height/3*2);
    vertex(width,height/3);
    vertex(width-100,height/3);
  endShape(CLOSE);
    //right pier
    this.style(2);
  beginShape();
    vertex(width,height/3);
    vertex(width,height/3 - 10);
    vertex(width -200,height/3 - 10);
    vertex(width -200,height/3);
  endShape(CLOSE);
  this.style(3);
  beginShape();
    vertex(width,(height/3*2)+ 20);
    vertex(width-100,height/3 +20);
    vertex(width-200,height/3 +20);
    vertex(width-200,height/3);
    vertex(width-100,height/3);
    vertex(width,(height/3*2));
  endShape(CLOSE);
}
Dok.prototype.draw = function(){
  this.style();
  this.construct();
};
/*********************Ferry***************************/
function Ferry(){
  this.pipe;
  this.dir = 1;
  this.speed;
  this.width = 160;
  this.isstarted = false;
  this.pos;
  this.bow;
  this.midship;

};
Ferry.prototype.startEngine= function(startdok, enddok, dir){
  this.dir = dir;
  this.angle = 0;
  this.start = startdok.copy();
  this.end = enddok.copy();
  this.pos = this.start.copy();
  this.isstarted = true;
};
Ferry.prototype.goRight = function(speed){
  if(this.isstarted){
    this.speed = speed;
    this.pos.x += this.dir * this.speed;
    this.pipe = this.pos.copy();
    this.pipe.y -=40;
    this.angle = map(sin(this.pos.x/15),-1,1,-0.1, 0.1);
    this.bow = createVector(-60,20).rotate(this.angle);
    if(this.pos.x >= this.end.x){
      this.isstarted = false;
    }
  }
};
Ferry.prototype.goLeft = function(speed){
  if(this.isstarted){
    this.speed = speed;
    this.pos.x += this.dir * this.speed;
    this.pipe = this.pos.copy();
    this.pipe.y -=40;
    this.angle = map(sin(this.pos.x/15),-1,1,-0.1, 0.1);
    this.bow = createVector(60,20).rotate(this.angle);
    if(this.pos.x <= this.end.x){
      this.isstarted = false;
    }
  }
};
Ferry.prototype.stop = function(){
    this.angle = 0;
    this.dir =0;
};
Ferry.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[1]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 2){
    fill(app.pal.colors[5]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 3){
    fill(app.pal.colors[2]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 4){
    fill(app.pal.colors[4]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }

};
Ferry.prototype.construct = function(){
  //boot

  this.style(1);
  beginShape();
  vertex(-80,0);vertex(80,0);
  vertex(60,20);vertex(-60,20);
  endShape(CLOSE);
  //kabin
  this.style(2);
  beginShape();
    vertex(-20,0);vertex(20,0);
    vertex(20,-20);vertex(-20,-20);
  endShape(CLOSE);
  //window
  this.style(3);
  beginShape();
    vertex(-15,-5);vertex(15,-5);
    vertex(15,-15);vertex(-15,-15);
  endShape(CLOSE);
  //capitan
  this.style(2);
  if(this.dir == 1){
    triangle(-3,-8,4,-11, -3,-11);
  }
  else if(this.dir == -1){
    triangle(-4,-11,3,-11, 3,-8);
  }

  ellipse(0,-8,5,5);

  //roof
  this.style(4);
  beginShape();
  vertex(-30,-20);vertex(30,-20);
  vertex(30,-26);vertex(-30,-26);

  endShape(CLOSE);
  //smokepipe
  beginShape();
  vertex(-2,-26);vertex(2,-26);
  vertex(2,-40);vertex(-2,-40);
  endShape(CLOSE);
}
Ferry.prototype.draw = function(){

  push();
  translate(this.pos.x, this.pos.y);

  rotate(this.angle);
  this.construct();

  pop();

};

/*********************Wave***************************/
function Wave(){
  this.col = [];
}
Wave.prototype.style = function(nr){
  if(nr == 1){
    noFill();
    stroke(app.pal.colors[1]);
    strokeWeight(1);
  }
}
Wave.prototype.makeWave = function(pos, bow){
  var w;
  if(app.is(pos)){
    w = pos.copy();
    w.add(bow);
    append(this.col, w);
  }

}
Wave.prototype.draw = function(w){
  this.style(1);

  for(i = 0; i < this.col.length-1; i++){
    line(this.col[i].x, this.col[i].y, this.col[i+1].x, this.col[i+1].y);
  }
}
/*********************Smoke***************************/
function Smoke(pos){

  this.blobber = new Blobber();
  this.size = 0;
  this.pos = pos.copy();
  this.age = 0;

}
Smoke.prototype.init = function(){
  //pos, corners, minwidth, maxwidth, minheight, maxheight
  this.blobber.init(pos, 8, this.size,  this.size*2,  this.sizie,  this.size*2 );
  this.blobber.style(false, app.pal.colors[1],0);

}
Smoke.prototype.grow = function(){
  //pos, corners, minwidth, maxwidth, minheight, maxheight
  this.size++;
  this.pos.y =lerp(this.pos.y, 0, this.age/2000);
  this.age++;
  this.blobber.init(this.pos, 8,  this.size,  this.size*2,  this.size,  this.size*2 );
  this.blobber.style(false, app.pal.tint(app.pal.colors[1],100-this.age),0);
}
Smoke.prototype.draw = function(){
  this.grow();
  if(this.age < 100){
    this.blobber.draw();
  }
}
/*********************People***************************/
function People(){
  this.track = new Track();
  this.t = 0; //trackposition;

}
People.prototype.move = function(speed){

  if(this.t < this.track.length - speed){
    this.t += speed;

  }


}
People.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[0]);
    noStroke();
    strokeWeight(1);
  }
};

People.prototype.draw = function(){
  this.style(1);
  ellipse(this.track[this.t].x, this.track[this.t].y, 10,10);
}

/*********************Track***************************/
function Track(){
  this.pos = [];
  this.createTrack();
  return this.pos;
}
Track.prototype.createTrack = function(){
  var x, y;
  y = (height/3)+10;
  for(x = 0; x< 95; x++){
      append(this.pos, createVector(x, y));
  }
  while(x > 0){
    y += ((height/3*2) - ((height/3)+10)) / 95;
    x -= 1;
    append(this.pos, createVector(x, y));
  }
  while(x < app.randomInt(160)){
    y = (height/3*2)-5;
    x +=10;
    append(this.pos, createVector(x, y));
  }


}
