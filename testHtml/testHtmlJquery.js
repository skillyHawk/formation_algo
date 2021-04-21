$(function() {
    function apparait(animate){
        animate.show();
        animate.css("left", 0);
        $('body').css('background-color', '#' + (('000000' + Math.floor(Math.random()*16777215)).slice(-6)) );
    }
    function move(animate){
        var content = document.getElementById('ok');
        var largeur = content.scrollWidth;
        animate.animate(
            {
                "left": largeur + 100
            },
             "slow" ,
        function() {
            if(animate.offset().left >= largeur) apparait($("#animate"));
        });
    }
    $( "#test" ).click(function() {
        if($("#animate").is(":hidden")) apparait($("#animate"));
        else move($("#animate"));
    });
});