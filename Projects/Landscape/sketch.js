

var app;

function setup() {

    app = new App("Beziers",540,540);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.scene =0;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {

            case 0:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.wait(50);
              break;
            }
            case 1:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 2:{
              app.project.change(1);
              app.project.draw(0,0);
              app.project.showControls(0,0);
              app.runscene(233);
              //app.project.showBeginEnd(0,0);
              break;
            }
            case 3:{
              app.wait(50);
              app.project.showControls(0,0);
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
