

var app;

function setup() {

    app = new App("tulips 5",1600,4800,SVG);
    app.resourcepath ="resources";
    app.loadResources("signature.png, blauw-paars.jpg, groene-bladeren.jpg");

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "beautiful"){
            app.pal = new Palette(7, "beautiful");

        }
        if(app.isnot(app.project)){
          app.project = new Project();
          app.scene = 0;
        }

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
               app.project.drawLeaves(0);
               app.project.drawFlowers(0);
               app.project.drawFlowers(1);
               app.project.drawFlowers(2);
               //app.project.drawSeads(0);
               app.wait(1000);
                break;
            }




      default:{
          //wait
          app.wait();
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
