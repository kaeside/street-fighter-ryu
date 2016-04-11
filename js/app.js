$(document).ready(function(){
    $(".ryu").on("mouseenter", function(){
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .on("mouseleave", function(){
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    })
    .on("mousedown", function() {
    	$(".ryu-still, .ryu-ready").hide();
    	$(".ryu-throwing, .hadouken").show();
    })
    .on("mouseup", function() {
    	$(".ryu-still").show();
    	$(".ryu-throwing, .hadouken, .ryu-ready").hide();
    })
});