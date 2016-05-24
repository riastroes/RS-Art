/**
 * Created by Ria Stroes  may-2016.
 */
function Project(){

  this.etage = [];

  this.pattern = new Pattern(width,height);


};


Project.prototype.init = function(max){
  var pos;
  for(var i = 0; i < 4; i++){
    this.etage[0] = [];
    this.etage[1] = [];
    this.etage[2] = [];
    this.etage[3] = [];
  }
  for(var p = 0; p < max; p++){
    pos = createVector( random(width), random( 0, height));
    append( this.etage[0], pos);
    pos = createVector( random(width), random( height/3,height/3*2 ));
    append( this.etage[1], pos);
    pos = createVector( random(width), random( height/2 , height));
    append( this.etage[2], pos);
    pos = createVector( random(width), random( height/3*2 , height));
    append( this.etage[3], pos);

  }
  this.pattern.details = [];
}
Project.prototype.drawLeaves = function(nr){
  var detail, angle, pos, h;
  switch(nr){
    case 0:{
      //leaves
      this.init(40);
      for(var i = 0; i < this.etage[2].length; i++){
        pos = this.etage[2][i];
        h = random(200, height/4);
        if(pos.y + h > height){
          pos.y += height - (pos.y + h);
        }
        var leaves = new Leaves(pos, h, 300);
        leaves.draw();
        append(this.pattern.details, leaves);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;
    }
  }
}

Project.prototype.drawFlowers = function(nr){
  switch(nr){
    case 0:{
      var tulip, stem, stemend;

      this.init(40);
      for(var i = 0; i < this.etage[1].length; i++){
        pos = this.etage[1][i];
        if(pos.y > height/2){
          stemend = pos.copy();
          stemend.add(0, random(height /6, height/4));
          stem  = new Stem(pos, stemend, 10);
          stem.draw();
          append(this.pattern.details, stem);
        }
        tulip = new Tulip(pos, 200,100, 230, 10, random(TWO_PI));
        tulip.style();
        tulip.draw();
        //tulip.showStructure(0);
        append(this.pattern.details, tulip);



      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;

    }
    case 1:{
      var tulip2;
      this.init(20);
      for(var i = 0; i < this.etage[0].length; i++){
        pos = this.etage[0][i];
        tulip2 = new Tulip2(pos, 50, 75, 230, 10, random(TWO_PI));
        tulip2.style();
        tulip2.draw();
        append(this.pattern.details, tulip2);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;

    }
    case 2:{
      var tulip3, w, h, z;
      this.init(50);
      for(var i = 0; i < this.etage[0].length; i++){
        pos = this.etage[0][i];
        w = random(400, 900);
        h = w;
        z = h* 3;
        tulip3 = new Tulip3(pos, w, h, z, 10, random(TWO_PI));
        tulip3.style();
        tulip3.draw();
        append(this.pattern.details, tulip3);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 3:{
      var tulip4, w, h, z;
      this.init(20);
      for(var i = 0; i <  this.etage[2].length; i++){
        pos = this.etage[2][i];
        w = random(100, 200);
        h = w *2;
        z = h * 1.5;
        tulip4 = new Tulip4(pos, w, h, z, 10, random(TWO_PI));
        tulip4.style();
        tulip4.draw();
        //tulip4.showStructure(0);
        append(this.pattern.details, tulip4);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;
    }

    case 4:{
      var tulip5, w, h, z;
      this.init(20);
      for(var i = 0; i <  this.etage[3].length; i++){
        pos = this.etage[3][i];
        w = random(100, 200);
        h = w ;
        z = h * 1.7;
        tulip5 = new Tulip5(pos, w, h, z, 10, random(TWO_PI));
          tulip5.style();
        tulip5.draw();
        //tulip5.showStructure(0);
        append(this.pattern.details, tulip5);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 5:{
      var tulip6, w, h, z;
      this.init(50);
      for(var i = 0; i <  this.etage[0].length; i++){
        pos = this.etage[0][i];
        w = random(50, 100);
        h = w ;
        z = h * 1.5;
        tulip6 = new Tulip6(pos, w, h, z, 10, random(TWO_PI));
          tulip6.style();
        tulip6.draw();
        //tulip6.showStructure(0);
        append(this.pattern.details, tulip6);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
          this.pattern.checkWidthDetails();
      }
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 4:{
        //egg fases, different style
        this.init();
        for(var i = 0; i < this.pattern.details.length; i++){

          detail = this.pattern.details[i];
          detail.style(1);
          for(angle = 0; angle < TWO_PI; angle +=0.2){
            detail.curve(i * 80, angle);
            detail.draw1();
          }
      }
      break;
    }
    case 5:{
      //this.grid.show();
      //dress 4 symmetrical tulip
      this.init();

        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];

          detail.style(1);

          for(var t = 0; t<10; t++){
            detail.end.x = detail.begin.x-100+(t*20);
            detail.control2 = detail.end.copy();
            detail.draw3();

        }
      }
      break;
    }
    case 6:{
      //this.grid.show();
      //dress 5 tulip
      this.init();


      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        detail.style(1);
        detail.angle = PI;

        for(var t = 0; t<10; t++){
              detail.end.x = detail.begin.x-100+(t*20);
              detail.control2 = detail.begin.copy();
              detail.draw3();
        }
      }
      break;
    }
    case 7:{
      //this.grid.show();
      //dress 5
      this.init();
      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        //detail.begin.x = detail.center.x;
        detail.begin2 = detail.begin.copy();
        detail.control1 = detail.end.copy();
        detail.control2 = detail.begin.copy();
        detail.style(1);

        for(var t = 0; t<10; t++){
          detail.end.x = detail.begin.x-100+(t*20);

            detail.angle = t * 0.1;
            detail.angle += PI * 0.85;
            detail.draw3();
        }
      }
      break;
    }
    case 6:{
      //this.grid.show();
      //dress 5
      this.init();
      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        //detail.begin.x = detail.end.x;
        detail.begin2 = detail.begin.copy();
        detail.control1 = detail.begin.copy();
        detail.control2 = detail.begin.copy();
        detail.style(1);

        for(var t = 0; t<10; t++){
          detail.end.x = detail.begin.x-50+(t*10);

            detail.angle = t * 0.01;
            detail.angle += PI * 0.98;
            detail.draw4();
        }
      }
      break;
    }
    case 7:{

      //dress 5
      this.grid.show();
      this.init();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];

          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, 5 + t);

            //detail.showStructure(4);
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 7:{
      //this.grid.show();
      //dress 5
      this.init();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];

          detail.control1.add(0, i* 20);


          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size, detail.size/2, 10, 5 + t);
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
      this.init();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];

          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, 5 + t);

            detail.control2 = detail.begin.copy();

            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 9:{
      //this.grid.show();
      this.init();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];

          for(var t = 0; t<10; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 10))/2, 10, 5 + t);

            detail.control2 = detail.begin.copy();
            detail.control2.y = detail.control2.y + detail.size;
          //  detail.showStructure(4);
            detail.style(1);

            detail.draw4();

          }
      }
      break;
    }
    case 10:{
      //this.grid.show();
      this.init();


        for(var i = 0; i < this.pattern.details.length; i++){
          detail = this.pattern.details[i];


          for(var t = 0; t<20; t++){

            detail.begin = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 20))/2, 20, t);
            detail.begin2 = app.posOnEllipse(detail.control1, detail.size - (i * 20), (detail.size- (i * 20))/2, 20, 10 + t);

            detail.control2 = detail.begin.copy();
            detail.control2.y = detail.control2.y + detail.size;

            detail.style(1);

            detail.draw4();

          }
        }

      break;
    }
    case 11:{
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 10; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100,app.randomInt(5), random(TWO_PI));
        tulip.grow();
      }
      break;
    }

    case 12:{
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100,2, random(TWO_PI));
        tulip.grow();
      }
      break;
    }
    case 13:{
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100,2, random(TWO_PI));
        tulip.grow2();
      }
      break;
    }
    case 14:{
      //tulip glitch
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 20; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100,i/4, random(TWO_PI));
        tulip.grow3();
      }
      break;
    }
    case 15:{

      var tulips = [];
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 5; i++){
        var pos = createVector(random(width), random(height));
        tulips[i] = new Tulip4(pos, 100,i, random(TWO_PI));
        tulips[i].draw();
        append(this.pattern.details, tulips[i]);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
        fill(255,0,0,10);
          this.pattern.details[i].size *= 5;
          //ellipse(this.pattern.details[i].center.x, this.pattern.details[i].center.y, this.pattern.details[i].size,this.pattern.details[i].size);
          this.pattern.checkDetails();
          this.pattern.details[i].size /= 5;
      }
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 16:{
      this.init();
      var tulips = [];
      this.pattern.details = [];
      for(var i = 0; i < 10; i++){
        var pos = createVector(random(width), random(height));
        tulips[i] = new Tulip4(pos, 50, i, random(TWO_PI));

        tulips[i].draw();
        append(this.pattern.details, tulips[i]);
      }
      for(var i = 0; i < this.pattern.details.length; i++){
        fill(255,0,0,10);
          this.pattern.details[i].size *= 2.5;
          ellipse(this.pattern.details[i].center.x, this.pattern.details[i].center.y, this.pattern.details[i].size,this.pattern.details[i].size);
          this.pattern.checkDetails();
          this.pattern.details[i].size /= 2.5;
      }
      this.pattern.drawOverlappingDetails();


      break;
    }
    case 17:{
      background(107, 186, 237);
      background(255);
      this.init();
      var max = 15;
      var p =[];
      this.pattern.details = [];
      for(var i = 0; i <max; i++ ){
        p[i] = createVector(random(width), random(height));

      }
      for(var i = 0; i < max; i++){
        var end = p[i].copy();
        end.add(random(-100,100), random(0,height));
        var stem = new Stem(p[i] , end, 10);
        append(this.pattern.details, stem);
        stem.style(1);
        stem.draw();

      }
      for(var i = 0; i < this.pattern.details.length; i++){

          this.pattern.checkDetails();
      }
      this.pattern.drawOverlappingDetails();
      for(var i = 0; i < max; i++){
        var leaves = new Leaves(this.pattern.details[i].begin[0] ,this.pattern.details[i].end[0], 10);
        append(this.pattern.details, leaves);
        leaves.style(2);
        leaves.draw();

      }
      for(var i = 0; i < this.pattern.details.length; i++){

          this.pattern.checkDetails();
      }
      this.pattern.drawOverlappingDetails();

      for(var i = 0; i < max; i++){
        var tulip = new Tulip4(p[i], random(100,250), i+5, this.pattern.details[i].angle + (PI/2));
tulip.style(1);
        tulip.draw();
        append(this.pattern.details, tulip);
      }
      for(var i = this.pattern.details.length - 10; i < this.pattern.details.length; i++){

        fill(255,0,0,10);
        var oldsize = this.pattern.details[i].size
          this.pattern.details[i].size = oldsize*2;
          //ellipse(this.pattern.details[i].center.x, this.pattern.details[i].center.y, this.pattern.details[i].size,this.pattern.details[i].size);
          this.pattern.checkDetails();
          this.pattern.details[i].size =  oldsize;
      }
      this.pattern.drawOverlappingDetails();
//seeds
      this.init();
      this.pattern.details = [];
      for(var i = 0; i < 10; i++){
        var pos = createVector(random(width), random(height));
        var tulip = new Tulip4(pos, 100,app.randomInt(5), random(TWO_PI));
        tulip.style(6);
        tulip.showStructure(5);
        tulip.draw();
        // for(var t = 0; t<20; t++){
        //
        //   tulip.begin = app.posOnEllipse(tulip.control1, tulip.size/2 - (tulip.stage * 20), (tulip.size- (tulip.stage * 20))/2, 20, t);
        //   tulip.begin2 = app.posOnEllipse(tulip.control1, tulip.size/2 - (tulip.stage * 20), (tulip.size- (tulip.stage * 20))/2, 20, 10 + t);
        //   tulip.control2 = tulip.begin.copy();
        //   tulip.control2.y = tulip.control2.y + tulip.size/2;
        //
        //
        //   tulip.showStructure(5);
        //   tulip.draw();
        //
        //
        //
        // }
      }
      for(var i = this.pattern.details.length - 10; i < this.pattern.details.length; i++){
        var oldsize = this.pattern.details[i].size
          this.pattern.details[i].size = oldsize*2;
          this.pattern.checkDetails();
          this.pattern.details[i].size =  oldsize;
      }
      this.pattern.drawOverlappingDetails();

      break;
    }




  }
}
