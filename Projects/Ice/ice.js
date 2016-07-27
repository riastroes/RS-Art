function Ice(){
  this.pos;
  this.corners = [];
  this.icethickness = 1;
  this.icedrift =random(0,1);
  this.speed = random(0,3);
  this.rot =0;
  this.shift = random(0,60);
}
Ice.prototype.createIce = function(){
  this.pos = createVector(0,0);
  ellipseMode(CENTER);
  for(var i = 0; i < 4; i++){
    var p = app.posOnEllipse(this.pos,200,100, 20, int(random((i*5)+0),int((i*5)+5)));
    append(this.corners, p);
  }
}
Ice.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(app.pal.randomImgColor(),20);
    this.thickness = 1;
    break;
  }
    app.style.set(this.strokecolor, this.fillcolor, this.thickness);

  }
  Ice.prototype.drawPinguin = function(){
    this.style(0);
    ellipse(this.pos.x, this.pos.y + this.shift, 10,30);
  }
  Ice.prototype.draw = function(){

    push();
    translate(width+this.icedrift,((height-80)-this.icethickness) + this.speed/100);
    rotate(this.rot);
    this.style(0);
    if(frameCount > 500){
    this.drawPinguin();
  }
    this.style(2);
    beginShape();
      for(var i =0; i < this.corners.length;i++){
        vertex(this.corners[i].x, this.corners[i].y);
      }
    endShape(CLOSE);
    pop();
    this.icethickness++;
    this.icethickness=constrain(this.icethickness, 0,20);
    this.icedrift -= this.speed;
    this.rot += random(-0.01, 0.01);
  }
