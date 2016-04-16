

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
            app.scene = -1;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {
            case -1:{
                background(app.pal.colors[1]);
                app.pal.show();
                app.wait(50);
                break;
            }
            case 0:{
                background(app.pal.colors[1]);
                app.project.grid.show();
                app.wait(100);
                break;
            }

            case 1:{
                background(app.pal.colors[1]);
                app.project.grid.show();
                app.project.draw2();
                app.runscene(100);
                break;
            }
            case 2:{
              background(app.pal.colors[3]);
              //app.project.grid.show();
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 3:{
              app.project.change(1);
              app.project.draw();
              app.project.showControls();
              app.runscene(width-1);
              break;
            }
            case 4:{
              app.project.change(2);
              app.project.draw();
              //app.project.showControls();
              app.runscene(height-1);
              break;
            }
            case 5:{

              app.project.change(3);
              app.project.draw();
              app.project.showControls();
              app.runscene(width-1);
              break;
            }
            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(10, 80, false);


    }
    else{
        println("loading resources ...");
    }

}
