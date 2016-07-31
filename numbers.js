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

// Find Cost of Tile to Cover W x H Floor - Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.

calculateTile = function(width, height) {
  var cost = prompt("enter cost per sq meter", "");

  return (cost * width * height) + " dollars";
}

//Change Return Program - The user enters a cost and then the amount of money given. The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.

changeReturn = function() {
  var cost = prompt("enter cost", "");
  var total = prompt("how much money did you give?", "");
  var diff = total - cost;

  

  // var money = {
  //   50: "50 groszy",
  //   20: "20 groszy",
  //   10: "10 groszy",
  //   5: "5 groszy",
  //   2: "2 grosze",
  //   1: "1 grosz"
  // }
}
