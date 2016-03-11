/**
 * Created by riastroes on 11-03-16.
 */
function Menu(){
    this.grid = new Grid(2,2, width -(400 + 50), height-(100 +50));
    this.strmenu = "Palette,Styles,Grid,Stopwatch";
    this.menu = this.strmenu.split(",");
    this.menuwidth = 200;
    this.menuheight = 50;
    this.selected = "";
}

Menu.prototype.draw = function(){
    var index, x, y;
    app.style.set(app.pal.colors[0], app.pal.imgcolors[0], 1, CENTER);
    app.style.text(16,CENTER,app.pal.colors[0]);

    for(index in this.grid){
        if(this.grid.hasOwnProperty(index)){
            x = this.grid.pos[index].x;
            y = this.grid.pos[index].y;
            rect(x, y, this.menuwidth, this.menuheight);
            text(this.menu[index],x, y);
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
                if(abs(mouseX - this.grid[index].pos.x) < (this.menuwidth/2) && abs(mouseY - this.grid[index].pos.y) < (this.menuheight/2)){
                    this.selected = this.menu[index];
                }
            }
        }

    }
};