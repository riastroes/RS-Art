function Feather(x,y){
   this.start = createVector(x,y);
   this.top = this.start.copy();
   this.top.y -= 50;

   this.control1 = this.start.copy();
   this.control1.y += 100;

   this.control2 = this.top.copy();
   this.control2.x += random(-10,10);

   this.rot = random(TWO_PI);


}
Feather.prototype.change = function(){
  this.top.x += random(-5,5);
  this.top.y += random(-5,5);
  this.control1.x += random(-5,5);
  this.control2.y -= random(-5,5);
}
Feather.prototype.draw = function(){



  // if(frameCount == 100){
  //   background(230,230,255);
  //   stroke(200,255,230);
  //   line(this.start.x,this.start.y, this.start.x, height);
  // }
   if(frameCount% 50 == 0){
     this.style(2 );
   }

   this.rot += 0.01;
   this.top = p5.Vector.sub(this.start, this.top);


   this.change();
   push();
   translate(this.start.x, this.start.y);
   scale(0.2);


   rotate(this.rot);
   curve(this.control1.x, this.control1.y, 0,0, this.top.x, this.top.y, this.control2.x, this.control2.y);
   pop();
   if(frameCount % 3 == 1){
     this.start = this.control2.copy();
   }
   if(frameCount % 3 == 2){
     this.start = this.control1.copy();
   }


}
Feather.prototype.style = function(nr){

  switch(nr){
     case 0:
       this.strokecolor = app.pal.colors[0];
       this.fillcolor = app.pal.colors[1];
       this.thickness = 1;
     break;
     case 1:
       this.strokecolor = app.pal.colors[1];
       this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
       this.thickness = 0.2;
     break;
     case 2:
       this.strokecolor = app.pal.tint(app.pal.randomImgColor(),20);
       this.fillcolor = false;
       this.thickness = 1;
     break;
     }
    app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
