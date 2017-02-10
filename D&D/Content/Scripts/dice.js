function roll(){
  var num = $( "#number option:selected" ).text();
  var output = [];
  var die = $( "#diceamount option:selected" ).text();
  for(var i = num; i > 0; i--){
    output.push(Math.floor(Math.random() * die) + 1);
  }
  $("#Numbers").html(output.toString());
}