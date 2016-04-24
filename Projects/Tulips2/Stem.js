/**
 * Created by Ria Stroes on 24-4-2016.
 */
function Stem(size){
  this.leftbegin, this.leftend;
  this.rightbegin, this.rightend;
  this.control =[];


  this.rect = {width:size,height:size*3};
  this.center = createVector((this.rect.width/2), (this.rect.height/2));
  this.init();
};

Stem.prototype.style = function(nr){
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
    app.style.set(app.pal.colors[0],app.pal.tint(app.pal.colors[4],50),4);
  }

};

Stem.prototype.init = function(){
  //construct basic vertical line

  this.leftbegin = createVector(this.center.x,0);
  this.leftend = createVector(this.center.x,this.rect.height);
  this.rightend = createVector(this.center.x,this.rect.height);
  this.rightbegin = createVector(this.center.x,0);


  this.control[0] = this.leftbegin.copy();
  this.control[1] = this.leftend.copy();
  this.control[2] = this.rightend.copy();
  this.control[3] = this.rightbegin.copy();


}
Stem.prototype.change = function(nr){

  switch(nr){
    case 0:{
      //Basis Stem



      break;
    }
    case 1:{
      //
      this.control[0].x -= 50;
      this.control[1].x += 50;

      this.control[2].x += 200;
      this.control[3].x += 200;
      this.showControls(200,700, this.control[0], this.control[1]);
      this.showBeginEnd(200,700);
      break;

  }
  case 2:{
    //
    this.control[0].x -= 5;
    this.control[1].x -= 5;

    this.control[2].x += 20;
    this.control[3].x += 20;
    break;
  }
  case 3:{
    //
    this.control[0].x -= 5;
    this.control[1].x -= 5;

    this.control[2].x += 20;
    this.control[3].x += 20;
    break;
  }
  case 4:{
    //
    this.control[0].x -= 5;
    this.control[1].x -= 5;

    this.control[2].x += 20;
    this.control[3].x += 20;
    break;
  }





  }


}
Stem.prototype.showBeginEnd = function(x,y){
  this.style(3);
  push();
    translate(x,y);
    ellipse(this.leftbegin.x, this.leftbegin.y,5,5);
    ellipse(this.leftend.x, this.leftend.y,5,5);
  pop();
}
Stem.prototype.showControls = function(x,y, control1, control2){
  this.style(3);
  push();
    translate(x,y);
    ellipse(control1.x, control1.y,10,10);
    ellipse(control2.x, control2.y,10,10);
    line(control1.x,control1.y, this.leftbegin.x, this.leftbegin.y);
    line(control2.x,control2.y, this.rightend.x, this.rightend.y);

  pop();

}
Stem.prototype.showRect = function(x,y){
  this.style(3);
  push();
    translate(x,y);
    ellipse(this.center.x, this.center.y,10,10);
    rectMode(CENTER);
    rect(this.center.x, this.center.y,this.rect.width, this.rect.height);
  pop();
}

Stem.prototype.draw = function(x,y){
  push();
    translate(x,y);
    this.style(4);
    beginShape();

      vertex(this.leftbegin.x, this.leftbegin.y);
      bezierVertex(this.control[0].x, this.control[0].y, this.control[1].x, this.control[1].y, this.leftend.x, this.leftend.y);
      //vertex(this.rightend.x, this.rightend.y);
      //bezierVertex(this.control[2].x, this.control[2].y, this.control[3].x, this.control[3].y,  this.rightbegin.x, this.rightbegin.y);

    endShape();

  pop();
}
