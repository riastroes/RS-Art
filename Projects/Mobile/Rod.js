function Rod(connect, size, lmass, rmass, level){
  this.connect =connect.copy();
  this.center = connect.copy();
  this.size = size;
  this.lmass = lmass;
  this.rmass = rmass;
  this.level = level;
  this.mass = this.lmass + this.rmass;
  this.top = this.lmass / this.mass;
  this.left = createVector(-this.size * (1 - this.top), this.lmass-this.rmass);
  this.right= createVector(this.size * this.top, this.rmass - this.lmass);
  this.lcontrol = this.left.copy();
  this.rcontrol = this.right.copy();
  this.grow = true;

  this.rot = random(TWO_PI);
  this.a =random(-1,1);

  this.gravity = createVector(0,2);
  this.force = createVector(0,0);
  this.diff;
  this.children =[];
  this.hangers =[];
  if(this.level >0){
    var cllmass = this.lmass * random(0.2,0.8);
    var clrmass = this.lmass - cllmass;
    var crlmass = this.lmass * random(0.2,0.8);
    var crrmass = this.lmass - crlmass;
    append(this.children, new Rod(this.left, this.size*0.8, cllmass, clrmass, this.level-1));
    append(this.children, new Rod(this.right, this.size*0.8, crlmass, crrmass, this.level-1));
  }
  else{
    append(this.hangers, new Hanger(this.left, this.lmass, 0));
    append(this.hangers, new Hanger(this.right,this.rmass, PI));
  }
  this.fixedcolor = app.pal.randomImgColor();


}
Rod.prototype.construct = function(){
  for(var c =0; c< this.children.length; c++){
    this.children[c].construct();
  }

  this.force = this.gravity.copy();
  this.force.mult(this.lmass);
  this.lcontrol.add(this.force);
  this.force = this.gravity.copy();
  this.force.mult(this.rmass);
  this.rcontrol.add(this.force);

  var x = curvePoint(this.lcontrol.x, this.left.x, this.right.x, this.rcontrol.x, this.top);
  var y = curvePoint(this.lcontrol.y, this.left.y, this.right.y, this.rcontrol.y, this.top);

  this.diff = createVector(x,y);
  this.connect.sub(this.diff);
  this.center = this.diff;
  this.centerl = createVector(this.center.x, this.left.y);
  this.centerr = createVector(this.center.x, this.right.y);
  this.ld = dist(this.centerl.x, this.centerl.y, this.left.x, this.left.y);
  this.rd = dist(this.centerr.x, this.centerr.y, this.right.x, this.right.y);



}

