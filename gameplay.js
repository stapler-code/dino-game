var score = 0
function jump() {
    document.getElementById("character").classList.add("animate")
    setTimeout(function(){
        document.getElementById("character").classList.remove("animate")
    }, 500)
}
function add_score(){
    document.getElementById("restart").style.display = "none";
    window.setInterval(function() {
        score += 1
        document.getElementById("text").innerHTML = "Score: " + score
    }, 1000)
}
var checkDead = setInterval(
    function() {
        var charactertop = parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("top"));
        var blockleft = parseFloat(window.getComputedStyle(document.getElementById("block")).getPropertyValue("left"));
        if (blockleft < 20 && blockleft > 0 && charactertop >= 130)
        {
            document.getElementById("block").style.animation = "none";
            document.getElementById("block").style.display = "none";
            document.getElementById("text").style.display = "none";
            document.getElementById("restart").style.display = "block";
            document.getElementById("character").style.display = "none";
        }
    }
)