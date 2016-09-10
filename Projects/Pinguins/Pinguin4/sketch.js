
"use strict";
var app;

function setup() {

    app = new App("Pinguins",3840,720,SVG);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("coolcolors.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(8, "beautiful");
          app.pal.fromImage(app.images[0],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = -1;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.imgcolors[0]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
                background(255);
                app.project.update();
                app.project.run(0);
                app.runscene(1);
                break;
              }
            case 1:{
                background(255);
                app.project.run(0);
                app.wait(200);
                break;
              }
            case 2:{
                background(255);
                app.project.update();
                app.runscene(1);
                break;
              }
            case 3:{
                background(255);
                app.project.draw(1);
                app.wait(200);
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
