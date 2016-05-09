/**
 * Created by Ria Stroes  may-2016.
 */
function Project(){
  this.grid = new Grid(3,4, 0,0,0,0);
  this.pattern = new Pattern(width,height);
  this.init();
};


Project.prototype.init = function(){
  var pos;
  for(var i = 0; i < this.grid.maxi; i++){
    pos = createVector(this.grid.get(i).x, this.grid.get(i).y);

    this.pattern.details[i] = new Tulip4(pos, 100);

  }

}
Project.prototype.update = function(nr){
  var detail, angle;
  switch(nr){
    case 0:{
      //this.grid.show();
      for(var i = 0; i < this.pattern.details.length; i++){
        for(angle = -PI/4; angle > -PI/4*3; angle -=0.2){

          detail = this.pattern.details[i];
          detail.style(1);
          detail.curve(6, angle);
          detail.draw1();
        }
      }


      break;
    }
    case 1:{
      this.grid.show();

      for(var i = 0; i < this.pattern.details.length; i++){
          for(angle = 0; angle < TWO_PI; angle +=0.2){
          detail = this.pattern.details[i];
          detail.begin = app.posOnCircle(detail.center, 40,8,4+i);
          detail.end = app.posOnCircle(detail.center, 40,8,i);

          detail.style(2);
          detail.curve(10, angle);
          detail.draw2();
        }
      }


      break;
    }
    case 2:{
        for(var i = 0; i < this.pattern.details.length; i++){
          for(angle = 0; angle < TWO_PI; angle +=0.2){
          detail = this.pattern.details[i];

          detail.style(1);
          detail.curve(random(10), angle);
          detail.draw2();
        }
      }
      break;
    }
    case 3:{
      //this.grid.show();
      //dress 4

        for(var i = 0; i < this.pattern.details.length; i++){
          for(var t = 0; t<10; t++){
          //for(angle = -PI; angle < -PI/4*3; angle +=0.1){
          detail = this.pattern.details[i];
          detail.size = 175;
          detail.begin.x = detail.center.x;
          detail.end.x = detail.center.x-100+(t*20);
          detail.begin.y = detail.center.y -(detail.size /2);
          detail.end.y  = detail.center.y +(detail.size /2);
          detail.control2 = detail.end.copy();
          //detail.control2.y = detail.center.y;
          detail.begin2 = detail.begin.copy();


          detail.style(1);
          detail.control1 = detail.begin.copy();

          detail.draw3();
        //}
        }
      }
      break;
    }
    case 4:{
      //this.grid.show();
      //dress 5


        for(var i = 0; i < this.pattern.details.length; i++){
          for(var t = 0; t<10; t++){
          //for(angle = -PI; angle < -PI/4*3; angle +=0.1){
          detail = this.pattern.details[i];
          detail.size = 175;
          detail.begin.x = detail.center.x;
          detail.end.x = detail.center.x-100+(t*20);
          //detail.begin.y = detail.center.y -(detail.size /2);
          detail.end.y  = detail.center.y +(detail.size /2);
          detail.control2 = detail.end.copy();
          //detail.control2.y = detail.center.y;
          detail.begin2 = detail.begin.copy();
          //detail.begin2.x = detail.begin2.x-100+(t*20);



          detail.style(1);
          detail.control2 = detail.begin.copy();

          detail.draw3();
        //}
        }
      }
      break;
    }
    case 5:{
      //this.grid.show();
      //dress 5


        for(var i = 0; i < this.pattern.details.length; i++){
          for(var t = 0; t<10; t++){
          //for(angle = -PI; angle < -PI/4*3; angle +=0.1){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.begin.x = detail.center.x;
          detail.end.x = detail.center.x-100+(t*20);
          detail.end.y  = detail.center.y +(detail.size /2);
          detail.control2 = detail.begin.copy();
          detail.begin2 = detail.end.copy();



          detail.style(1);
          detail.control2 = detail.begin.copy();

          detail.draw4();
        //}
        }
      }
      break;
    }
    case 6:{
      //this.grid.show();
      //dress 5


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.end = detail.center.copy();
          detail.end.add(0, detail.size/2);
          detail.begin = detail.center.copy();
          detail.begin.add(0, -detail.size/2);
          detail.begin2 = detail.begin.copy();
          detail.control1 = detail.center.copy();

          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, 5 + t);

            //detail.begin.x = detail.center.x-100+(t*20);
            //detail.begin2.x = detail.center.x+100-(t*20);
            detail.control2 = detail.begin.copy();

            detail.showStructure();
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 7:{
      //this.grid.show();
      //dress 5


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.end = detail.center.copy();
          detail.end.add(0, detail.size/2);
          detail.begin = detail.center.copy();
          detail.begin.add(0, -detail.size/2);
          detail.begin2 = detail.begin.copy();
          detail.control1 = detail.begin.copy();
          detail.control1.add(0, i* 20);


          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, 5 + t);

            //detail.begin.x = detail.center.x-100+(t*20);
            //detail.begin2.x = detail.center.x+100-(t*20);
            detail.control2 = detail.begin.copy();
            detail.showStructure();
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 8:{
      //this.grid.show();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.end = detail.center.copy();
          detail.end.add(0, detail.size/2);
          detail.begin = detail.center.copy();
          detail.begin.add(0, -detail.size/2);
          detail.begin2 = detail.begin.copy();
          detail.control1 = detail.begin.copy();


          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, 5 + t);

            //detail.begin.x = detail.center.x-100+(t*20);
            //detail.begin2.x = detail.center.x+100-(t*20);
            detail.control2 = detail.begin.copy();
            detail.showStructure();
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 9:{
      //this.grid.show();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.end = detail.center.copy();
          detail.end.add(0, detail.size/2);
          detail.begin = detail.center.copy();
          detail.begin.add(0, -detail.size/2);
          detail.begin2 = detail.begin.copy();
          detail.control1 = detail.begin.copy();


          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, 5 + t);

            //detail.begin.x = detail.center.x-100+(t*20);
            //detail.begin2.x = detail.center.x+100-(t*20);
            detail.control2 = detail.begin.copy();
            detail.control2.y = detail.control2.y + detail.size;
            detail.showStructure(2);
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 10:{
      //this.grid.show();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];
          detail.size = 150;
          detail.end = detail.center.copy();
          detail.end.add(0, detail.size/2);
          detail.begin = detail.center.copy();
          detail.begin.add(0, -detail.size/2);
          detail.begin2 = detail.begin.copy();
          detail.control1 = detail.begin.copy();


          for(var t = 0; t<20; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 20))/2, 20, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 20))/2, 20, 10 + t);

            //detail.begin.x = detail.center.x-100+(t*20);
            //detail.begin2.x = detail.center.x+100-(t*20);
            detail.control2 = detail.begin.copy();
            detail.control2.y = detail.control2.y + detail.size;
            detail.showStructure(2);
            detail.style(1);

            detail.draw4();

          }
        }

      break;
    }
    case 11:{
      this.pattern.details = [];
      for(var i = 0; i < 10; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100);
        tulip.grow(pos, 100,app.randomInt(5), random(TWO_PI));
      }
      break;
    }
    case 12:{
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100);
        tulip.grow2(pos, 100,2, random(TWO_PI));
      }
      break;
    }
    case 13:{
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100);
        tulip.grow3(pos, 100,2, random(TWO_PI));
      }
      break;
    }
    case 14:{
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 50);
        tulip.grow4(i, random(TWO_PI));
        append(this.pattern.details, tulip);
      }
      break;
    }
    case 15:{
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 50);
        tulip.grow5(i, random(TWO_PI));
        append(this.pattern.details, tulip);
      }
      break;
    }
    case 16:{
      var max = 3;
      var p =[];
      this.pattern.details = [];
      for(var i = 0; i <max; i++ ){
        p[i] = createVector(random(width), random(height));
        fill(255,0,0);
        //ellipse(p[i].x, p[i].y, 10,10);
      }
      for(var i = 0; i < max; i++){
        var end = p[i].copy();
        end.add(random(-width/2,width/2), random(-height/2,height/2));
        var stem = new Stem(p[i] , end, 10);
        append(this.pattern.details, stem);
        stem.style(2);
        stem.draw();
      }
      for(var i = 0; i < this.pattern.details.length; i++){

          this.pattern.checkDetails();
      }
      this.pattern.drawOverlappingDetails();
      for(var i = 0; i < max; i++){
        var tulip = new Tulip4(p[i], 100, i+5, this.pattern.details[i].angle);
        tulip.draw();
        append(this.pattern.details, tulip);
      }
      for(var i = 0; i < this.pattern.details.length; i++){

          this.pattern.checkDetails();
      }
      this.pattern.drawOverlappingDetails();

      break;
    }




  }
}

Project.prototype.draw = function(){

}
