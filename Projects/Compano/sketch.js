
"use strict";
var app;

function setup() {

    app = new App("Compano",2000,1000);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "friesland"){
          app.palblue = new Palette(10, "blue");
          app.pal = new Palette(11,"friesland");
          //app.pal.fromImage(app.images[1],10);
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
              app.palblue.show(100);
              app.wait(50);
              break;
            }
            case 0:{
               //
                app.project.run(0);
                app.runscene(0);
                break;
              }
            case 1:{
               //
                app.project.run(1);
                app.runscene(200);
                break;
              }
            case 2:{
               //
                app.project.run(2);
                app.runscene(0);
                break;
              }
            case 3:{
               //
                app.project.run(3);
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
