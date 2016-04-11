$(document).ready(function(){
    var playHadouken = function(){
        $("#hadouken-sound")[0].volume = 0.5;
        $("#hadouken-sound")[0].load();
        $("#hadouken-sound")[0].play();
    }
   
    $(".ryu").on("mouseenter", function(){
        $(".ryu-still, .ryu-cool, .ryu-throwing").hide();
        $(".ryu-ready").show();
    });

    $(".ryu").on("mouseleave", function(){
        $(".ryu-ready, .ryu-cool, .ryu-throwing").hide();
        $(".ryu-still").show();
    });
    $(".ryu").on("mousedown", function() {
    	playHadouken();
        $(".ryu-still, .ryu-ready, .ryu-cool").hide();
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
    	$(".ryu-throwing, .hadouken, .ryu-ready, .ryu-cool").hide();
    });
    
    $(document).on("keydown", function (event) {
        var key = event.which;
        if (key == 88) { // if the key being pressed is #88
            $(".ryu-ready, .ryu-still").hide();
            $(".ryu-cool").show();
        }
    })
    .on("keyup", function(event) {
        var key = event.which;
        if (key == 88) {
            $(".ryu-still").show();
            $(".ryu-cool").hide();
        }
    })

});
