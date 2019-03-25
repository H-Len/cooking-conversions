var conversion = function() {
  var gallon = parseInt (prompt("enter gallons"));
  return ((gallon * 3.785) + "liters");
};

alert(conversion());
