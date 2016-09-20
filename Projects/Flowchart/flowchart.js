function Flowchart(pg, x,y, size, pwidth){
  this.basis= createVector(x,y);
  this.pos= this.basis.copy();
  this.size = size;
  this.min = x -(pwidth/2) + 50;
  this.max = x +(pwidth/2) - 50;
  this.pg = pg;

}
Flowchart.prototype.add = function(x,y, size){
  this.basis.add(x,y);
  this.pos= this.basis.copy();
  this.size = size;

};
Flowchart.prototype.flow = function(pscale,stylenr){

  this.newpos = this.pos.copy();
  this.newpos.add(0,this.size);
  this.pg.line(this.pos.x, this.pos.y, this.newpos.x, this.newpos.y);
  this.pos = this.newpos.copy();
  var a = new IfElse(this.pg, this.min, this.max);
  a.draw(this.pos,pscale, stylenr);
  this.pos = a.choose();
  if(this.pos.y < height) {
    this.flow(pscale, stylenr);
  }


}

function IfElse(pg, min, max){
  this.pg = pg;
  this.min = min;
  this.max = max;
  this.pos = createVector(0,0);
  this.if = this.pos.copy();
  this.if.x = -10;
  this.if.y = 10;
  this.else = this.pos.copy();
  this.else.x = 10;
  this.else.y = 10;
}
IfElse.prototype.style = function(nr,y){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = color(200,0,0);
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 20;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    var colora = app.pal.randomImgColor();
    var colorb = color(255,0,0);
    this.fillcolor = app.pal.tint(lerpColor(colora, colorb, random(1)),20);
    this.thickness = 1;
    break;

  }
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

IfElse.prototype.scale = function(pscale){
  this.if.mult(pscale);
  this.else.mult(pscale);
}
IfElse.prototype.choose = function(){
  var newpos = this.pos.copy();
  var perc = map(newpos.x, this.min+50, this.max-50, 0,100);
  if(random(100)  < perc){
    newpos.add(this.if.x, this.if.y);
  }
  else{
    newpos.add(this.else.x, this.else.y);
  }
  return newpos;
}
IfElse.prototype.draw = function(pos,pscale, stylenr){
  if(app.is(stylenr)){
    this.style(stylenr);
  }
  else{
    this.style(2);
  }

  this.pos = pos.copy();
  this.scale(pscale);
  this.pg.push();
  this.pg.translate(this.pos.x, this.pos.y);
  this.pg.triangle(0,0, this.if.x, this.if.y, this.else.x, this.else.y);
  this.pg.pop();

  image(this.pg, 0,0);
}

function Module(){
  this.pos = createVector(10,5);
  this.width = 20;
  this.height = 10;
}
Module.prototype.scale = function(pscale){
  this.pos.mult(pscale);
  this.width *= pscale;
  this.height *= pscale;
}
Module.prototype.draw = function(pos){
  push();
  translate(pos.x, pos.y);
  triangle(this.pos.x, this.pos.y, this.if.x, this.if.y, this.else.x, this.else.y);
  pop();
}



function Idea(){
  this.pos = createVector(15,5);
  this.width = 30;
  this.height = 10;
}
Idea.prototype.scale = function(pscale){
  this.pos.mult(pscale);
  this.width *= pscale;
  this.height *= pscale;
}
Idea.prototype.draw = function(pos,pscale){
  this.pos = pos.copy();
  push();
  translate(pos.x, pos.y);

  ellipse(this.pos.x, this.pos.y, this.width, this.height);
  pop();
}
