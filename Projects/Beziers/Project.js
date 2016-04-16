/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.control1;
  this.control2;
  this.begin;
  this.end;

  this.beziers = [];
  this.grid = new Grid(7,7,10,10,10,10);
  this.center = createVector(width/2, height/2);

  this.a=0;
  this.b=0;

};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,0.05);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],false,0.1);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[11],app.pal.colors[11],1);
  }

};

Project.prototype.construct = function(){
  //construct vertical line
  this.rect = {width:200,height:200};
  this.begin = createVector(100,0);
  this.end = createVector(100,200);
  this.by = this.begin.y;
  this.ey = this.end.y;
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();
  this.a = 0;
}
Project.prototype.change = function(nr){

  switch(nr){
    case 1:{
      //symetrische vorm
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.y = map(cos(this.a),-1,1, this.end.y, this.begin.y);
      this.a += 0.1
      break;
    }
    case 2:{
      //bulb rechts
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.y = map(sin(this.a),-1,1, this.end.y, this.begin.y);
      this.a += 0.1
      break;
    }
    case 3:{
      //bulb links
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.y = map(sin(-this.a),-1,1, this.end.y, this.begin.y);
      this.a += 0.1
      break;
    }
    case 4:{
      //als 2 links en scherper rechts
      this.style(1);
      this.end.y = map(sin(this.a),-1,1, this.ey, this.rect.height/2);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.y = map(sin(this.a),-1,1, this.end.y, this.begin.y);
      this.a += 0.1
      break;
    }
    case 5:{
      //als 3 rechts en scherper links
      this.style(1);
      this.end.y = map(sin(this.a),-1,1, this.ey, this.rect.height/2);
      this.control1.x = map(sin(-this.a),-1,1, 0, this.rect.width);
      this.control2.y = map(sin(this.a),-1,1, this.end.y, this.begin.y);
      this.a += 0.1
      break;
    }
    case 6:{
      //ovaal
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
    case 7:{
      //ovaal met punt
      this.style(1);
      //this.begin.y = map(sin(this.a),-1,1, this.by,this.ey);
      this.end.y = map(cos(this.a),-1,1, this.ey,this.rect.height/2);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
    case 8:{
      //ovaal met twee punt
      this.style(1);
      this.begin.y = map(cos(this.a),-1,1, this.by,this.rect.height/2);
      this.end.y = map(cos(this.a),-1,1, this.ey,this.rect.height/2);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
    case 9:{
      //ovaal met twee diagonaal punten
      this.style(1);
      this.begin.y = map(sin(this.a),-1,1, this.by,this.rect.height/2);
      this.end.y =   map(sin(-this.a),-1,1, this.ey,this.rect.height/2);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
    case 10:{
      //ovaal met twee diagonaal punten
      this.style(1);
      this.begin.y = map(sin(-this.a),-1,1, this.by,this.rect.height/2);
      this.end.y =   map(sin(this.a),-1,1, this.ey,this.rect.height/2);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }


    case 11:{
      //linker oor
      this.style(1);
      var p = createVector(this.rect.width/2, this.rect.heigth/2);
      this.begin = app.posOnCircle(p, this.rect.width/2, 60, PI + this.a);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
    case 12:{
      //rechter oor
      this.style(1);
      var p = createVector(this.rect.width/2, this.rect.heigth/2);
      this.begin = app.posOnCircle(p, this.rect.width, 60, PI -this.a);
      this.control1.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.control2.x = map(sin(this.a),-1,1, 0, this.rect.width);
      this.a += 0.1
      break;
    }
  }


}
Project.prototype.showControls = function(x,y){
  this.style(3);
  push();
    translate(x,y);
  ellipse(this.control1.x, this.control1.y,10,10);
  ellipse(this.control2.x, this.control2.y,10,10);
  line(this.control1.x,this.control1.y, this.begin.x, this.begin.y);
  line(this.control2.x,this.control2.y, this.end.x, this.end.y);
  pop();

}
Project.prototype.draw = function(x,y){
  push();
    translate(x,y);
    beginShape();

      vertex(this.begin.x, this.begin.y);
      bezierVertex(this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.end.x, this.end.y);

    endShape();

  pop();


}
