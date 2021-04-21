document.addEventListener("DOMContentLoaded", function() {
    function defile(tailleTexte){
        document.getElementById("animate").animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX('+tailleTexte+'px)' }
            ], {
            // timing options
            duration: 1000
            });
        let color = '000000' + Math.floor(Math.random()*16777215);
        document.body.style.backgroundColor = '#' + color.substring(color.length-6, color.length);
   }
    function apparait(animate){
        animate.style.display = "block";
        let color = '000000' + Math.floor(Math.random()*16777215);
        document.body.style.backgroundColor = '#' + color.substring(color.length-6, color.length);
        animate.style.float = "left";
        animate.style.marginLeft = 100 + "px";
    }
    button = document.getElementById("test");
    button.addEventListener('click', event => {
        let animate = document.getElementById("animate");
        if(animate.style.display == "none") apparait(animate);
        else defile(document.getElementById('content').scrollWidth);
    });
});