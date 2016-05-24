/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.control1;
  this.control2;
  this.begin;
  this.end;

  this.beziers = [];
  this.rect = {width:800,height:800};
  //this.offset = createVector(0,0);

  this.offset = createVector((width - this.rect.width)/2,(height - this.rect.height)/2);
  this.center = createVector((this.rect.width/2), (this.rect.height/2));
  this.a=0;
  this.b=0;

};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,0.5);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],false,0.1);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,3);
  }

};

Project.prototype.construct = function(){
  //construct vertical line

  this.begin = createVector(this.center.x,0);
  this.end = createVector(this.center.x,this.rect.height);
  this.by = this.begin.y;
  this.ey = this.end.y;
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();
  this.a = 0;
}
Project.prototype.change = function(nr){

  switch(nr){


    case 1:{
      //Tulip
      this.style(1);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 0.2
      break;
    }
    case 2:{
      //Tulip
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 1
      break;
    }
    case 3:{
      //Tulip
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 10
      break;
    }
    case 4:{
      //Tulip 2 blaadjes
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 30
      break;
    }
    case 5:{
      //Tulip
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 45

      break;
    }
    case 6:{
      //Tulip 1 blad rechts
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 60;//55;//50;//48


      break;
    }
    case 7:{
      //Tulip, mooi gevarieerd
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 75;//71 voor dikkere draden;//70 draden;//68;//66;//63//62;


      break;
    }
    case 8:{
      //Tulip, mooi gevarieerd
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 15;


      break;
    }
    case 9:{
      //Tulip, mooi gevarieerd
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 90;


      break;
    }
    case 10:{
      //Tulip, mooi gevarieerd
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 105;


      break;
    }
    case 11:{
      //Tulip, mooi gevarieerd
      this.style(3);
      var p = createVector(this.center.x, this.center.y);
      this.control1 =app.posOnCircle(p, this.rect.width/2,60, this.a);
      this.control2.x = map(sin(this.a),-1,1, 0,  this.rect.width);
      this.a += 120;


      break;
    }



  }


}
Project.prototype.showBeginEnd = function(x,y){
  this.style(3);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.begin.x, this.begin.y,5,5);
  //  ellipse(this.end.x, this.end.y,10,10);
  //  line(this.begin.x,this.begin.y, this.end.x, this.end.y);

  pop();
}
Project.prototype.showControls = function(x,y){
  this.style(3);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.control1.x, this.control1.y,10,10);
    ellipse(this.control2.x, this.control2.y,10,10);
    line(this.control1.x,this.control1.y, this.begin.x, this.begin.y);
    line(this.control2.x,this.control2.y, this.end.x, this.end.y);
  pop();

}
Project.prototype.showRect = function(x,y){
  this.style(2);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.center.x, this.center.y,10,10);
    rectMode(CENTER);
    rect(this.center.x, this.center.y,this.rect.width, this.rect.height);
  pop();
}
Project.prototype.draw = function(x,y){
  push();
    translate(this.offset.x + x, this.offset.y + y);
    beginShape();

      vertex(this.begin.x, this.begin.y);
      bezierVertex(this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.end.x, this.end.y);

    endShape();

  pop();


}
