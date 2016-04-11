$(document).ready(function(){
    var playHadouken = function(){
        $("#hadouken-sound")[0].volume = 0.5;
        $("#hadouken-sound")[0].load();
        $("#hadouken-sound")[0].play();
    }
   
    $(".ryu").on("mouseenter", function(){
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .on("mouseleave", function(){
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    })
    .on("mousedown", function() {
    	playHadouken();
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