findPi = function(n) {
    var n = prompt("enter a number from 0 to 20");
    return Math.PI.toFixed(n);
};

findE = function(n) {
    var n = prompt("enter a number from 0 to 20");
    return Math.E.toFixed(n);
};

findFib = function() {
    var n = prompt("enter a number");
    var sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;

    for (var i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    if (n = 0) {
        return sequence;
    } else {
        return sequence.slice(0, i);
    }
};

primeFactor = function() {
    var number = prompt("select number to find prime factors of");
    for (var i = 0; i <= number; i++) {
        if (number % i === 0) {
            console.log(i + "myk");
            console.log (i + " is prime factor no. " + i + ".");
        }
        //  console.log(i);
        var answer = prompt("search for next factor?");
        switch (answer) {
            case "yes":
                for (var j = 0; j <= number; j++) {
                    if (number % j === 0) {
                        console.log(j + "myk");
                        console.log( j + " is really prime factor no. " + j + ".");
                    }
                }
            case "no":
                console.log ("ok");
            default:
                console.log ("spoko");
        }
    }
};
