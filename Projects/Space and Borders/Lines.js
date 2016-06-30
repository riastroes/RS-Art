function Lines(){
  // y = x + 2;
  this.def =[];
  this.x = [];
  this.y = [];
  this.crossing = [];
  this.doublecrossing =[];

}
Lines.prototype.style = function(nr){

  switch(nr){
    case 0:
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break
    case 1:
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.imgcolors[0];
      this.thickness = 1;
      break;
    case 2:
      this.strokecolor = app.pal.imgcolors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Lines.prototype.add = function(a, c){
  append(this.def, createVector(a,c));
  //add two points
  append(this.x, 0);
  append(this.y, 0);
  append(this.x, 0);
  append(this.y, 0);
  for(var i = this.x.length-2; i < this.x.length; i++){

    this.x[i] = random(width);
    this.y[i] = (a * this.x[i])   + c;
  }
}
Lines.prototype.long = function(a, c){
  append(this.def, createVector(a,c));
  //add two points
  append(this.x, 0);
  append(this.y, 0);
  append(this.x, 0);
  append(this.y, 0);
  for(var i = this.x.length-2; i < this.x.length; i+=2){

    this.x[i] = 0;
    this.y[i] = (a * this.x[i])   + c;
    this.x[i+1] = width;
    this.y[i+1] = (a * this.x[i+1])   + c;
  }
}

Lines.prototype.short = function(a, b){

  append(this.def, createDefLine(a,b));
  //add two points
  append(this.x, a.x);
  append(this.y, a.y);
  append(this.x, b.x);
  append(this.y, b.y);

}
Lines.prototype.isCrossing = function(defline){

    var i = defline;
    for(var j = 0; j < this.def.length; j++){
      if(i != j){
        if(this.def[i].x != this.def[j].x){
          var pos = createVector(0,0);
          pos.x = (this.def[j].y - this.def[i].y) / (this.def[i].x - this.def[j].x) ;
          pos.y = (this.def[i].x * pos.x) + this.def[i].y;
           this.style(0);
           ellipse(pos.x, pos.y, 5,5);
          if(app.isPosOnLine(pos, createVector(this.x[(i*2)],this.y[(i*2)]), createVector(this.x[(i*2)+1],this.y[(i*2)+1]))){
              append(this.crossing, pos);
            if(app.isPosOnLine(pos, createVector(this.x[(j*2)],this.y[(j*2)]), createVector(this.x[(j*2)+1],this.y[(j*2)+1]))){
              append(this.doublecrossing, pos);
            }
          }
        }
      }
    }
}

Lines.prototype.cross = function(){

  if(this.def.length > 1){
    for(var i = 0; i < this.def.length; i++){
      for(var j = 0; j < this.def.length; j++){
        if(i != j){
          if(this.def[i].x != this.def[j].x){
            var pos = createVector(0,0);
            pos.x = (this.def[j].y - this.def[i].y) / (this.def[i].x - this.def[j].x) ;
            pos.y = (this.def[i].x * pos.x) + this.def[i].y;
            if(this.x[(i*2)] <= this.x[(i*2)+1]){
              if(pos.x >= this.x[(i*2)] && pos.x <= this.x[(i*2)+1]){
                if(this.y[(i*2)] < this.y[(i*2)+1]){
                  if(pos.y >= this.y[(i*2)] && pos.y <= this.y[(i*2)+1]){
                    append(this.crossing, pos);
                  }
                }
                else{
                  if(pos.y >= this.y[(i*2)+1] && pos.y <= this.y[(i*2)]){
                    append(this.crossing, pos);
                  }
                }
              }
            }
            else{
              if(pos.x >= this.x[(i*2)+1] && pos.x <= this.x[(i*2)]){
                if(this.y[(i*2)] < this.y[(i*2)+1]){
                  if(pos.y >= this.y[(i*2)] && pos.y <= this.y[(i*2)+1]){
                    append(this.crossing, pos);
                  }
                }
                else{
                  if(pos.y >= this.y[(i*2)+1] && pos.y <= this.y[(i*2)]){
                    append(this.crossing, pos);
                  }
                }
              }
            }

          }
        }
      }
    }
  }
  // (def1.x * pos.x) + def1.y = (def2.x * pos.x) + def2.y;
  // (def1.x * pos.x) - (def2.x * pos.x) = def2.y - def1.y;
  // (def1.x - def2.x) * pos.x = (def2.y - def1.y);
  // pos.x = (def2.y - def1.y) / (def1.x - def2.x) ;
  // pos.y = (def1.x * pos.x) + def1.y;

}
Lines.prototype.doublecross = function(){
  for(var i = 0; i < this.crossing.length; i++){
    for(var j = 0; j < this.crossing.length; j++){
      if(i != j && abs(this.crossing[i].x - this.crossing[j].x) < 1  && abs(this.crossing[i].y - this.crossing[j].y) < 1 ){
        append(this.doublecrossing, this.crossing[i].copy());
      }
    }

  }
}
Lines.prototype.draw = function(){
  this.style(0);
  if(this.x.length > 1){
    for(var i = 0; i < this.x.length -1; i += 2){
      line(this.x[i], this.y[i], this.x[i + 1], this.y[i + 1]);
    }
  }
}
Lines.prototype.drawLine = function(i){
  this.style(2);
  line(this.x[i], this.y[i], this.x[i + 1], this.y[i + 1]);

}
Lines.prototype.drawCrossings = function(){
  this.style(0);

  for(var i = 0; i < this.crossing.length; i++){
    ellipse(this.crossing[i].x, this.crossing[i].y, 10,10);
  }

}
Lines.prototype.drawDoubleCrossings = function(){

  this.style(1);
  for(var i = 0; i < this.doublecrossing.length; i++){
    ellipse(this.doublecrossing[i].x, this.doublecrossing[i].y, 10,10);
  }
}
