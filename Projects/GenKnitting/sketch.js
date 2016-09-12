
"use strict";
var app;

function setup() {

    app = new App("Knitting",2000,2000,SVG);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("coolcolors.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[0],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 20;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
              //three stitches
              app.project.run(0);
              app.runscene(0);
              break;
            }
            case 1:{
              //save gcode
              app.project.run(1);
              app.runscene(200);
              break;
            }
            case 2:{
              //three stitches and one outline
              app.project.run(2);
              app.runscene(0);
              break;
            }
            case 3:{
              //save gcode
              app.project.run(3);
              app.runscene(200);
              break;
            }
            case 4:{
              //create and draw 10 outlines
              app.project.run(4);
              app.runscene(0);
              break;
            }
            case 5:{
              //save gcode
              app.project.run(5);
              app.runscene(200);
              break;
            }
            case 6:{
              //create pattern 4
              app.project.run(6);
              app.runscene(0);
              break;
            }
            case 7:{
              //save gcode
              app.project.run(7);
              app.runscene(200);
              break;
            }
            case 8:{
              //create pattern 5
              app.project.run(8);
              app.runscene(0);
              break;
            }
            case 9:{
              //save gcode
              app.project.run(9);
              app.runscene(200);
              break;
            }
            case 10:{
              //test thickness line
              app.project.run(10);
              app.runscene(0);
              break;
            }
            case 11:{
              //save gcode
              app.project.run(11);
              app.runscene(200);
              break;
            }
            case 12:{
              //test two-four layers, without crossing
              app.project.run(12);
              app.runscene(0);
              break;
            }
            case 13:{
              //save gcode
              app.project.run(13);
              app.runscene(200);
              break;
            }
            case 14:{
              //test two layers, without crossing
              app.project.run(14);
              app.runscene(0);
              break;
            }
            case 15:{
              //save gcode
              app.project.run(15);
              app.runscene(200);
              break;
            }
            case 20:{
              //test streight lines
              app.project.run(20);
              app.runscene(0);
              break;
            }
            case 21:{
              //save gcode
              app.project.run(21);
              app.runscene(200);
              break;
            }
            case 22:{
              //test streight lines and retreat filament
              app.project.run(22);
              app.runscene(0);
              break;
            }
            case 23:{
              //save gcode
              app.project.run(23);
              app.runscene(200);
              break;
            }
            default:{
                //wait
                app.wait();
            }
          }
        }

        app.info.show();
        //function(skip, maxframes, show)
        app.gifmaker.check(1, 160, false);



    }
    else{
        println("loading resources ...");
    }

}
