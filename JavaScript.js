var x = false;

$(document).ready(function () {




    $("button").click(function () {
        move(); 
    });


    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            move(0);
            return false;
        } else if (e.keyCode == 39) {
            move(1);
            return false;
        } else if (e.keyCode == 38) {
            move(2);
            return false;
        } else if (e.keyCode == 40) {
            move(3);
            return false;
        }
    });
    
});

function move(i) {
    var px = 'px';
    var leftPos = document.getElementById('square').style.left;
    var topPos = document.getElementById('square').style.top;
    

    if (i == 0) {
        leftPos = '0';          
    } else if (i == 1) {
        leftPos = '250';        
    } else if (i == 2) {
        topPos = '0';
    } else if (i == 3) {
        topPos = '250';
    }
    $("#square").animate({
        left: leftPos.concat(px),
        top: topPos.concat(px)
    });
}