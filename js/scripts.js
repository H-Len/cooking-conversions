var gal_litre = function(number) {
  parseInt(number);
  return ((number* 3.785) + " liters");
};

var cups_tbsp = function(number) {
  parseInt(number);
  return ((number * 16) + "tbsp");
};

var pints_cups = function(number) {
  parseInt(number);
  return ((number * 2) + "cup");
};

//User Interface

$(document).ready(function() {
  $("form#gal_litre").submit(function(event) {
    event.preventDefault();
    var gallonInput = $("#gallon").val();
    var result = gal_litre(gallonInput);
    $("#outputlitre").text(result);
  });
});

$(document).ready(function() {
  $("form#cups_tbsp").submit(function(event) {
    event.preventDefault();
    var cupInput = $("#cup").val();
    var result = cups_tbsp(cupInput);
    $("#outputtbsp").text(result);
  });
});

$(document).ready(function() {
  $("form#pints_cups").submit(function(event) {
    event.preventDefault();
    var pintInput = $("#pint").val();
    var result = pints_cups(pintInput);
    $("#outputcup").text(result);
  });
});
