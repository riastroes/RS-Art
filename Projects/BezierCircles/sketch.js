

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
            app.scene = 4;
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
              app.runscene(600);
              break;
            }
            case 3:{
              app.runscene(200);
              break;
            }
            case 4:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 5:{
              app.project.change(2);
              app.project.draw(0,0);
              app.runscene(155);
              break;
            }
            case 6:{
              app.runscene(200);
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
