//liczebniki
var units = [
    [0, ""],
    [1, "jeden"],
    [2, "dwa"],
    [3, "trzy"],
    [4, "cztery"],
    [5, "pięć"],
    [6, "sześć"],
    [7, "siedem"],
    [8, "osiem"],
    [9, "dziewięć"]
];
var tens = [
    [0, "dziesięć"],
    [1, "jedenaście"],
    [2, "dwanaście"],
    [3, "trzynaście"],
    [4, "czternaście"],
    [5, "piętnaście"],
    [6, "szesnaście"],
    [7, "siedemnaście"],
    [8, "osiemnascie"],
    [9, "dziewiętnaście"]
];
var decimals = [
    [0, ""],
    [1, ""],
    [2, "dwadzieścia"],
    [3, "trzydzieści"],
    [4, "czterdzieści"],
    [5, "pięćdziesiąt"],
    [6, "sześćdziesiąt"],
    [7, "siedemdziesiąt"],
    [8, "osiemdziesiąt"],
    [9, "dziewięćdziesiąt"]
];
var hundreds = [
    [0, ""],
    [1, "sto"],
    [2, "dwieście"],
    [3, "trzysta"],
    [4, "czterysta"],
    [5, "pięćset"],
    [6, "sześćset"],
    [7, "siedemset"],
    [8, "osiemset"],
    [9, "dziewięćset"]
];
var thousands = [
    [0, "tysiąc"],
    [1, "tysiące"],
    [2, "tysięcy"]
];
var millions = [
    [0, "milion"],
    [1, "miliony"],
    [2, "milionow"]
];
var zloty = [
    [0, "zloty"],
    [1, "zlote"],
    [2, "zlotych"]
];
var grosz = [
    [0, "grosz"],
    [1, "grosze"],
    [2, "groszy"]
];

// translateValue = function() {
//   'use strict';
//   var value = prompt("Podaj kwotę", "");
//
//   var divide = value.split(",");
//   var pln = divide[0];
//   var gr = divide[1];
//
//   var muchPln = pln.length;
//   var muchGr = gr.length;
//
//   var arrPln = pln.split("");
//   var arrGr = gr.split("");
//
//   var grTxt = grosz[2][1];
//   var plnTxt = zloty[2][1];
//   var sumPln = "";
//   var sumGr = "";
//
//
//
// }

moneyText = function(tablicaSlownik) {
    'use strict';
    var value = prompt("Podaj kwotę", "");

    var divide = value.split(",");
    var pln = divide[0];
    var gr = divide[1];

    var muchPln = pln.length;
    var muchGr = gr.length;

    var arrPln = pln.split("");
    var arrGr = gr.split("");

    var grTxt = grosz[2][1];
    var plnTxt = zloty[2][1];
    var sumPln = "";
    var sumGr = "";

    if (muchGr == 0) { //jesli nie ma podanych groszy
        sumGr = "";
        grTxt = "";
    }
    if (arrGr[0] == 0 && arrGr[1] == 1) {
        var sumGr = units[arrGr[1]][1] + " " + grosz[0][1];
    }
    if (arrGr[0] == 1) {
        var sumGr = tens[arrGr[1]][1] + " " + grosz[2][1];
    }
    if (arrGr[0] > 1) {
        if (arrGr[0] == 0 && arrGr[1] == 1) { //grosz
            grTxt = grosz[0][1];
        }
        if (arrGr[1] <= 1 || arrGr[1] >= 5) { //groszy
            grTxt = grosz[2][1];
        }
        if (arrGr[1] > 1 && arrGr[1] < 5) {
            grTxt = grosz[1][1]; //grosze
        }
        var sumGr = decimals[arrGr[0]][1] + " " + units[arrGr[1]][1] + " " + grTxt;
    }

    //plny
    for (var i = 0; i < muchPln; i += 3) {

        if (arrPln[muchPln - 1] == 0 || arrPln[muchPln - 1] >= 5 || (muchPln != 1 && arrPln[muchPln - 1] == 1)) { //zlotych
            plnTxt = zloty[2][1];
        }
        if (muchPln == 1 && arrPln[muchPln - 1] == 1) { //zloty
            plnTxt = zloty[0][1];
        }
        if (arrPln[muchPln - 1] > 1 && arrPln[muchPln - 1] < 5) {
            plnTxt = zloty[1][1]; //zlote
        }


        if (muchPln == 3) {
            if (arrPln[muchPln - 2] !== 1) {
                sumPln = hundreds[arrPln[muchPln - 3]][1] + " " + decimals[arrPln[muchPln - 2]][1] + " " + units[arrPln[muchPln - 1]][1] + " " + plnTxt;
            }
            if (arrPln[muchPln - 2] == 1) { //nascie zlotych
                sumPln = hundreds[arrPln[muchPln - 3]][1] + " " + tens[arrPln[muchPln - 1]][1] + " " + zloty[2][1];
            }
        }

        if (muchPln == 2) {
            if (arrPln[muchPln - 2] !== 1) {
                sumPln = decimals[arrPln[muchPln - 2]][1] + " " + units[arrPln[muchPln - 1]][1] + " " + plnTxt;
            }
            if (arrPln[muchPln - 2] == 1) { //nascie zlotych
                sumPln = tens[arrPln[muchPln - 1]][1] + " " + zloty[2][1];
            }
        }
        if (muchPln == 1) {
            sumPln = units[arrPln[muchPln - 1]][1] + " " + plnTxt;
        }
        if (muchPln == 0 || (muchPln == 1 && arrPln[muchPln - 1] == 0) || (muchPln == 2 && arrPln[0] == 0 && arrPln[1] == 0)) { //jesli nie podano zlotych
            sumPln = "";
            plnTxt = "";
        }

        //  sumPln = hundreds[[muchPln - 3]][1] + " " + decimals[[muchPln - 2]][1] + " " + units[arrPln[muchPln - 1]][1] + " " + plnTxt;
        // arrPln = arrPln.slice(muchPln - 3, muchPln);
        console.log(arrPln.slice(muchPln - 3 - i, muchPln - i));
        // return sumPln + " " + sumGr;


    }
};
