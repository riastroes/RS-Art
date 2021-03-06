
"use strict";
var app;

function setup() {

    app = new App("Feathers",windowWidth, windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("rood-geel-blauw.png");
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
        frameRate(1);
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(1);
              break;
            }
            case 0:{
               //

               background(255);

               app.project.init();
               app.runscene(0);
               break;
             }
             case 1:{
               app.project.draw(0);
               app.runscene(8500);
               break;
             }
             case 2:{
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
        app.gifmaker.check(20, 80, false);



    }
    else{
        println("loading resources ...");
    }

}
