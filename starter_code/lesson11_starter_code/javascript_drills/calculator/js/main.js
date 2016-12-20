var num1;
var num2;
var total;

// $("li").on("click", function(){
// 	var logic= $(this).html();

// 	if(logic === "+"){

// 	}else if(logic ==="-")

// });

$('#plus').on('click', function(){
	set_nums();	
	add();
});

$("#minus").on("click", function(){
	set_nums();
	subtract();
});

$("#divide").on("click", function(){
	set_nums();
	divide();
});

$("#times").on("click", function(){
	set_nums();
	multiply();
});

function add(){
	total = num1 + num2;

	$("#answer").html(total);
}

function subtract(){
	total = num1 - num2;

	$("#answer").html(total);
}

function divide(){
	total = num1 / num2;
	total = total.toFixed(3);

	$("#answer").html(total);
}

function multiply(){
	total = num1 * num2;

	$("#answer").html(total);
}

function set_nums(){
	num1 = parseInt($('#num1').val());
	num2 = parseInt($('#num2').val());
}