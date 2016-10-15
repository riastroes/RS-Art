
"use strict";
var app;

function setup() {

    app = new App("Curtains with holes 2",540,540, "svg");
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("mosterd.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[0],5);
          app.pal.sortImgColors();
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 0;
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
                background(255);
                app.project.draw();
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
        //app.gifmaker.check(1, 160, false);



    }
    else{
        println("loading resources ...");
    }

}
