
"use strict";
var app;

function setup() {

    app = new App("Landscape2",windowWidth, windowHeight, "svg");
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("blauwen.png, groenen.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(0, "beautiful");
          app.pal1 = new Palette(0, "beautiful");
          app.pal2 = new Palette(0, "beautiful");
          app.pal1.fromImage(app.images[0],5);
          app.pal2.fromImage(app.images[1],5);
          app.pal1.sortImgColors();
          app.pal2.sortImgColors();
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 0;
      }
      else{
        switch(app.scene) {
          case -1:{
            background(app.pal.colors[1]);
            app.pal1.showImgColors(-80);
            app.pal2.showImgColors(-30);
            app.wait(50);
            break;
          }

            case 0:{
               //
                background(255);
                app.project.init(10,2);
                app.project.draw(0);
                app.wait(200);
                break;
              }
            case 1:{
              app.scene = 0;
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
