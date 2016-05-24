/**
 * Created by Ria Stroes on 24-4-2016.
 */
function Leaves(size){
  this.leftleavebegin, this.leftleaveend, this.rightleaveend;
  this.rightleavebegin;
  this.control =[];

  this.rect = {width:size,height:size*3};
  this.center = createVector((this.rect.width/2), (this.rect.height/2));
  this.init();
};

Leaves.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],app.pal.colors[2],1);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[3],4);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }
  if(nr == 4){
    app.style.set(app.pal.colors[0],app.pal.tint(app.pal.colors[6],50),4);
  }

};

Leaves.prototype.init = function(){
  //construct basic vertical line

  this.leftleavebegin = createVector(this.center.x - 50,random(100));
  this.leftleaveend = createVector(this.center.x,this.rect.height);
  this.leftleaveend.x += 10;
  this.rightleaveend = createVector(this.center.x,this.rect.height);
  this.rightleaveend.x -= 10;
  this.rightleavebegin = createVector(this.center.x + 50,random(50));



  this.control[0] = this.leftleavebegin.copy();


  this.control[1] = this.leftleaveend.copy();

  this.control[2] = this.rightleaveend.copy();

  this.control[3] = this.leftleavebegin.copy();

  this.control[4] = this.rightleavebegin.copy();




}
Leaves.prototype.change = function(nr){

  switch(nr){
    case 0:{
      //Basis Leave
      this.control[0].x -= 50;
      this.control[1].x -= 20;

      this.control[2].x += 100;
      this.control[3].x -= 50;


      break;
    }
    case 1:{
      //
      this.control[0].x += 100;
      this.control[1].x -= 50;

      this.control[2].x -= 50;
      this.control[3].x += 50;
      break;

  }
  case 2:{
    //
    this.control[0].x += 50;
    this.control[1].x += 100;

    this.control[2].x += 80;
    this.control[3].x += 10;
    break;
  }
  case 3:{
    //
    this.control[0].x += 50;
    this.control[1].x -= 50;

    this.control[2].x += 50;
    this.control[3].x += 50;
    break;
  }






  }


}
Leaves.prototype.showBeginEnd = function(x,y){
  this.style(3);
  push();
    translate(x,y);
    ellipse(this.leftbegin.x, this.leftbegin.y,5,5);
    ellipse(this.leftend.x, this.leftend.y,5,5);
  pop();
}
Leaves.prototype.showcontrol = function(x,y, control1, control2){
  this.style(3);
  push();
    translate(x,y);
    ellipse(control1.x, control1.y,10,10);
    ellipse(control2.x, control2.y,10,10);
    line(control1.x,control1.y, this.leftbegin.x, this.leftbegin.y);
    line(control2.x,control2.y, this.rightend.x, this.rightend.y);

  pop();

}
Leaves.prototype.showRect = function(x,y){
  this.style(3);
  push();
    translate(x,y);
    ellipse(this.center.x, this.center.y,10,10);
    rectMode(CENTER);
    rect(this.center.x, this.center.y,this.rect.width, this.rect.height);
  pop();
}

Leaves.prototype.draw = function(x,y){
  push();
    translate(x,y);
    this.style(4);
    beginShape();

      vertex(this.leftleavebegin.x, this.leftleavebegin.y);
      bezierVertex(this.control[0].x, this.control[0].y, this.control[1].x, this.control[1].y, this.leftleaveend.x, this.leftleaveend.y);
      vertex(this.rightleaveend.x, this.rightleaveend.y);
      bezierVertex(this.control[2].x, this.control[2].y, this.control[3].x, this.control[3].y,  this.leftleavebegin.x, this.leftleavebegin.y);

    endShape(CLOSE);

    beginShape();

    vertex(this.rightleavebegin.x, this.rightleavebegin.y);
    bezierVertex(this.control[0].x, this.control[0].y, this.control[1].x, this.control[1].y, this.leftleaveend.x, this.leftleaveend.y);
    vertex(this.rightleaveend.x, this.rightleaveend.y);
    bezierVertex(this.control[2].x, this.control[2].y, this.control[3].x, this.control[3].y,  this.rightleavebegin.x, this.rightleavebegin.y);

    endShape(CLOSE);

  pop();

}
