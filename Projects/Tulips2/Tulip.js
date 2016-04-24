/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Tulip(size){
  this.begin;
  this.end;
  this.control =[];


  this.rect = {width:size,height:size};
  this.center = createVector((this.rect.width/2), (this.rect.height/2));
  this.init();
};

Tulip.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],app.pal.colors[2],1);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[3],4);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }

};

Tulip.prototype.init = function(){
  //construct basic vertical line

  this.begin = createVector(this.center.x,0);
  this.end = createVector(this.center.x,this.rect.height);


  this.control[0] = this.begin.copy();
  this.control[1] = this.end.copy();
  this.control[2] = this.end.copy();
  this.control[3] = this.begin.copy();
  this.control[4] = this.begin.copy();
  this.control[5] = this.end.copy();
  this.control[6] = this.end.copy();
  this.control[7] = this.begin.copy();

}
Tulip.prototype.change = function(nr){

  switch(nr){
    case 1:{
      //Basis Tulip

      this.control[1].x += -this.rect.width;
      this.control[2].x += +this.rect.width;

      this.control[5].x += -this.rect.width/2;
      this.control[6].x += +this.rect.width/2;
      break;
    }
    case 2:{
      //

      this.control[1].x += -this.rect.width;
      this.control[2].x += +this.rect.width;

      this.control[5].x += -this.rect.width/2;
      this.control[6].x += +this.rect.width/2;

      this.control[4].x += -this.rect.width/2;
      this.control[7].x += +this.rect.width/2;
      break;
    }

  }


}
Tulip.prototype.showBeginEnd = function(x,y){
  this.style(3);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.begin.x, this.begin.y,5,5);
  pop();
}
Tulip.prototype.showControls = function(x,y){
  this.style(3);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.control[0].x, this.control[0].y,10,10);
    ellipse(this.control[1].x, this.control[1].y,10,10);
    line(this.control[0].x,this.control[0].y, this.begin.x, this.begin.y);
    line(this.control[1].x,this.control[1].y, this.end.x, this.end.y);

  pop();

}
Tulip.prototype.showRect = function(x,y){
  this.style(3);
  push();
    translate(this.offset.x + x, this.offset.y + y);
    ellipse(this.center.x, this.center.y,10,10);
    rectMode(CENTER);
    rect(this.center.x, this.center.y,this.rect.width, this.rect.height);
  pop();
}

Tulip.prototype.draw = function(x,y){
  push();
    translate(x,y);
    this.style(2);
    beginShape();

      vertex(this.begin.x, this.begin.y);
      bezierVertex(this.control[0].x, this.control[0].y, this.control[1].x, this.control[1].y, this.end.x, this.end.y);
      bezierVertex(this.control[2].x, this.control[2].y, this.control[3].x, this.control[3].y,  this.begin.x, this.begin.y);

    endShape(CLOSE);
    this.style(2);
    beginShape();

      vertex(this.begin.x, this.begin.y);
      bezierVertex(this.control[4].x, this.control[4].y, this.control[5].x, this.control[5].y,  this.end.x, this.end.y);
      bezierVertex(this.control[6].x, this.control[6].y, this.control[7].x, this.control[7].y,  this.begin.x, this.begin.y);

    endShape(CLOSE);
  pop();
}
