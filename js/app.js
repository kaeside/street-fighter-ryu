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
        $(".hadouken").animate(
            {"left": "1020px"},
            500,
            function(){
                $(this).hide();
                $(this).css({"left": "520px"})
            });
    })
    .on("mouseup", function() {
    	$(".ryu-still").show();
    	$(".ryu-throwing, .hadouken, .ryu-ready").hide();
    })
});