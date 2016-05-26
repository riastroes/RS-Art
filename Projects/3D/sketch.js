
"use strict";
var app;

function setup() {

    app = new App("TEMPLATE",800,800,WEBGL);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png, noc0.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 0;
      }
      else{
        switch(app.scene) {
          case 0:{
               //primatives
                app.project.draw(0);
                app.runscene(200);
                break;
              }
          case 1:{
               //primatives
               background(255);
                app.project.draw(1);
                app.runscene(1000);
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
