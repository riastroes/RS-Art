function Knitting(stitchwidth,stitchheight){

  this.stitches = 0;
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;
  this.w = this.stitchwidth /4;
  this.h = this.stitchheight /6;


  this.knitting = [];
  this.genknitting = [];


}
Knitting.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[2];
    this.fillcolor = false
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[2];
    this.fillcolor = false
    this.thickness = 0.1;
    break;
  }
 app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Knitting.prototype.knitStartLR = function(p){
 this.style(0);
  var c1 = createVector(2,0); //0,4
  var c2 = createVector(4,0); //2,4
  //var c3 = createVector(4,2); //4,4

  var arc = TWO_PI / 4;
  var step = arc / 7;
  var pos = p.copy();
  this.style(0);
  for(var s = arc; s > 0; s -= step){
     pos = app.posOnEllipse(c1, 4,2,7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
  //top stitch
  this.style(0);
  arc = PI;
  for(var s = 0; s > -arc; s -= step){
     pos = app.posOnCircle(c2, 2, 7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }

}
Knitting.prototype.knitEndLR = function(p, seq){
 this.style(0);
  //ellipse(p.x, p.y, 10,10);
  //p.add(0,-this.stitchheight/3)
  var c1 = createVector(0,4); //0,4
  var c2 = createVector(2,4); //2,4
  var c3 = createVector(4,4); //4,4

  var arc = TWO_PI / 4;
  var step = arc / 7;
  var pos = p.copy();
  if( seq == "first"){
    var extra = p5.Vector.add(pos,createVector(0,this.stitchheight/2));

    append(this.knitting,extra);
    //p = extra.copy();
  }
  this.style(1);
  for(var s = 0; s < PI; s += step){
     pos = app.posOnCircle(c1, 2,7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     if(pos.x < this.knitting[0].x-5) {
       pos.x = this.knitting[0].x - 5;

     }
     else if(pos.x > this.knitting[0].x + ((this.stitches) * this.stitchwidth) || s > TWO_PI -step){
        pos.x = this.knitting[0].x + ((this.stitches) * this.stitchwidth)+5;
     }
     else{
       append(this.knitting, pos)
     };

  }
  this.style(0);

  for(var s = PI; s < TWO_PI; s += step){

     pos = app.posOnEllipse(c2,4, 2, 7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     if(pos.x < this.knitting[0].x){
       pos.x = this.knitting[0].x - 5;
       append(this.knitting, pos);
     }
     else if(pos.x > this.knitting[0].x + ((this.stitches) * this.stitchwidth) ){
       pos.x = this.knitting[0].x + ((this.stitches) * this.stitchwidth)+5;

     }


       append(this.knitting, pos);


  }

}
Knitting.prototype.knitLR = function(p){
 this.style(0);
  var c1 = createVector(0,4);
  var c2 = createVector(2,2);
  var c3 = createVector(4,4);

  var arc = TWO_PI / 4;
  var step = arc / 7;
  var pos = p.copy();

  for(var s = arc; s > 0; s -= step){
     pos = app.posOnCircle(c1, 2,7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
  //top stitch
  arc = PI;
  for(var s = arc+step; s < TWO_PI; s += step){
     pos = app.posOnCircle(c2, 2, 7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
  arc = PI;
  for(var s = arc-step; s > (PI/2)-step; s -= step){
     pos = app.posOnCircle(c3, 2,7*4*step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
}
Knitting.prototype.knitRL = function(p){
 this.style(0);
  var c1 = createVector(4,4);
  var c2 = createVector(2,2);
  var c3 = createVector(0,4);

  var arc = TWO_PI / 4;
  var step = arc / 7;
  var pos;

  for(var s = arc; s < PI ; s += step){
     pos = app.posOnCircle(c1, 2,7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
  //top stitch
  arc = TWO_PI;
  for(var s = arc-step; s > PI; s -= step){
     pos = app.posOnCircle(c2, 2, 7*4* step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
  arc = PI;
  for(var s = step; s <= (PI/2); s += step){
     pos = app.posOnCircle(c3, 2,7*4*step, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);

  }
}
Knitting.prototype.createStartRowLR = function(stitches){
   var last = createVector(0,0);
   if(this.knitting.length>0){
     last = this.knitting[this.knitting.length-1].copy();
     last.add(0,-(this.stitchheight+(this.stitchheight/2)));

   }
   for(var i = 0; i < stitches; i++){
     this.knitStartLR(last);
     last.add(this.stitchwidth,0);
   }
   last.add(this.stitchwidth/2,this.stitchheight/3)
   append(this.knitting, last);

}
Knitting.prototype.createEndRowLR = function(stitches){
   var last = createVector(0,0);
   if(this.knitting.length>0){
     last = this.knitting[this.knitting.length-1].copy();
     last.add(0,-(this.stitchheight+(this.stitchheight/2)));

   }
   for(var i = 0; i <= stitches; i++){
     if(i == 0){
       this.knitEndLR(last,"first");
     }
     else if(i == stitches){
       this.knitEndLR(last,"last");
     }
     else{
       this.knitEndLR(last);
     }

     last.add(this.stitchwidth,0);
   }
   last.add(this.stitchwidth/2,this.stitchheight/3)
   append(this.knitting, last);

}
Knitting.prototype.createRowLR = function(stitches){
   var last = createVector(0,0);
   if(this.knitting.length>0){
     last = this.knitting[this.knitting.length-1].copy();
     last.add(0,-(this.stitchheight+(this.stitchheight/2)));

   }
   for(var i = 0; i < stitches; i++){
     this.knitLR(last);
     last.add(this.stitchwidth,0);
   }

}
Knitting.prototype.createRowRL = function(stitches,row){

  var last = createVector(0,0);
  if(this.knitting.length>0){
    last = this.knitting[this.knitting.length-1].copy();
  }
  if(row == 1){
    last.add(-this.stitchwidth,-(this.stitchheight+(this.stitchheight/6)));

  }
  else{
    last.add(-this.stitchwidth,-(this.stitchheight+(this.stitchheight/2)));

  }
 for(var i = 0; i < stitches; i++){
     this.knitRL(last);
     last.add(-this.stitchwidth,0);
   }
}
Knitting.prototype.draw = function(pos){
  this.style(0);
  //ellipse(pos.x, pos.y, 5,5);
  push();
  translate(pos.x, pos.y);
    ellipse(this.knitting[0].x, this.knitting[0].y,10,10);
    for(var i= 1; i < this.knitting.length-9; i++){
      line(this.knitting[i-1].x, this.knitting[i-1].y,this.knitting[i].x, this.knitting[i].y);
      ellipse(this.knitting[i].x, this.knitting[i].y,3,3);
    }

  pop();
}
Knitting.prototype.createPattern= function(nr){
  switch(nr){
    case 1:
      //three stitches
      this.createRowLR(3);
      break;
    case 2:
        //two row, not correct right border
        this.createRowLR(3);//row 1 down
        this.createRowRL(3);//row 2 up
      break;
    case 3:
     //three rows, correct left border
     this.createRowLR(3);//row 1 down
     this.createRowRL(3);//row 2 up
     this.createRowLR(3);//row 3
     break;
     case 4:
     //startrow  LR
     this.stitches = 3;
     this.createStartRowLR(3);//setup
     this.createRowRL(3,1);//row 1 up
     this.createRowLR(3);//row 2
     this.createRowRL(3);//row
     this.createEndRowLR(3);//row
     break;
     case 5:
     //startrow  LR
     this.stitches = 30;
     this.createStartRowLR(30);//setup
     this.createRowRL(30,1);//row 1 up
     this.createRowLR(30);//row 2
     this.createRowRL(30);//row
     this.createEndRowLR(30);//row
     break;
   }
}
Knitting.prototype.genKnitting = function(offset, scale){
  var x, y;

  for(var i= 1; i < this.knitting.length -9; i++){
    x = offset.x + (this.knitting[i].x *scale);
    y = offset.y-(this.knitting[i].y *scale);
    append(this.genknitting, createVector(x.toFixed(3), y.toFixed(3)));
  }

}
Knitting.prototype.showGenKnitting = function(genknitting, pos, pscale){
  this.style(2);
  push();
  translate(pos.x, pos.y);
  scale(pscale);
  for(var i = 1; i < genknitting.length; i++ ){
    line(genknitting[i-1].x, genknitting[i-1].y,genknitting[i].x, genknitting[i].y);
  }
  pop();
}
