/**
 * Created by riastroes on 11-03-16.
 */
function Menu(strmenu){
    this.strmenu = strmenu;
    this.menu = this.strmenu.split(",");
    this.grid = new Grid(2,this.menu.length/2, width -(400 + 50), height-(100 +50));

    this.menuwidth = 200;
    this.menuheight = 50;
    this.selected = "";

}

Menu.prototype.draw = function(){
    var x, y, i = -1;
    background(app.pal.colors[1]);

    for(y = 0; y < this.grid.rows; y++){

        for(x = 0; x < this.grid.cols; x++){
            i++;
            app.style.set(app.pal.colors[0], app.pal.imgcolors[0], 1, CENTER);
            rect(this.grid.pos[x][y].x, this.grid.pos[x][y].y, this.menuwidth, this.menuheight);
            app.style.text(16,CENTER,app.pal.colors[0]);
            text(this.menu[i],this.grid.pos[x][y].x, this.grid.pos[x][y].y+5);
            app.style.reset();
        }
    }

};
Menu.prototype.reset = function() {
    app.style.reset();
};
Menu.prototype.isclicked = function(){
    var index;
    if(mouseIsPressed){
        for(index in this.menu){
            if(this.menu.hasOwnProperty(index)){
                if(abs(mouseX - this.grid.get(index).x) < (this.menuwidth/2) && abs(mouseY - this.grid.get(index).y) < (this.menuheight/2)){
                    this.selected = this.menu[index];
                }
            }
        }

    }
};