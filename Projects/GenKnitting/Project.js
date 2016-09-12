/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Generate Knitting by Ria Stroes";

}

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 5;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 2;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Project.prototype.showText = function(){
  textSize(12);
  textFont("Courier");
  this.style(0);
  text(this.text,width-220,height-25);
  this.style(1);
  text(this.text,width-220,height-25);
}


Project.prototype.run = function(nr){

  //testset
  var test =[];
  var tempbed = 70;       append(test, ";tempbed = " + tempbed);
  var tempextruder = 210; append(test, ";tempextruder = " + tempextruder);
  var nozzle = 0.4;       append(test, ";nozzle = " + nozzle);
  var firstlayerheight= 0.27; append(test, ";firstlayerheight = " +firstlayerheight);
  var layerheight = 0.3;  append(test, ";layerheight = " +layerheight);
  var speed = 2400;       append(test, ";speed = " + speed);
  var outlinerounds = 10; append(test, ";outlinerounds = "+ outlinerounds);
  var outlinerounddist = 4; append(test, ";outlinerounddist = " + outlinerounddist);
  var maxlayers = 5; append(test, ";maxlayers = " + maxlayers);


  switch(nr){

    //generate knitting
    case 0:{
      //three stitches
      background(255);
      fill(0);
      textSize(18);
      text("test0.gcode, press c", 100,50);
      text("case 1:Only the heading", 100,80);
      var posdrawing = createVector(100,140);
      var posprinting = createVector(100,100);
      this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
      this.knitting.createRowLR(3); //pos, stitches

      this.knitting.draw(posdrawing);
      this.knitting.genKnitting(posprinting, 0.1);
      //create gcode, only the heading
      this.gcode = new Gcode();
      this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
      this.gcode.moveToStart(this.knitting.knitting[0].x, this.knitting.knitting[0].y, firstlayerheight, speed);
      this.gcode.createEnd();
      break;
    }
    case 1:{

      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test0.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 2:{
      //draw 3 stitches ,one outline and generate gcode
      background(255);
      fill(0);
      textSize(18);
      text("test1.gcode, press c", 100,50);
      text("case 3:Three stitches, one outline", 100,80);

      var posdrawing = createVector(100,140);
      var posprint = createVector(100,100);
      var posshowprint = createVector(0,400);
      this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
      this.knitting.createRowLR(3);
      this.knitting.draw(posdrawing);
      this.knitting.genKnitting(posprint,0.1);//position, scale
      this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale

      //one outline;
      this.outline = new Outline(this.knitting.knitting);
      this.outline.createOutline(30,6,outlinerounds,outlinerounddist);//marge,cornersteps,size,step
      this.outline.drawOutline(posdrawing);
      this.outline.genOutline(posprint,0.1);//position, scale
      this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
        //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
      this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting, nozzle, firstlayerheight, speed);
      this.gcode.createEnd();
      break;
    }
    case 3:{

      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test1.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 4:{
      //draw 3 stitches, 10 outlines en genrate gcode
      background(255);
      fill(0);
      textSize(18);
      text("test2.gcode, press c", 100,50);
      text("case 5: Three stitches, ten outlines", 100,80);
      var posdrawing = createVector(100,140);
      var posprint = createVector(80,120);
      var posshowprint = createVector(100,500);
      this.showBed(posshowprint,0.2);//position, scale
      this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
      this.knitting.createRowLR(3);//scale
      this.knitting.draw(posdrawing);
      this.knitting.genKnitting(posprint,0.1);//position, scale
      this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale
      //ten outlines;
      this.outline = new Outline(this.knitting.knitting);
      this.outline.createOutline(30,6,outlinerounds,outlinerounddist); //marge,cornersteps,size,step
      this.outline.drawOutline(posdrawing);
      this.outline.genOutline(posprint,0.1);//position, scale
      this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
      this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting, nozzle, firstlayerheight, speed);
      this.gcode.createEnd();
      break;
    }
    case 5:{


      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test2.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 6:{
      // draw pattern, ten outlines and generate gcode
      background(255);
      fill(0);
      textSize(18);
      text("test3.gcode, press c", 100,50);
      text("case 7: pattern 4", 100,80);

      var posdrawing = createVector(100,540);
      var posprint = createVector(80,120);
      var posshowprint = createVector(100,700);
      this.showBed(posshowprint,2);//position, scale
      this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
      this.knitting.createPattern(4);
      this.knitting.draw(posdrawing);
      this.knitting.genKnitting(posprint,210/2000);//position, scale
      this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale
      //ten outlines;
      this.outline = new Outline(this.knitting.knitting);
      this.outline.createOutline(30,6,outlinerounds,outlinerounddist); //marge,cornersteps,size,step
      this.outline.drawOutline(posdrawing);
      this.outline.genOutline(posprint,210/2000);//position, scale
      this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(tempextruder, tempbed,test); //temperature extruder, temperature bed
      this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting, nozzle, firstlayerheight, speed);

      this.gcode.createEnd();
      break;
    }
    case 7:{

      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test3.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 8:{
      // draw pattern, ten outlines and generate gcode, very small
      background(255);
      fill(0);
      textSize(18);
      text("test4.gcode, press c", 100,50);
      text("case 9: Pattern 5", 100,80);

      var posdrawing = createVector(100,340);
      var posprint = createVector(10,50);
      var posshowprint = createVector(100,440);
      this.showBed(posshowprint,2);//position, scale
      this.knitting = new Knitting(40,80); //stitchwidth, stitchheight
      this.knitting.createPattern(5);
      this.knitting.draw(posdrawing);
      this.knitting.genKnitting(posprint,220/2000);//position, scale
      this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale
      //ten outlines;
      this.outline = new Outline(this.knitting.knitting);
      this.outline.createOutline(30,6,outlinerounds,outlinerounddist); //marge,cornersteps,size,step
      this.outline.drawOutline(posdrawing);
      this.outline.genOutline(posprint,220/2000);//position, scale
      this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
      this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting, nozzle, firstlayerheight, speed);
      var z = layerheight;
      for(var l=0; l<maxlayers; l++){
        z += layerheight;
        this.gcode.createNextLayer(this.knitting.genknitting, nozzle, layerheight,z,speed);
      }
      this.gcode.createEnd();
      break;
    }
    case 9:{


      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test4.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }

  case 10:{
    //draw 3 stitches ,one outline and generate gcode
    //test thickness of print in one layer
    background(255);
    fill(0);
    textSize(18);
    text("test5.gcode, press c", 100,50);
    text("case 11: Thickness of print in one layer", 100,80);

    var posdrawing = createVector(100,200);
    var posprint = createVector(100,100);
    var posshowprint = createVector(0,400);
    this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
    this.knitting.createRowLR(3);
    this.knitting.draw(posdrawing);
    this.knitting.genKnitting(posprint,0.1);//position, scale
    this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale

    //one outline;
    this.outline = new Outline(this.knitting.knitting);
    this.outline.createOutline(30,6,outlinerounds,outlinerounddist);//marge,cornersteps,size,step
    this.outline.drawOutline(posdrawing);
    this.outline.genOutline(posprint,0.1);//position, scale
    this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
    this.gcode = new Gcode();
    this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
    this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting, nozzle, firstlayerheight, speed);
    this.gcode.createEnd();
    break;
  }
  case 11:{


    if (keyIsPressed === true){
      if(key === 'c'){
        this.gcode.save("test5.gcode");
      }
      keyIsPressed =false;
      return false;
    }
    break;
  }
  case 12:{
    //draw 3 stitches ,one outline and generate gcode
    //test thickness of print in one layer
    background(255);
    fill(0);
    textSize(18);
    text("test6.gcode, press c", 100,50);
    text("case 13: Test two-four layers, without crossing", 100,80);

    var posdrawing = createVector(100,200);
    var posprint = createVector(100,100);
    var posshowprint = createVector(0,400);
    this.knitting = new Knitting(90,180); //stitchwidth, stitchheight
    this.knitting.createRowLR(3);
    this.knitting.draw(posdrawing);
    this.knitting.genKnitting(posprint,0.1);//position, scale
    this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale

    //one outline;
    this.outline = new Outline(this.knitting.knitting);
    this.outline.createOutline(30,6,outlinerounds,outlinerounddist);//marge,cornersteps,size,step
    this.outline.drawOutline(posdrawing);
    this.outline.genOutline(posprint,0.1);//position, scale
    this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
    this.gcode = new Gcode();
    this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
    this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting,nozzle, firstlayerheight, speed);//
    var z = layerheight;
    for(var l=0; l<maxlayers; l++){
      z += layerheight;
      this.gcode.createNextLayer(this.knitting.genknitting,nozzle, layerheight,z,speed);
    }
    this.gcode.createEnd();
    break;
  }
  case 13:{

    if (keyIsPressed === true){
      if(key === 'c'){
        this.gcode.save("test6.gcode");
      }
      keyIsPressed =false;
      return false;
    }
    break;
  }
  case 14:{
    //draw 2 rows
    //test crossing lines
    background(255);
    fill(0);
    textSize(18);
    text("test7.gcode, press c", 100,50);
    text("case 15: Two rows, Test crossing lines", 100,80);

    var posdrawing = createVector(100,500);
    var posprint = createVector(50,100);
    var posshowprint = createVector(0,500);
    this.knitting = new Knitting(45,90); //stitchwidth, stitchheight
    this.knitting.createPattern(6);
    this.knitting.draw(posdrawing);
    this.knitting.genKnitting(posprint,0.1);//position, scale
    this.knitting.showGenKnitting(this.knitting.genknitting,posshowprint, 2); //scale

    //one outline;
    this.outline = new Outline(this.knitting.knitting);
    this.outline.createOutline(30,6,outlinerounds,outlinerounddist);//marge,cornersteps,size,step
    this.outline.drawOutline(posdrawing);
    this.outline.genOutline(posprint,0.1);//position, scale
    this.outline.showGenOutline(this.outline.genoutline,posshowprint, 2); //scale
      //create gcode
    this.gcode = new Gcode();
    this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
    this.gcode.createFirstLayer(this.outline.genoutline, this.knitting.genknitting,nozzle, firstlayerheight, speed);//z, speed
    this.gcode.createEnd();
    break;
  }
  case 15:{


    if (keyIsPressed === true){
      if(key === 'c'){
        this.gcode.save("test7.gcode");
      }
      keyIsPressed =false;
      return false;
    }
    break;
  }
  case 16:{
    background(255);
    break;

  }
  case 20:{
    background(255);
    fill(0);
    textSize(18);
    text("test8.gcode, press c", 100,50);
    text("case 20: TEST straight LINES", 100,80);

    var posdrawing = createVector(100,200);
    var posprint = createVector(100,100);
    var posshowprint = createVector(100,350);
    this.showBed(posshowprint,0.1);//position, scale
    this.test = new Test();
    this.test.createLines();
    this.test.draw(posdrawing,1);
    this.test.genTestLines(posprint,0.1);//position, scale
    this.test.showGenTest(this.test.gentest,posshowprint, 1); //scale
    //create gcode
    this.gcode = new Gcode();
    this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
    this.gcode.testLayer(this.test.gentest, nozzle, firstlayerheight, speed);//z, speed
    this.gcode.createEnd();
    break;

  }
  case 21:{
    if (keyIsPressed === true){
      if(key === 'c'){
        this.gcode.save("test8.gcode");
      }
      keyIsPressed =false;
      return false;
    }
    break;

  }
  case 22:{
    background(255);
    fill(0);
    textSize(18);
    text("test9.gcode, press c", 100,50);
    text("case 22: TEST straight LINES with retreat", 100,80);

    var posdrawing = createVector(100,200);
    var posprint = createVector(100,100);
    var posshowprint = createVector(100,350);
    this.showBed(posshowprint,0.1);//position, scale
    this.test = new Test();
    this.test.createLines();
    this.test.draw(posdrawing,1);
    this.test.genTestLines(posprint,0.1);//position, scale
    this.test.showGenTest(this.test.gentest,posshowprint, 1); //scale
    //create gcode
    this.gcode = new Gcode();
    this.gcode.createHeading(tempextruder, tempbed, test); //temperature extruder, temperature bed
    this.gcode.testLayer1(this.test.gentest, nozzle, firstlayerheight, speed);//z, speed
    this.gcode.createEnd();
    break;

  }
  case 23:{
      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test9.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
  }
}
Project.prototype.showBed = function(pos, pscale){
  push();
  translate(pos.x , pos.y);
  scale(pscale);
  line(0,0, 2100,0);
  line(2100,0, 2100, 2100);
  line(2100, 2100,0,2100);
  line(0,2100,0,0);
  pop();
}
