x = findMax( 1, 123, 500, 44, 88);

function findMax(){
    var i;
    var max = -Infinity;
    for (i = 0; i <arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}