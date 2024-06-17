
function Microwave (){
    this.powerLevel = 5;
    this.timer = 0;
    this.isRunning = false;
    

    //method to set the power between 1 and 10
    //if goes outside the range, set to default 5
    this.setPowerLevel = function(level){
        if(level > 10 || level < 1){
            this.powerLevel = 5;
        } else {
            this.powerLevel = level;
        }
    }

    //method to add timer in seconds
    //should be able to add time in both running and not running state
    this.addTimer = function(seconds) {
        this.timer += seconds;
    }

    //method to start the microwave
    //when the microwave is started
    //the timer should decrease by 1 for each second
    //when the timer reaches to 0, microwave shoud stop
    //effectively setting isRunning to false
    //microwave should start only when it has timer > 0 and is not in the running state

    this.start = function(){
        //if the microwave is not in the running state and timer is not zero, it can start
        if (!this.isRunning && this.timer > 0){
            //microwave can start
            //microwave should only run for specified time and come to stop effectively setting isRunning to false
            this.isRunning = true;
            let startedTime = Math.floor((Date.now())/1000);
            const tick = async () => {
                let currentTime = Math.floor((Date.now())/1000);
                let elapsedTime = currentTime - startedTime;
                if(elapsedTime <= this.timer){
                    this.timer = this.timer -elapsedTime
                    console.log("Is Running?", currentTime - startedTime)
                    setTimeout(tick, 1000);
                } else {
                    this.timer = 0;
                    this.isRunning = false;
                }
            }
            tick();
        }
    }

    //method to stop the microwave from running
    this.stop = function(){
        if(this.isRunning){
            this.timer = 0;
            this.isRunning = false;
        } else {
            console.log("it is already in the stop state")
        }
    }

    //method to reset the settings
    this.reset = function(){
        this.timer =0;
        this.isRunning = false;
        this.powerLevel = 5;
    }

    //method to get status
    this.getStatus = function (){
        const status = `PowerLevel: ${this.powerLevel} Timeleft: ${this.timer} Running:${this.isRunning ? "Yes" : "No"}`
        console.log(status)
    }
}





const myMicrowave = new Microwave();
myMicrowave.addTimer(30);
myMicrowave.start();
setTimeout(() => {
    myMicrowave.addTimer(10)
    myMicrowave.getStatus();
    setTimeout(() => {
        myMicrowave.stop();
        myMicrowave.getStatus();
    },20000)
}, 15000)