

var app;

function setup() {

    app = new App("tulips",900,900);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");


}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_red"){
            app.pal = new Palette(7, "black_red");
            app.scene =6;
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
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 3:{
              app.project.change(1);
              app.project.draw(0,0);
              app.runscene(141);
              break;
            }
            case 4:{
               background(app.pal.colors[1]);
               app.project.construct();
               app.runscene(0);
               break;
             }
             case 5:{
               app.project.change(1);
               app.project.draw(0,0);
               app.project.showControls(0,0);
               app.runscene(29);
               break;
             }
             case 6:{
                background(app.pal.colors[1]);
                app.project.construct();
                app.runscene(0);
                app.startSVG();
                break;
              }
              case 7:{
                app.project.change(2);
                app.project.draw2(0,0);
                app.runscene(1);
                break;
              }
              case 8:{
                app.saveSVG();
                app.runscene(0);
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
        if(app.exportSVG){
          app.saveSVG();
        }



    }
    else{
        println("loading resources ...");
    }

}
