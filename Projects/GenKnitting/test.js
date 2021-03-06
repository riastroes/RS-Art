function Test(){
  this.prelines = [];
  this.lines = [];
  this.gentest =[];
  this.genpretest = [];
}
Test.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 4;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 0.4;
    break;
  }
 app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Test.prototype.createFirstLines = function(){
  this.prelines = [];
  append(this.prelines, createVector(0,100));
  append(this.prelines, createVector(400,100));
  append(this.prelines, createVector(0,120));
  append(this.prelines, createVector(400,120));
  append(this.prelines, createVector(0,140));
  append(this.prelines, createVector(400,140));
  append(this.prelines, createVector(0,200));
  append(this.prelines, createVector(400,200));

}
Test.prototype.createLines = function(){
  this.lines = [];


  append(this.lines, createVector(0,400));
  append(this.lines, createVector(500,400));

  append(this.lines, createVector(0,450));
  append(this.lines, createVector(500,450));

  append(this.lines, createVector(0,500));
  append(this.lines, createVector(500,500));


}
Test.prototype.draw = function(offset, scale){
  var x,y,x1,y1;
  push();
  translate(offset.x, offset.y);
  for(var i= 0; i < this.lines.length; i += 2){
    x = (this.lines[i].x *scale);
    y = (this.lines[i].y *scale);
    x1 = (this.lines[i+1].x *scale);
    y1 = (this.lines[i+1].y *scale);
    line(x,y, x1,y1);
  }
  pop();
}
Test.prototype.genTestPreLines = function(offset, scale){
  this.genpretest =[];
  var x, y;
  append(this.genpretest, createVector(offset.x,offset.y));
  for(var i=0; i < this.prelines.length; i++){
    x =  offset.x + (this.prelines[i].x *scale);
    y =  offset.y + (this.prelines[i].y *scale);
    append(this.genpretest, createVector(x.toFixed(3), y.toFixed(3)));
  }

}
Test.prototype.genTestLines = function(offset, scale){
  this.gentest =[];
  var x, y;
  append(this.gentest, createVector(offset.x,offset.y));
  for(var i=0; i < this.lines.length; i++){
    x =  offset.x + (this.lines[i].x *scale);
    y =  offset.y + (this.lines[i].y *scale);
    append(this.gentest, createVector(x.toFixed(3), y.toFixed(3)));
  }

}
Test.prototype.showGenTest = function(gentest, pos, pscale){
  this.style(0);
  push();
  translate(pos.x, pos.y);
  scale(pscale);
  for(var i = 1; i < gentest.length - 1; i+=2 ){
    line(gentest[i].x, gentest[i].y,gentest[i+1].x, gentest[i+1].y);
  }
  pop();
}
