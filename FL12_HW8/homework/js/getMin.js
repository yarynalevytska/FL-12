function getMin() {
    let min = arguments[0];
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log(min);
}

getMin(2, 4, -5, 0, 8);