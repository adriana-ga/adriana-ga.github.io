$("h1").html("Winter is here");

$("#color-p").css("background-color", "blue");

$("div").addClass("the-north");

$("#walker").on("mouseover",function(){
	$("#walker").hide();
});

	// 1. when the user clicks on button do something
	// 2. get user input
	// 3. compare it to danaerys
	// 4. if it matches then say they were right
	// 5. if it doesn't match say wrooong
$("button").on("click", function(){
	var input= $("input").val();

	if(input === "danaerys"){
		$("#coolest-character").html("you are right");
	}else{
		$("#coolest-character").html("wrooong");
	}
});