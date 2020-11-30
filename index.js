isDark = false;

$(document).ready(function() {
    document.getElementById("aud").volume = 0.1;
    $(".sub").click(function() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
            if($(".enter-task-i").val().trim()!= ""){
                $(".todo-l").prepend("<div class='todo-e'><span style='padding: 20px;width: 50%'>" + $(".enter-task-i").val() +"</span><b>@"+ hour + ":" + minute + "</b><button onclick='$(this).parent().slideUp(400, function(){$(this).remove()})' type='button' class='close-b'><i class='fa fa-close'></i></button></div>");
                $(".enter-task-i").val("");
    }
    else {
    document.getElementById("aud").play();
    document.getElementById("aud").currentTime = 0;
                $(".todo-l").prepend("<div class='todo-e'><span style='padding: 20px;width: 50%'>" + "Oops! You forgot to add task" +"</span><b>@"+ hour + ":" + minute + "</b><button onclick='$(this).parent().slideUp(400, function(){$(this).remove()})' type='button' class='close-b'><i class='fa fa-close'></i></button></div>");
                }
});
});
                function dark() {
                    if(isDark == false) {
                       $("body").css({"backgroundColor": "rgb(50, 50, 50)", "color": "rgb(150, 150, 150)"});
                       $("button").css({"color": "rgb(150, 150, 150)"});
                       $(".enter-task-i").css({"color": "rgb(150, 150, 150)"});
                       isDark =true;
                    }
                    else {
                        $("body").css({"backgroundColor": "rgb(200, 200, 200)", "color": "black"});
                        $(".enter-task-i").css({"color": "black"});
                       $("button").css({"color": "black"});
                       isDark = false;
                    }
                }
