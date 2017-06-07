function roll() {
    var num = $("input[name=num]:checked").val();
    var die = $("input[name=dice]:checked").val();
    if (num == undefined || die == undefined) {
        $("#Numbers").html("<p style='color: red'>Please select both options</p>");
	$("html, body").scrollTop($(document).height());
    } else {
        var arraylist = [];
        for (var i = num; i > 0; i--) {
            arraylist.push(Math.floor(Math.random() * die) + 1);
        }
        var output = "";
        for (var i = 0; i < arraylist.length - 1; i++) {
            output += arraylist[i] + ", ";
        }
        output += arraylist[arraylist.length - 1];
        $("#Numbers").html("<h2>" + output + "</h2>");
	$("html, body").scrollTop($(document).height());
    }
}