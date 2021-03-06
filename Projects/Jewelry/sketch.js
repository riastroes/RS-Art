
"use strict";
var app;

function setup() {

    app = new App("Jewelry",800,800,"WEBGL");
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("rood-blauw.png,zebra1.jpg,eye.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          //app.pal.fromImage(app.images[1],10);
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
                background(app.pal.colors[1]);
                app.project.draw(0);
                app.runscene(0);
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
