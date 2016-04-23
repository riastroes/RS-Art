

var app;

function setup() {

    app = new App("Beziers",850,850);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.scene = 2;
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
                app.wait(50);
                break;
            }

            case 1:{
                background(app.pal.colors[1]);
                // app.project.grid.show();
                // app.project.draw2();
                app.runscene(100);
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
              app.project.draw(0,10);
              //app.project.showControls();
              app.runscene(376);
              break;
            }
            case 4:{

              app.project.construct();
              app.runscene(0);
              break;
            }
            case 5:{
              app.project.change(2);
              app.project.draw(width/4,10);
              //app.project.showControls();
              app.runscene(376);
              break;
            }
            case 6:{

              app.project.construct();
              app.runscene(0);
              break;
            }
            case 7:{
              app.project.change(3);
              app.project.draw(width/4*2,10);
              //app.project.showControls();
              app.runscene(376);
              break;
            }
            case 8:{

              app.project.construct();
              app.runscene(0);
              break;
            }
            case 9:{
              app.project.change(4);
              app.project.draw(0,(height/3)-10);
              //app.project.showControls();
              app.runscene(376);
              break;
            }
            case 10:{

              app.project.construct();
              app.runscene(0);
              break;
            }
            case 11:{
              app.project.change(5);
              app.project.draw(width/4,(height/3)-10);
              app.runscene(376);
              break;
            }
            case 12:{
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 13:{
              app.project.change(6);
              app.project.draw(width/4*2,(height/3)-10);
              app.runscene(376);
              break;
            }
            case 14:{
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 15:{
              app.project.change(7);
              app.project.draw((width/4*3) - 10,10);
              app.runscene(376);
              break;
            }
            case 16:{
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 17:{
              app.project.change(8);
              app.project.draw((width/4*3) - 10,(height/3)-10);
              app.runscene(376);
              break;
            }
            case 18:{
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 19:{
              app.project.change(9);
              app.project.draw((width/4*3) - 10,(height/3 *2)-10);
              app.runscene(376);
              break;
            }
            case 20:{
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 21:{
              app.project.change(10);
              app.project.draw((width/4*2),(height/3 *2)-10);
              app.runscene(376);
              break;
            }

            
            case 26:{

              app.runscene(0);
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
