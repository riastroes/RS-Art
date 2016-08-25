
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
        app.scene = -1;
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
              app.project.init();
              app.runscene(0);
              break;
            }
            case 1:{
              background(255);
              app.project.run(0);
              app.runscene(0);
              break;
            }
            case 2:{
              //gcode genereren
              app.project.run(1);
              app.runscene(0);
              break;
            }
            case 3:{
              //save gcode
              app.project.run(2);
              app.runscene(200);
              break;
            }
            case 4:{
              //create and draw outline
              app.project.run(3);
              app.runscene(0);
              break;
            }
            case 5:{
              //gcode genereren
              app.project.run(4);
              app.runscene(0);
              break;
            }
            case 6:{
              //save gcode
              app.project.run(5);
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
