/**
 * Created by Ria Stroes on 10-3-2016.
 */

function Stopwatch(){
    this.starttime = 0;
    this.now = 0;
    this.stoptime = 0;
    this.duration = 0;
    this.status = "";
}
Stopwatch.prototype.start = function(duration){
    this.starttime = this.getTimeInSeconds();
    this.duration = duration;
    this.status = "STARTED";
};
Stopwatch.prototype.check = function(){
    if(this.status == "STARTED") {
        this.now = this.getTimeInSeconds();
        if (this.starttime + this.duration == this.now) {
            this.stop();
        }
    }
};
Stopwatch.prototype.stop = function(){
    this.stoptime = this.getTimeInSeconds();
    this.status = "STOPPED";
};
Stopwatch.prototype.getTimeInSeconds = function(){
    return (hour()*60*60) + (minute()* 60) + second();
};
