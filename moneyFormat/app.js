'use strict';

var app = {
    init: function() {
      this.moneyFormat();
    },

    moneyFormat: function() {
      $('#myInput').on('blur', function() {
          console.log($(this));
          console.log('elo');
          var val = $('#myInput').val();
          console.log(val);

          var patt1 = new RegExp(",");
          var res1 = patt1.test(val);

          var patt2 = new RegExp(".");
          var res2 = patt2.test(val);

          if (!(res1 || res2)) {
            val = val + ",00";
          }
// missing method for value without comma or dot!!!
          if (res1) {
              var moneyArr = val.split(",");
              var plnArr = moneyArr[0];
              var grArr = moneyArr[1];
              console.log(plnArr + " zł i " + grArr + " gr");

              if (grArr == undefined) {
                val = val + ",00";
              }

              if (grArr.length == 1) {
                  val = val + "0";
              }

              if (grArr.length > 2) {
                  // val = val.toFixed(2);
                  var fixGr = grArr.substr(0, 2);
                  val = plnArr + "," + fixGr;
                  console.log(val);
              }

              else {
                  val = val + "00";
              }
          }

          if (res2) {
              val = val.replace(".", ",");

              var moneyArr = val.split(",");
              var plnArr = moneyArr[0];
              var grArr = moneyArr[1];
              console.log("elo    " + plnArr + " zł i " + grArr + " gr");

              if (grArr = undefined) {
                console.log('niespodzianka!');
                val = val + ",00";
              }

              if (grArr.length == 1) {
                  val = val + "0";
              }

              if (grArr.length > 2) {
                  // val = val.toFixed(2);
                  var fixGr = grArr.substr(0, 2);
                  val = plnArr + "," + fixGr;
                  console.log("joł " + val);
                  // $(this).html(val);
              }

              else {
                  val = val + "00";
              }

          }

          $(this).val(val);
      });
    }

    $(document).ready(function() {
      app.init();
    });
