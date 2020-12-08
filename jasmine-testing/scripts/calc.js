Calculator = function(){
    this.value = 0;
}

Calculator.prototype.add = function(number){
    if (typeof(number) == "number") {
        this.value += number;
    } else { 
        alert("Error!");
    }
}

Calculator.prototype.sub = function(number){
    if (typeof(number) == "number") {
        this.value -= number;
    } else { 
        alert("Error!");
    }
}

/*Calculator.prototype.mul = function(numOne, numTwo){
    if (typeof(numOne) == "number" && typeof(numTwo) == "nummber") {
        return numOne * numTwo;
    } else { 
        alert("Error!");
    }
} */