Rod.prototype.change = function(){
  if(this.grow){
    this.lmass += 1;
    this.rmass -= 1;
  }
  else{
    this.lmass -= 1;
    this.rmass += 1;
  }
  if(this.lmass >= this.mass || this.rmass < 10){
    this.grow = false;
  }
  if(this.lmass <= 10 || this.rmass > this.mass){
    this.grow = true;
  }
}
Rod.prototype.style = function(pal, nr, index){
  switch(nr){
    case 0:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = false;
      this.thickness = index * 0.2;
      break;
    }
    case 1:{
      this.strokecolor = false;
      this.fillcolor = pal.tint(pal.imgcolors[index],50);
      this.thickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = color(255,0,0);
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }
    case 3:{
      this.strokecolor = color(255,255,0);
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }
    case 4:{
      this.strokecolor = false;
      this.fillcolor = app.pal.tint(this.fixedcolor,50);
      this.thickness = 1;
      break;
    }
    case 5:{
      this.strokecolor = app.pal.tint(app.pal.imgcolors[0], 40);
      this.fillcolor = app.pal.tint(app.pal.imgcolors[0], 3);
      this.thickness = 1;
      break;
    }
    case 6:{

      this.strokecolor = color(abs(index) % 360,100,100);
      this.fillcolor = color(abs(index) % 360,100,100);
      this.thickness = 1;
      break;
    }
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
Rod.prototype.calcRotPos = function(center,  d, rot){

  var rotpos = app.posOnEllipse(center, d, d * 0.3, TWO_PI,  rot);
  //this.style(app.pal, 2, 1);
  //ellipse(center.x, center.y, d*2, (d*2) * 0.3);
  return rotpos;
}
Rod.prototype.rotate = function(rot){
  this.left = this.calcRotPos(this.centerl, this.ld, rot);
  this.right = this.calcRotPos(this.centerr, this.rd, PI + rot);
  this.lcontrol.x = this.left.x;
  this.rcontrol.x = this.right.x;

}
Rod.prototype.update = function(){
  if(this.hangers.length > 0){
      this.hangers[0].update(this.left);
      this.hangers[1].update(this.right);
    }
}
Rod.prototype.draw = function(){
  this.style(app.pal, 0,this.level+1);

  push();
  translate(this.connect.x, this.connect.y);

  if(this.level == 0){
   //this.rot += 0.1;
   this.rot += map(sin(this.a),-1,1, -0.1, 0.1);
   this.a += 0.01;
   this.rotate(this.rot);
  }
  curve(this.lcontrol.x, this.lcontrol.y, this.left.x, this.left.y, this.right.x, this.right.y,  this.rcontrol.x, this.rcontrol.y);

  if(this.level == 0){

    line(this.left.x, this.left.y,this.left.x, this.left.y+50);
    line(this.right.x, this.right.y,this.right.x, this.right.y+50);
    this.style(app.pal, 4, 0);
    this.change();
    ellipse(this.left.x , this.left.y +50 +(this.lmass),this.lmass*2,this.lmass*2);
    ellipse(this.right.x, this.right.y+50+(this.rmass),this.rmass*2, this.rmass*2);
    }

  for(var c =0; c< this.children.length; c++){
    this.children[c].draw()
  }
  pop();


}
Rod.prototype.draw1 = function(){
  this.style(app.pal, 0,this.level+1);

  push();
  app.project.paper.pg.push()
  app.project.paper.pg.translate(this.connect.x, this.connect.y);
  translate(this.connect.x, this.connect.y);

  if(this.level == 0){
   this.rot += map(sin(this.a),-1,1, -0.1, 0.1);
   this.a += 0.01;
   this.rotate(this.rot);
  }
  curve(this.lcontrol.x, this.lcontrol.y, this.left.x, this.left.y, this.right.x, this.right.y,  this.rcontrol.x, this.rcontrol.y);
  if(this.level == 0){

    line(this.left.x, this.left.y,this.left.x, this.left.y+50);
    line(this.right.x, this.right.y,this.right.x, this.right.y+50);
    this.style(app.pal, 5, 0);
    this.change();
    ellipse(this.left.x , this.left.y +50 +(this.lmass),this.lmass*2,this.lmass*2);

    app.project.paper.pg.ellipse(this.left.x, this.left.y+50+(this.rmass), this.lmass*2, this.lmass*2);
    this.style(app.pal, 5, 0);
    ellipse(this.right.x, this.right.y+50+(this.rmass),this.rmass*2, this.rmass*2);
    app.project.paper.pg.ellipse(this.right.x ,  this.right.y+50+(this.rmass)  , this.rmass*2, this.rmass*2);
  }

  for(var c =0; c< this.children.length; c++){
    this.children[c].draw1()
  }
  app.project.paper.pg.pop();
  pop();


}
Rod.prototype.draw3 = function(){
  this.style(app.pal, 0,this.level+1);

  push();
  app.project.paper.pg.push()
  app.project.paper.pg.translate(this.connect.x, this.connect.y);
  translate(this.connect.x, this.connect.y);

  if(this.level == 0){
   this.rot += map(sin(this.a),-1,1, -0.1, 0.1);
   this.a += 0.01;
   this.rotate(this.rot);
   if(this.rot> TWO_PI){ this.rot = 0;}
  }
  curve(this.lcontrol.x, this.lcontrol.y, this.left.x, this.left.y, this.right.x, this.right.y,  this.rcontrol.x, this.rcontrol.y);
  if(this.level == 0){

    line(this.left.x, this.left.y,this.left.x, this.left.y+50);
    line(this.right.x, this.right.y,this.right.x, this.right.y+50);
    this.style(app.pal, 6, floor(this.rot *100));
    this.change();
    ellipse(this.left.x , this.left.y +50 +(this.lmass),this.lmass*2,this.lmass*2);
    app.project.paper.style(1, floor(this.rot *100));
    app.project.paper.pg.ellipse(this.left.x, this.left.y+50+(this.rmass), this.lmass*2, this.lmass*2);
    this.style(app.pal, 6, floor(this.rot * 100));
    ellipse(this.right.x, this.right.y+50+(this.rmass),this.rmass*2, this.rmass*2);

    app.project.paper.pg.ellipse(this.right.x ,  this.right.y+50+(this.rmass)  , this.rmass*2, this.rmass*2);
  }

  for(var c =0; c< this.children.length; c++){
    this.children[c].draw3()
  }
  app.project.paper.pg.pop();
  pop();


}
Rod.prototype.draw2 = function(){

  push();
    translate(this.connect.x, this.connect.y);
    app.project.paper.pg.push()
    app.project.paper.pg.translate(this.connect.x, this.connect.y);
    if(this.level == 0){
     this.rot += map(sin(this.a),-1,1, -0.1, 0.1);
     this.a += 0.01;
     this.rotate(this.rot);

     for(var i = 0; i < this.hangers.length; i++){
         this.hangers[i].draw();
     }
    }
    app.style.set(app.pal.colors[0],false,1);
    //line(0,0, 0,50);
    curve(this.lcontrol.x, this.lcontrol.y, this.left.x, this.left.y, this.right.x, this.right.y,  this.rcontrol.x, this.rcontrol.y);

    for(var c =0; c< this.children.length; c++){
      this.children[c].draw()
    }
    app.project.paper.pg.pop();
  pop();


}
