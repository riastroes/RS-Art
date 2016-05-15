var app;

function setup() {

    app = new App("Blobber",windowWidth, windowHeight);
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg,flowers.jpg");

    //frameRate(5);

}

function draw() {

    if(app.isloaded) {
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(5);
            app.imgPalette(app.images[2],6,"spring");
        }
        if (app.isnot(app.big)){
            app.grid = new Grid(9,9,0,0,0,0);
            app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,300));


            if(app.isnot(app.l)){
                app.l = 0;
            }
            app.scene = 0;
        }


        switch(app.scene) {
            case 0:{

                background(255);
                app.big.live();
                app.big.draw();
                app.runscene(200);
                break;
            }
            case 1:{
                app.bg(5);

                app.big.live();
                app.big.rotate(0.01);
                app.big.draw();

                app.runscene(200);
                break;
            }
            case 2:{
                app.big = new BigBlobber(app.grid.maskAll());
                app.big.style(1);
                app.runscene(0);
                break;
            }
            case 3:{
                app.name = "full grid";
                app.big.live();
                app.big.rotate(0.01);
                app.big.draw1();
                app.runscene(200);
                break;
            }
            case 4:{
                background(0);
                app.name = "one flower";
                app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,50));
                app.big.style(0);
                app.runscene(0);
                break;
            }
            case 5:{
              app.bg(app.pal.colors[3]);



                app.big.grow(0.01);
                app.big.live();
                //app.big.rotate(0.01);
                app.big.draw();
                app.runscene(200);
                break;
            }
            case 6:{
                app.name ="lines on flower"
                app.bg(app.pal.tint(app.pal.randomImgColor()));

                app.big.grow(0.05);
                app.big.lines(app.l);
                app.l +=0.11;
                app.runscene(10);
                break;
            }
            case 7:{
                app.bg(app.pal.colors[3]);

                app.big.grow(-0.05);
                app.big.lines(app.l);
                app.l -=0.11;
                app.runscene(11);
                break;
            }
            case 8:{
               // frameRate(1);
                //app.big.grow(2);
                background(255)
                app.name = "one flower";
                app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,30));
                app.big.style(2);
                app.runscene(0);
                 break;
                }
            case 9:{
                // frameRate(1);
                app.bg(app.pal.colors[1]);
                app.big.grow(0.001);
                //app.big.split();
                app.big.draw();
                app.runscene(5);

                break;
            }
            case 10:{

                app.big.style(1);
                app.big.draw();
                app.big.lines(app.l);
                app.l +=1;
                app.runscene(20);
                break;
            }
            case 11:{

                app.big.draw();
                app.big.lines(app.l);
                app.l -=1;
                app.runscene(21);
                break;
            }
            case 12:{
                //app.big.grow(2);
                app.big.grow(-0.05);
                app.big.rotate(0.01);
                app.big.live();
                app.big.draw();
                app.runscene(200);

                break;
            }
            case 13:{
              background(255)
              app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,300));
              app.big.style(0);
              app.runscene(0);
                break;
            }
            case 14:{
              app.big.style(4);
                app.big.live();
                app.big.grow(-0.005);
                app.big.rotate(0.01);
                app.big.draw();
                app.runscene(500);
                break;
            }

          case 15:{
              background(0);
                app.name = "grid flower";
                app.grid = new Grid(6,4,0,0,0,0);
                app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,200));
                app.big.style(4);
                app.runscene(0);
                break;
            }
            case 16:{
                app.bg(100);
                app.big.live();
                app.big.rotate(0.02);
                app.big.draw();
                app.runscene(1000);
                break;
            }
            case 17:{
                background(0);
                app.name = "grid flower";
                app.grid = new Grid(6,4,0,0,0,0);
                app.big = new BigBlobber(app.grid.maskCircle(width/2, height/2,200));

                app.runscene(0);
                break;
            }
            case 18:{
                app.bg(app.pal.colors[1]);
                app.big.style(2);
                app.big.live();
                app.big.grow(-0.1);
                //app.big.split();
                app.big.rotate(0.1);
                app.big.draw();
                app.runscene(6);
                break;
            }
            case 19:{
                app.big.style(4);
                app.big.live();
                app.big.rotate(0.1);
                app.big.draw();
                app.runscene(200);
                break;
            }


            default:{
                //wait
                app.wait();
            }



        }
        app.info.add("Blobbers:" +  app.big.blobbers.length);
        app.info.show();
        app.gifmaker.check(1, 50, false);


    }
    else{
        println("loading resources ...");
    }

}
