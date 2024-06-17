// constructor function for the Slider
// we are creating a Slider
// we need a constructor
function Slider (value, min, max) {
    
    this.value = value;
    this.min = min;
    this.max = max;

    //methods
    this.setValue = function (newValue) {
        if(newValue > this.max){
            this.value = this.max
        } else if (newValue < this.min){
            this.value = this.min
        } else {
            this.value = newValue
        }
    };

    this.getValue = function (){
        return this.value;
    };

    this.increase = function(step) {
        //increase if the step does not increase the max
        if ((this.value + step) < this.max){
            this.value += step
        } else {
            this.value = this.max
        }
    }

    this.decrease = function(step){
        //if decreasing by the given step, does not go below min, then decrease
        if ((this.value - step) < this.min){
            this.value -= step
        } else {
            this.value = this.min;
        }
    }
}

//use of constructor
const mySlider = new Slider(3,1,5);

//setting value
mySlider.setValue(4)

//increasing step by 1
mySlider.increase(1)

//decreasing step by 2
mySlider.decrease(2)

//getting value
mySlider.getValue()

