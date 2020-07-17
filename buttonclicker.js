function toggleinput() {
    var x = document.getElementById("custom");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function change() {
    var y = document.getElementById("iniimg");
    document.getElementById("image").src = y.value;
}
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

var exp = document.getElementById("exp");
function toggleexp() {
    if (exp.style.display == "none") {
        exp.style.display = "block";
    } else {
        exp.style.display = "none";
    }
}
var money = 0;
var clickpower = 1;
var autoclicks = 0;
setInterval(addmoney, 1000);
setInterval(checkavail, 50);
function clicked() {
    money += clickpower;
    document.getElementById("money").innerHTML = '$' + precisenum(money);

}
function end() {

    alert("We know this game is addictive, so we have created this to stop you. Your highscore will be kept, and the game will return in twenty minutes. Try finding something else on this website, there are things a load more interesting than this. ");
    document.body.style.display = "none";
    setTimeout(start, 1200000);
}
function start() {
    document.body.style.display = "block";
    alert("Welcome back.");
    setTimeout(end, 1200000);
}
// play function
function play() {
    setTimeout(end, 1200000);

    document.getElementById("game").style.display = "block";
    document.getElementById("playbutton").style.display = "none";
}
// all buy functions # is sequence, a is auto, b is buy, ab is buy auto

function buy1() {
    if (money >= 25) {
        money -= 25;
        clickpower += 1;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy5() {
    if (money >= 1280000) {
        money -= 1280000;
        clickpower += 100000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy6() {
    if (money >= 36000000) {
        money -= 36000000;
        clickpower += 3000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy7() {
    if (money >= 11600000000) {
        money -= 11600000000;
        clickpower += 1000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy8() {
    if (money >= 232000000000) {
        money -= 232000000000;
        clickpower += 20000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy9() {
    if (money >= 7980000000000) {
        money -= 7980000000000;
        clickpower += 700000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy10() {
    if (money >= 112000000000000) {
        money -= 112000000000000;
        clickpower += 10000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy11() {
    if (money >= 4500000000000000) {
        money -= 4500000000000000;
        clickpower += 400000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy12() {
    if (money >= 64800000000000000) {
        money -= 64800000000000000;
        clickpower += 6000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy13() {
    if (money >= 2140000000000000000) {
        money -= 2140000000000000000;
        clickpower += 200000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy14() {
    if (money >= 53000000000000000000) {
        money -= 53000000000000000000;
        clickpower += 5000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy15() {
    if (money >= 1686400000000000000000) {
        money -= 1686400000000000000000;
        clickpower += 160000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy16() {
    if (money >= 73500000000000000000000) {
        money -= 73500000000000000000000;
        clickpower += 7000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy17() {
    if (money >= 2405800000000000000000000) {
        money -= 2405800000000000000000000;
        clickpower += 230000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy18() {
    if (money >= 83680000000000000000000000) {
        money -= 83680000000000000000000000;
        clickpower += 8000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy19() {
    if (money >= 3120000000000000000000000000) {
        money -= 3120000000000000000000000000;
        clickpower += 300000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy20() {
    if (money >= 103800000000000000000000000000) {
        money -= 103800000000000000000000000000;
        clickpower += 10000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy21() {
    if (money >= 2900800000000000000000000000000) {
        money -= 2900800000000000000000000000000;
        clickpower += 280000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy22() {
    if (money >= 82720000000000000000000000000000) {
        money -= 82720000000000000000000000000000;
        clickpower += 8000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy23() {
    if (money >= 2580000000000000000000000000000000) {
        money -= 2580000000000000000000000000000000;
        clickpower += 250000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy24() {
    if (money >= 61800000000000000000000000000000000) {
        money -= 61800000000000000000000000000000000;
        clickpower += 6000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy25() {
    if (money >= 4112000000000000000000000000000000000) {
        money -= 4112000000000000000000000000000000000;
        clickpower += 400000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy26() {
    if (money >= 112860000000000000000000000000000000000) {
        money -= 112860000000000000000000000000000000000;
        clickpower += 11000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy27() {
    if (money >= 5120000000000000000000000000000000000000) {
        money -= 5120000000000000000000000000000000000000;
        clickpower += 500000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy28() {
    if (money >= 143080000000000000000000000000000000000000) {
        money -= 143080000000000000000000000000000000000000;
        clickpower += 14000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy29() {
    if (money >= 5610000000000000000000000000000000000000000) {
        money -= 5610000000000000000000000000000000000000000;
        clickpower += 550000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy30() {
    if (money >= 162880000000000000000000000000000000000000000) {
        money -= 162880000000000000000000000000000000000000000;
        clickpower += 16000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy31() {
    if (money >= 6096000000000000000000000000000000000000000000) {
        money -= 6096000000000000000000000000000000000000000000;
        clickpower += 600000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy32() {
    if (money >= 202800000000000000000000000000000000000000000000) {
        money -= 202800000000000000000000000000000000000000000000;
        clickpower += 20000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy33() {
    if (money >= 7084000000000000000000000000000000000000000000000) {
        money -= 7084000000000000000000000000000000000000000000000;
        clickpower += 700000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy34() {
    if (money >= 252500000000000000000000000000000000000000000000000) {
        money -= 252500000000000000000000000000000000000000000000000;
        clickpower += 25000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy35() {
    if (money >= 8064000000000000000000000000000000000000000000000000) {
        money -= 8064000000000000000000000000000000000000000000000000;
        clickpower += 800000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy36() {
    if (money >= 301800000000000000000000000000000000000000000000000000) {
        money -= 301800000000000000000000000000000000000000000000000000;
        clickpower += 30000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy37() {
    if (money >= 9036000000000000000000000000000000000000000000000000000) {
        money -= 9036000000000000000000000000000000000000000000000000000;
        clickpower += 900000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy38() {
    if (money >= 350700000000000000000000000000000000000000000000000000000) {
        money -= 350700000000000000000000000000000000000000000000000000000;
        clickpower += 35000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy39() {
    if (money >= 10000000000000000000000000000000000000000000000000000000000) {
        money -= 10000000000000000000000000000000000000000000000000000000000;
        clickpower += 1000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy40() {
    if (money >= 359280000000000000000000000000000000000000000000000000000000) {
        money -= 359280000000000000000000000000000000000000000000000000000000;
        clickpower += 36000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy41() {
    if (money >= 12948000000000000000000000000000000000000000000000000000000000) {
        money -= 12948000000000000000000000000000000000000000000000000000000000;
        clickpower += 1300000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy42() {
    if (money >= 387660000000000000000000000000000000000000000000000000000000000) {
        money -= 387660000000000000000000000000000000000000000000000000000000000;
        clickpower += 39000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy43() {
    if (money >= 14880000000000000000000000000000000000000000000000000000000000000) {
        money -= 14880000000000000000000000000000000000000000000000000000000000000;
        clickpower += 1500000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy44() {
    if (money >= 405900000000000000000000000000000000000000000000000000000000000000) {
        money -= 405900000000000000000000000000000000000000000000000000000000000000;
        clickpower += 41000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy45() {
    if (money >= 16796000000000000000000000000000000000000000000000000000000000000000) {
        money -= 16796000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 1700000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy46() {
    if (money >= 433840000000000000000000000000000000000000000000000000000000000000000) {
        money -= 433840000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 44000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy47() {
    if (money >= 19680000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 19680000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 2000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy48() {
    if (money >= 589200000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 589200000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 60000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy49() {
    if (money >= 29400000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 29400000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 3000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy50() {
    if (money >= 978000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 978000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 100000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy51() {
    if (money >= 39040000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 39040000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 4000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy52() {
    if (money >= 1168800000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 1168800000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 120000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy53() {
    if (money >= 48600000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 48600000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 5000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy54() {
    if (money >= 1649000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 1649000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 170000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy55() {
    if (money >= 58080000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 58080000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 6000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy56() {
    if (money >= 1932000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 1932000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 200000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy57() {
    if (money >= 77120000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 77120000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 8000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy58() {
    if (money >= 2886000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 2886000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 300000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy59() {
    if (money >= 96000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 96000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy60() {
    if (money >= 3832000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 3832000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy61() {
    if (money >= 124280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 124280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy62() {
    if (money >= 4293000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 4293000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy63() {
    if (money >= 161840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 161840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 17000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy64() {
    if (money >= 5225000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 5225000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy65() {
    if (money >= 189600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 189600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy66() {
    if (money >= 6149000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        money -= 6149000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        clickpower += 650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buya1() {
    if (money >= 100) {
        money -= 100;
        autoclicks += 1;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya2() {
    if (money >= 900) {
        money -= 900;
        autoclicks += 10;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya3() {
    if (money >= 12000) {
        money -= 12000;
        autoclicks += 150;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya4() {
    if (money >= 220000) {
        money -= 220000;
        autoclicks += 3000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya5() {
    if (money >= 6600000) {
        money -= 6600000;
        autoclicks += 100000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya6() {
    if (money >= 130000000) {
        money -= 130000000;
        autoclicks += 2000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya7() {
    if (money >= 9450000000) {
        money -= 9450000000;
        autoclicks += 150000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya8() {
    if (money >= 61000000000) {
        money -= 61000000000;
        autoclicks += 1000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya9() {
    if (money >= 1800000000000) {
        money -= 1800000000000;
        autoclicks += 30000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya10() {
    if (money >= 35400000000000) {
        money -= 35400000000000;
        autoclicks += 600000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya11() {
    if (money >= 464000000000000) {
        money -= 464000000000000;
        autoclicks += 8000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya12() {
    if (money >= 28500000000000000) {
        money -= 28500000000000000;
        autoclicks += 500000000000000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya13() {
    if (money >= 9.12e+17) {
        money -= 9.12e+17;
        autoclicks += 1.6e+16;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}


function buya14() {
    if (money >= 3.39e+19) {
        money -= 3.39e+19;
        autoclicks += 6e+17;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya15() {
    if (money >= 1.12e+21) {
        money -= 1.12e+21;
        autoclicks += 2e+19;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
} function buya16() {
    if (money >= 3.899e+22) {
        money -= 3.899e+22;
        autoclicks += 7e+200;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya17() {
    if (money >= 1.385e+24) {
        money -= 1.385e+24;
        autoclicks += 2.5e+22;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya18() {
    if (money >= 4.416e+25) {
        money -= 4.416e+25;
        autoclicks += 8e+23;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya19() {
    if (money >= 1.65e+27) {
        money -= 1.65e+27;
        autoclicks += 3e+25;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya20() {
    if (money >= 4.932e+28) {
        money -= 4.932e+28;
        autoclicks += 9e+26;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya21() {
    if (money >= 1.911e+30) {
        money -= 1.911e+30;
        autoclicks += 3.5e+28;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya22() {
    if (money >= 5.44e+31) {
        money -= 5.44e+31;
        autoclicks += 1e+30;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya23() {
    if (money >= 2.168e+33) {
        money -= 2.168e+33;
        autoclicks += 4e+31;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya24() {
    if (money >= 6.48e+34) {
        money -= 6.48e+34;
        autoclicks += 1.2e+33;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya25() {
    if (money >= 2.4255e+36) {
        money -= 2.4255;
        autoclicks += 1.2e+33;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya26() {
    if (money >= 7.532e+37) {
        money -= 7.532e+37;
        autoclicks += 1.4e+36;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
} function buya27() {
    if (money >= 2.69e+39) {
        money -= 2.69e+39;
        autoclicks += 5e+37;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya28() {
    if (money >= 9.112e+40) {
        money -= 9.112e+40;
        autoclicks += 1.7e+39;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya29() {
    if (money >= 2.9425e+42) {
        money -= 2.9425e+42;
        autoclicks += 5.5e+40;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya30() {
    if (money >= 1.068e+44) {
        money -= 1.068e+44;
        autoclicks += 2e+42;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya31() {
    if (money >= 3.198e+45) {
        money -= 3.198e+45;
        autoclicks += 6e+43;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya32() {
    if (money >= 1.2768e+47) {
        money -= 1.2768e+47;
        autoclicks += 2.4e+45;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya33() {
    if (money >= 3.717e+48) {
        money -= 3.717e+48;
        autoclicks += 7e+46;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya34() {
    if (money >= 1.484e+50) {
        money -= 1.484e+50;
        autoclicks += 2.8e+48;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya35() {
    if (money >= 4.232e+51) {
        money -= 4.232e+51;
        autoclicks += 8e+49;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya36() {
    if (money >= 1.584e+53) {
        money -= 1.584e+53;
        autoclicks += 3e+51;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}




function buya37() {
    if (money >= 5.27e+54) {
        money -= 5.27e+54;
        autoclicks += 1e+53;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya38() {
    if (money >= 2.104e+56) {
        money -= 2.104e+56;
        autoclicks += 4e+54;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya39() {
    if (money >= 6.825e+57) {
        money -= 6.825e+57;
        autoclicks += 1.3e+56;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya40() {
    if (money >= 2.62e+59) {
        money -= 2.62e+59;
        autoclicks += 5e+57;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya41() {
    if (money >= 8.891e+60) {
        money -= 8.891e+60;
        autoclicks += 1.7e+59;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya42() {
    if (money >= 3.132e+62) {
        money -= 3.132e+62;
        autoclicks += 6e+60;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya43() {
    if (money >= 1.042e+64) {
        money -= 1.042e+64;
        autoclicks += 2e+62;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya44() {
    if (money >= 3.64e+65) {
        money -= 3.64e+65;
        autoclicks += 7e+63
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya45() {
    if (money >= 1.2975e+67) {
        money -= 1.2975e+67;
        autoclicks += 2.5e+65;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya46() {
    if (money >= 4.662e+68) {
        money -= 4.662e+68;
        autoclicks += 9e+66;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya47() {
    if (money >= 1.551e+70) {
        money -= 1.551e+70;
        autoclicks += 3e+68;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya48() {
    if (money >= 5.676e+71) {
        money -= 5.676e+71;
        autoclicks += 1.1e+70;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya49() {
    if (money >= 1.8025e+73) {
        money -= 1.8025e+73;
        autoclicks += 3.5e+71;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya50() {
    if (money >= 7.196e+74) {
        money -= 7.196e+74;
        autoclicks += 1.4e+73;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya51() {
    if (money >= 2.052e+76) {
        money -= 2.052e+76;
        autoclicks += 4e+74;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}

function buya52() {
    if (money >= 8.704e+77) {
        money -= 8.704e+77;
        autoclicks += 1.7e+76;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya53() {
    if (money >= 2.8105e+79) {
        money -= 2.8105e+79;
        autoclicks += 5.5e+77;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya54() {
    if (money >= 1.02e+81) {
        money -= 1.02e+81;
        autoclicks += 2e+79;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya55() {
    if (money >= 3.3805e+82) {
        money -= 3.3805e+82;
        autoclicks += 6.5e+80;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya56() {
    if (money >= 1.27e+84) {
        money -= 1.27e+84;
        autoclicks += 2.5e+82;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya57() {
    if (money >= 3.8025e+85) {
        money -= 3.8025e+85;
        autoclicks += 7.5e+83;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya58() {
    if (money >= 1.518e+87) {
        money -= 1.518e+87;
        autoclicks += 3e+85;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya59() {
    if (money >= 4.545e+88) {
        money -= 4.545e+88;
        autoclicks += 9e+86;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya60() {
    if (money >= 1.764e+90) {
        money -= 1.764e+90;
        autoclicks += 3.5e+88;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya61() {
    if (money >= 5.03e+91) {
        money -= 5.03e+91;
        autoclicks += 1e+90;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya62() {
    if (money >= 2.008e+93) {
        money -= 2.008e+93;
        autoclicks += 4e+91;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya63() {
    if (money >= 6.012e+94) {
        money -= 6.012e+94;
        autoclicks += 1.2e+93;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya64() {
    if (money >= 2.25e+96) {
        money -= 2.25e+96;
        autoclicks += 4.5e+94;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya65() {
    if (money >= 7.984e+97) {
        money -= 7.984e+97;
        autoclicks += 1.6e+96;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }
}
function buya66() {
    if (money >= 2.49e+99) {
        money -= 2.49e+99;
        autoclicks += 5e+97;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("autoclicks").innerHTML = precisenum(autoclicks) + " $ per second";
    }

}
function buy2() {
    if (money >= 200) {
        money -= 200;
        clickpower += 10;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy4() {
    if (money >= 46200) {
        money -= 46200;
        clickpower += 3000;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
function buy3() {
    if (money >= 8000) {
        money -= 8000;
        clickpower += 500;
        document.getElementById("money").innerHTML = '$' + precisenum(money);
        document.getElementById("clickpower").innerHTML = precisenum(clickpower) + " $ per click";
    }
}
//Run autoclicks
function addmoney() {
    money += autoclicks;
    document.getElementById("money").innerHTML = '$' + precisenum(money);
}
// round number function - goes up to googol
function precisenum(x) {
    if ((Math.log(x) / Math.log(10)) >= 3 && (Math.log(x) / Math.log(10)) < 6) {
        return Math.floor(x / 10) / 100 + "K"
    }
    if ((Math.log(x) / Math.log(10)) >= 6 && (Math.log(x) / Math.log(10)) < 9) {
        return Math.floor(x / 10000) / 100 + "M"
    }
    if ((Math.log(x) / Math.log(10)) >= 9 && (Math.log(x) / Math.log(10)) < 12) {
        return Math.floor(x / 10000000) / 100 + "B"
    }
    if ((Math.log(x) / Math.log(10)) >= 12 && (Math.log(x) / Math.log(10)) < 15) {
        return Math.floor(x / 10000000000) / 100 + "T"
    }
    if ((Math.log(x) / Math.log(10)) >= 15 && (Math.log(x) / Math.log(10)) < 18) {
        return Math.floor(x / 10000000000000) / 100 + "Qa"
    }
    if ((Math.log(x) / Math.log(10)) >= 18 && (Math.log(x) / Math.log(10)) < 21) {
        return Math.floor(x / 10000000000000000) / 100 + "Qi"
    }
    if ((Math.log(x) / Math.log(10)) >= 21 && (Math.log(x) / Math.log(10)) < 24) {
        return Math.floor(x / 10000000000000000000) / 100 + "Sx"
    }
    if ((Math.log(x) / Math.log(10)) >= 24 && (Math.log(x) / Math.log(10)) < 27) {
        return Math.floor(x / 10000000000000000000000) / 100 + "Se"
    }
    if ((Math.log(x) / Math.log(10)) >= 27 && (Math.log(x) / Math.log(10)) < 30) {
        return Math.floor(x / 10000000000000000000000000) / 100 + "Oc"
    }
    if ((Math.log(x) / Math.log(10)) >= 30 && (Math.log(x) / Math.log(10)) < 33) {
        return Math.floor(x / 10000000000000000000000000000) / 100 + "No"
    }
    if ((Math.log(x) / Math.log(10)) >= 33 && (Math.log(x) / Math.log(10)) < 36) {
        return Math.floor(x / 10000000000000000000000000000000) / 100 + "De"
    }
    if ((Math.log(x) / Math.log(10)) >= 36 && (Math.log(x) / Math.log(10)) < 39) {
        return Math.floor(x / 10000000000000000000000000000000000) / 100 + "Un"
    }
    if ((Math.log(x) / Math.log(10)) >= 39 && (Math.log(x) / Math.log(10)) < 42) {
        return Math.floor(x / 10000000000000000000000000000000000000) / 100 + "Dd"
    }
    if ((Math.log(x) / Math.log(10)) >= 42 && (Math.log(x) / Math.log(10)) < 45) {
        return Math.floor(x / 10000000000000000000000000000000000000000) / 100 + "Td"
    }
    if ((Math.log(x) / Math.log(10)) >= 45 && (Math.log(x) / Math.log(10)) < 48) {
        return Math.floor(x / 10000000000000000000000000000000000000000000) / 100 + "Qad"
    }
    if ((Math.log(x) / Math.log(10)) >= 48 && (Math.log(x) / Math.log(10)) < 51) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000) / 100 + "Qid"
    }
    if ((Math.log(x) / Math.log(10)) >= 51 && (Math.log(x) / Math.log(10)) < 54) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000) / 100 + "Sxd"
    }
    if ((Math.log(x) / Math.log(10)) >= 54 && (Math.log(x) / Math.log(10)) < 57) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000) / 100 + "Sed"
    }
    if ((Math.log(x) / Math.log(10)) >= 57 && (Math.log(x) / Math.log(10)) < 60) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000) / 100 + "Ocd"
    }
    if ((Math.log(x) / Math.log(10)) >= 60 && (Math.log(x) / Math.log(10)) < 63) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000) / 100 + "Nod"
    }
    if ((Math.log(x) / Math.log(10)) >= 63 && (Math.log(x) / Math.log(10)) < 66) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000) / 100 + "Vt"
    }
    if ((Math.log(x) / Math.log(10)) >= 66 && (Math.log(x) / Math.log(10)) < 69) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000) / 100 + "Uvt"
    }
    if ((Math.log(x) / Math.log(10)) >= 69 && (Math.log(x) / Math.log(10)) < 72) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Dvt"
    }
    if ((Math.log(x) / Math.log(10)) >= 72 && (Math.log(x) / Math.log(10)) < 75) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Tvt"
    }
    if ((Math.log(x) / Math.log(10)) >= 75 && (Math.log(x) / Math.log(10)) < 78) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Qavt"
    }
    if ((Math.log(x) / Math.log(10)) >= 78 && (Math.log(x) / Math.log(10)) < 81) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Qivt"
    }
    if ((Math.log(x) / Math.log(10)) >= 81 && (Math.log(x) / Math.log(10)) < 84) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Sxvt"
    }
    if ((Math.log(x) / Math.log(10)) >= 84 && (Math.log(x) / Math.log(10)) < 87) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Sevt"
    }
    if ((Math.log(x) / Math.log(10)) >= 87 && (Math.log(x) / Math.log(10)) < 90) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Ocvt"
    }
    if ((Math.log(x) / Math.log(10)) >= 90 && (Math.log(x) / Math.log(10)) < 93) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Novt"
    }
    if ((Math.log(x) / Math.log(10)) >= 93 && (Math.log(x) / Math.log(10)) < 96) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Tt"
    }
    if ((Math.log(x) / Math.log(10)) >= 96 && (Math.log(x) / Math.log(10)) < 100) {
        return Math.floor(x / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Utt"
    }
    if ((Math.log(x) / Math.log(10)) >= 100) {
        return Math.floor(x / 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) / 100 + "Gg"
    }
    if ((Math.log(x) / Math.log(10)) >= 0 && (Math.log(x) / Math.log(10)) < 3) {
        return x;
    }
    if (x == 0) {
        return 0;
    }
}
//update red/green
function checkavail() {

    if (money >= 25) {
        document.getElementById("1").style.backgroundColor = "green";
    } else {
        document.getElementById("1").style.backgroundColor = "red";
    }

    if (money >= 100) {
        document.getElementById("a1").style.backgroundColor = "green";
    } else {
        document.getElementById("a1").style.backgroundColor = "red";
    }

    if (money >= 200) {
        document.getElementById("2").style.backgroundColor = "green";
    } else {
        document.getElementById("2").style.backgroundColor = "red";
    }

    if (money >= 46200) {
        document.getElementById("4").style.backgroundColor = "green";
    } else {
        document.getElementById("4").style.backgroundColor = "red";
    }

    if (money >= 1280000) {
        document.getElementById("5").style.backgroundColor = "green";
    } else {
        document.getElementById("5").style.backgroundColor = "red";
    }

    if (money >= 36000000) {
        document.getElementById("6").style.backgroundColor = "green";
    } else {
        document.getElementById("6").style.backgroundColor = "red";
    }

    if (money >= 11600000000) {
        document.getElementById("7").style.backgroundColor = "green";
    } else {
        document.getElementById("7").style.backgroundColor = "red";
    }

    if (money >= 232000000000) {
        document.getElementById("8").style.backgroundColor = "green";
    } else {
        document.getElementById("8").style.backgroundColor = "red";
    }

    if (money >= 7980000000000) {
        document.getElementById("9").style.backgroundColor = "green";
    } else {
        document.getElementById("9").style.backgroundColor = "red";
    }

    if (money >= 112000000000000) {
        document.getElementById("10").style.backgroundColor = "green";
    } else {
        document.getElementById("10").style.backgroundColor = "red";
    }

    if (money >= 4500000000000000) {
        document.getElementById("11").style.backgroundColor = "green";
    } else {
        document.getElementById("11").style.backgroundColor = "red";
    }

    if (money >= 64800000000000000) {
        document.getElementById("12").style.backgroundColor = "green";
    } else {
        document.getElementById("12").style.backgroundColor = "red";
    }
    if (money >= 2140000000000000000) {
        document.getElementById("13").style.backgroundColor = "green";
    } else {
        document.getElementById("13").style.backgroundColor = "red";
    }
    if (money >= 53000000000000000000) {
        document.getElementById("14").style.backgroundColor = "green";
    } else {
        document.getElementById("14").style.backgroundColor = "red";
    }
    if (money >= 1686400000000000000000) {
        document.getElementById("15").style.backgroundColor = "green";
    } else {
        document.getElementById("15").style.backgroundColor = "red";
    }
    if (money >= 73500000000000000000000) {
        document.getElementById("16").style.backgroundColor = "green";
    } else {
        document.getElementById("16").style.backgroundColor = "red";
    }
    if (money >= 2405800000000000000000000) {
        document.getElementById("17").style.backgroundColor = "green";
    } else {
        document.getElementById("17").style.backgroundColor = "red";
    }
    if (money >= 83680000000000000000000000) {
        document.getElementById("18").style.backgroundColor = "green";
    } else {
        document.getElementById("18").style.backgroundColor = "red";
    }
    if (money >= 3120000000000000000000000000) {
        document.getElementById("19").style.backgroundColor = "green";
    } else {
        document.getElementById("19").style.backgroundColor = "red";
    }
    if (money >= 103800000000000000000000000000) {
        document.getElementById("20").style.backgroundColor = "green";
    } else {
        document.getElementById("20").style.backgroundColor = "red";
    }
    if (money >= 2900800000000000000000000000000) {
        document.getElementById("21").style.backgroundColor = "green";
    } else {
        document.getElementById("21").style.backgroundColor = "red";
    }
    if (money >= 82720000000000000000000000000000) {
        document.getElementById("22").style.backgroundColor = "green";
    } else {
        document.getElementById("22").style.backgroundColor = "red";
    }
    if (money >= 2580000000000000000000000000000000) {
        document.getElementById("23").style.backgroundColor = "green";
    } else {
        document.getElementById("23").style.backgroundColor = "red";
    }
    if (money >= 61800000000000000000000000000000000) {
        document.getElementById("24").style.backgroundColor = "green";
    } else {
        document.getElementById("24").style.backgroundColor = "red";
    }
    if (money >= 4112000000000000000000000000000000000) {
        document.getElementById("25").style.backgroundColor = "green";
    } else {
        document.getElementById("25").style.backgroundColor = "red";
    }
    if (money >= 112860000000000000000000000000000000000) {
        document.getElementById("26").style.backgroundColor = "green";
    } else {
        document.getElementById("26").style.backgroundColor = "red";
    }
    if (money >= 5120000000000000000000000000000000000000) {
        document.getElementById("27").style.backgroundColor = "green";
    } else {
        document.getElementById("27").style.backgroundColor = "red";
    }
    if (money >= 143080000000000000000000000000000000000000) {
        document.getElementById("28").style.backgroundColor = "green";
    } else {
        document.getElementById("28").style.backgroundColor = "red";
    }
    if (money >= 5610000000000000000000000000000000000000000) {
        document.getElementById("29").style.backgroundColor = "green";
    } else {
        document.getElementById("29").style.backgroundColor = "red";
    }
    if (money >= 162880000000000000000000000000000000000000000) {
        document.getElementById("30").style.backgroundColor = "green";
    } else {
        document.getElementById("30").style.backgroundColor = "red";
    }
    if (money >= 6096000000000000000000000000000000000000000000) {
        document.getElementById("31").style.backgroundColor = "green";
    } else {
        document.getElementById("31").style.backgroundColor = "red";
    }
    if (money >= 202800000000000000000000000000000000000000000000) {
        document.getElementById("32").style.backgroundColor = "green";
    } else {
        document.getElementById("32").style.backgroundColor = "red";
    }
    if (money >= 7084000000000000000000000000000000000000000000000) {
        document.getElementById("33").style.backgroundColor = "green";
    } else {
        document.getElementById("33").style.backgroundColor = "red";
    }
    if (money >= 252500000000000000000000000000000000000000000000000) {
        document.getElementById("34").style.backgroundColor = "green";
    } else {
        document.getElementById("34").style.backgroundColor = "red";
    }
    if (money >= 8064000000000000000000000000000000000000000000000000) {
        document.getElementById("35").style.backgroundColor = "green";
    } else {
        document.getElementById("35").style.backgroundColor = "red";
    }
    if (money >= 301800000000000000000000000000000000000000000000000000) {
        document.getElementById("36").style.backgroundColor = "green";
    } else {
        document.getElementById("36").style.backgroundColor = "red";
    }
    if (money >= 9036000000000000000000000000000000000000000000000000000) {
        document.getElementById("37").style.backgroundColor = "green";
    } else {
        document.getElementById("37").style.backgroundColor = "red";
    }
    if (money >= 350700000000000000000000000000000000000000000000000000000) {
        document.getElementById("38").style.backgroundColor = "green";
    } else {
        document.getElementById("38").style.backgroundColor = "red";
    }
    if (money >= 10000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("39").style.backgroundColor = "green";
    } else {
        document.getElementById("39").style.backgroundColor = "red";
    }
    if (money >= 359280000000000000000000000000000000000000000000000000000000) {
        document.getElementById("40").style.backgroundColor = "green";
    } else {
        document.getElementById("40").style.backgroundColor = "red";
    }
    if (money >= 12948000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("41").style.backgroundColor = "green";
    } else {
        document.getElementById("41").style.backgroundColor = "red";
    }
    if (money >= 387660000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("42").style.backgroundColor = "green";
    } else {
        document.getElementById("42").style.backgroundColor = "red";
    }
    if (money >= 14880000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("43").style.backgroundColor = "green";
    } else {
        document.getElementById("43").style.backgroundColor = "red";
    }
    if (money >= 405900000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("44").style.backgroundColor = "green";
    } else {
        document.getElementById("44").style.backgroundColor = "red";
    }
    if (money >= 16796000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("45").style.backgroundColor = "green";
    } else {
        document.getElementById("45").style.backgroundColor = "red";
    }
    if (money >= 433840000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("46").style.backgroundColor = "green";
    } else {
        document.getElementById("46").style.backgroundColor = "red";
    }
    if (money >= 19680000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("47").style.backgroundColor = "green";
    } else {
        document.getElementById("47").style.backgroundColor = "red";
    }
    if (money >= 589200000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("48").style.backgroundColor = "green";
    } else {
        document.getElementById("48").style.backgroundColor = "red";
    }
    if (money >= 29400000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("49").style.backgroundColor = "green";
    } else {
        document.getElementById("49").style.backgroundColor = "red";
    }
    if (money >= 978000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("50").style.backgroundColor = "green";
    } else {
        document.getElementById("50").style.backgroundColor = "red";
    }
    if (money >= 39040000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("51").style.backgroundColor = "green";
    } else {
        document.getElementById("51").style.backgroundColor = "red";
    }
    if (money >= 1168800000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("52").style.backgroundColor = "green";
    } else {
        document.getElementById("52").style.backgroundColor = "red";
    }
    if (money >= 48600000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("53").style.backgroundColor = "green";
    } else {
        document.getElementById("53").style.backgroundColor = "red";
    }
    if (money >= 1649000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("54").style.backgroundColor = "green";
    } else {
        document.getElementById("54").style.backgroundColor = "red";
    }
    if (money >= 58080000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("55").style.backgroundColor = "green";
    } else {
        document.getElementById("55").style.backgroundColor = "red";
    }
    if (money >= 1932000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("56").style.backgroundColor = "green";
    } else {
        document.getElementById("56").style.backgroundColor = "red";
    }
    if (money >= 77120000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("57").style.backgroundColor = "green";
    } else {
        document.getElementById("57").style.backgroundColor = "red";
    }
    if (money >= 2886000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("58").style.backgroundColor = "green";
    } else {
        document.getElementById("58").style.backgroundColor = "red";
    }
    if (money >= 96000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("59").style.backgroundColor = "green";
    } else {
        document.getElementById("59").style.backgroundColor = "red";
    }
    if (money >= 3832000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("60").style.backgroundColor = "green";
    } else {
        document.getElementById("60").style.backgroundColor = "red";
    }
    if (money >= 124280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("61").style.backgroundColor = "green";
    } else {
        document.getElementById("61").style.backgroundColor = "red";
    }
    if (money >= 4293000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("62").style.backgroundColor = "green";
    } else {
        document.getElementById("62").style.backgroundColor = "red";
    }
    if (money >= 161840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("63").style.backgroundColor = "green";
    } else {
        document.getElementById("63").style.backgroundColor = "red";
    }
    if (money >= 5225000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("64").style.backgroundColor = "green";
    } else {
        document.getElementById("64").style.backgroundColor = "red";
    }
    if (money >= 189600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("65").style.backgroundColor = "green";
    } else {
        document.getElementById("65").style.backgroundColor = "red";
    }
    if (money >= 6149000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
        document.getElementById("66").style.backgroundColor = "green";
    } else {
        document.getElementById("66").style.backgroundColor = "red";
    }
    if (money >= 61800000000000000000000000000000000) {
        document.getElementById("24").style.backgroundColor = "green";
    } else {
        document.getElementById("24").style.backgroundColor = "red";
    }
    if (money >= 8000) {
        document.getElementById("3").style.backgroundColor = "green";
    } else {
        document.getElementById("3").style.backgroundColor = "red";
    }

    if (money >= 12000) {
        document.getElementById("a3").style.backgroundColor = "green";
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
    }

    if (money >= 900) {
        document.getElementById("a2").style.backgroundColor = "green";
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
    }

    if (money >= 220000) {
        document.getElementById("a4").style.backgroundColor = "green";
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
    }

    if (money >= 6600000) {
        document.getElementById("a5").style.backgroundColor = "green";
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
    }

    if (money >= 130000000) {
        document.getElementById("a6").style.backgroundColor = "green";
    } else {
        document.getElementById("a6").style.backgroundColor = "red";
    }

    if (money >= 9450000000) {
        document.getElementById("a7").style.backgroundColor = "green";
    } else {
        document.getElementById("a7").style.backgroundColor = "red";
    }

    if (money >= 61000000000) {
        document.getElementById("a8").style.backgroundColor = "green";
    } else {
        document.getElementById("a8").style.backgroundColor = "red";
    }

    if (money >= 1800000000000) {
        document.getElementById("a9").style.backgroundColor = "green";
    } else {
        document.getElementById("a9").style.backgroundColor = "red";
    }

    if (money >= 35400000000000) {
        document.getElementById("a10").style.backgroundColor = "green";
    } else {
        document.getElementById("a10").style.backgroundColor = "red";
    }

    if (money >= 464000000000000) {
        document.getElementById("a11").style.backgroundColor = "green";
    } else {
        document.getElementById("a11").style.backgroundColor = "red";
    }

    if (money >= 28500000000000000) {
        document.getElementById("a12").style.backgroundColor = "green";
    } else {
        document.getElementById("a12").style.backgroundColor = "red";
    }

    if (money >= 9.12e+17) {
        document.getElementById("a13").style.backgroundColor = "green";
    } else {
        document.getElementById("a13").style.backgroundColor = "red";
    }
    if (money >= 3.39e+19) {
        document.getElementById("a14").style.backgroundColor = "green";
    } else {
        document.getElementById("a14").style.backgroundColor = "red";
    }
    if (money >= 1.12e+21) {
        document.getElementById("a15").style.backgroundColor = "green";
    } else {
        document.getElementById("a15").style.backgroundColor = "red";
    }
    if (money >= 3.899e+22) {
        document.getElementById("a16").style.backgroundColor = "green";
    } else {
        document.getElementById("a16").style.backgroundColor = "red";
    }
    if (money >= 1.385e+24) {
        document.getElementById("a17").style.backgroundColor = "green";
    } else {
        document.getElementById("a17").style.backgroundColor = "red";
    }
    if (money >= 4.416e+25) {
        document.getElementById("a18").style.backgroundColor = "green";
    } else {
        document.getElementById("a18").style.backgroundColor = "red";
    }
    if (money >= 1.65e+27) {
        document.getElementById("a19").style.backgroundColor = "green";
    } else {
        document.getElementById("a19").style.backgroundColor = "red";
    }
    if (money >= 4.932e+28) {
        document.getElementById("a20").style.backgroundColor = "green";
    } else {
        document.getElementById("a20").style.backgroundColor = "red";
    }
    if (money >= 1.911e+30) {
        document.getElementById("a21").style.backgroundColor = "green";
    } else {
        document.getElementById("a21").style.backgroundColor = "red";
    }
    if (money >= 5.44e+31) {
        document.getElementById("a22").style.backgroundColor = "green";
    } else {
        document.getElementById("a22").style.backgroundColor = "red";
    }
    if (money >= 2.168e+33) {
        document.getElementById("a23").style.backgroundColor = "green";
    } else {
        document.getElementById("a23").style.backgroundColor = "red";
    }
    if (money >= 6.48e+34) {
        document.getElementById("a24").style.backgroundColor = "green";
    } else {
        document.getElementById("a24").style.backgroundColor = "red";
    }
    if (money >= 2.4255e+36) {
        document.getElementById("a25").style.backgroundColor = "green";
    } else {
        document.getElementById("a25").style.backgroundColor = "red";
    }
    if (money >= 7.532e+37) {
        document.getElementById("a26").style.backgroundColor = "green";
    } else {
        document.getElementById("a26").style.backgroundColor = "red";
    }
    if (money >= 2.685e+39) {
        document.getElementById("a27").style.backgroundColor = "green";
    } else {
        document.getElementById("a27").style.backgroundColor = "red";
    }
    if (money >= 9.112e+40) {
        document.getElementById("a28").style.backgroundColor = "green";
    } else {
        document.getElementById("a28").style.backgroundColor = "red";
    }
    if (money >= 2.9425e+42) {
        document.getElementById("a29").style.backgroundColor = "green";
    } else {
        document.getElementById("a29").style.backgroundColor = "red";
    }
    if (money >= 1.068e+44) {
        document.getElementById("a30").style.backgroundColor = "green";
    } else {
        document.getElementById("a30").style.backgroundColor = "red";
    }
    if (money >= 3.198e+45) {
        document.getElementById("a31").style.backgroundColor = "green";
    } else {
        document.getElementById("a31").style.backgroundColor = "red";
    }
    if (money >= 1.2768e+47) {
        document.getElementById("a32").style.backgroundColor = "green";
    } else {
        document.getElementById("a32").style.backgroundColor = "red";
    }
    if (money >= 3.717e+48) {
        document.getElementById("a33").style.backgroundColor = "green";
    } else {
        document.getElementById("a33").style.backgroundColor = "red";
    }
    if (money >= 1.484e+50) {
        document.getElementById("a34").style.backgroundColor = "green";
    } else {
        document.getElementById("a34").style.backgroundColor = "red";
    }
    if (money >= 4.232e+51) {
        document.getElementById("a35").style.backgroundColor = "green";
    } else {
        document.getElementById("a35").style.backgroundColor = "red";
    }
    if (money >= 1.584e+53) {
        document.getElementById("a36").style.backgroundColor = "green";
    } else {
        document.getElementById("a36").style.backgroundColor = "red";
    }
    if (money >= 5.27e+54) {
        document.getElementById("a37").style.backgroundColor = "green";
    } else {
        document.getElementById("a37").style.backgroundColor = "red";
    }
    if (money >= 2.104e+56) {
        document.getElementById("a38").style.backgroundColor = "green";
    } else {
        document.getElementById("a38").style.backgroundColor = "red";
    }
    if (money >= 6.825e+57) {
        document.getElementById("a39").style.backgroundColor = "green";
    } else {
        document.getElementById("a39").style.backgroundColor = "red";
    }
    if (money >= 2.62e+59) {
        document.getElementById("a40").style.backgroundColor = "green";
    } else {
        document.getElementById("a40").style.backgroundColor = "red";
    }
    if (money >= 8.891e+60) {
        document.getElementById("a41").style.backgroundColor = "green";
    } else {
        document.getElementById("a41").style.backgroundColor = "red";
    }
    if (money >= 3.132e+62) {
        document.getElementById("a42").style.backgroundColor = "green";
    } else {
        document.getElementById("a42").style.backgroundColor = "red";
    }
    if (money >= 1.042e+64) {
        document.getElementById("a43").style.backgroundColor = "green";
    } else {
        document.getElementById("a43").style.backgroundColor = "red";
    }
    if (money >= 3.64e+65) {
        document.getElementById("a44").style.backgroundColor = "green";
    } else {
        document.getElementById("a44").style.backgroundColor = "red";
    }
    if (money >= 1.2975e+67) {
        document.getElementById("a45").style.backgroundColor = "green";
    } else {
        document.getElementById("a45").style.backgroundColor = "red";
    }
    if (money >= 4.662e+68) {
        document.getElementById("a46").style.backgroundColor = "green";
    } else {
        document.getElementById("a46").style.backgroundColor = "red";
    }
    if (money >= 1.551e+70) {
        document.getElementById("a47").style.backgroundColor = "green";
    } else {
        document.getElementById("a47").style.backgroundColor = "red";
    }
    if (money >= 5.676e+71) {
        document.getElementById("a48").style.backgroundColor = "green";
    } else {
        document.getElementById("a48").style.backgroundColor = "red";
    }
    if (money >= 1.8025e+73) {
        document.getElementById("a49").style.backgroundColor = "green";
    } else {
        document.getElementById("a49").style.backgroundColor = "red";
    } if (money >= 7.196e+74) {
        document.getElementById("a50").style.backgroundColor = "green";
    } else {
        document.getElementById("a50").style.backgroundColor = "red";
    }
    if (money >= 2.052e+76) {
        document.getElementById("a51").style.backgroundColor = "green";
    } else {
        document.getElementById("a51").style.backgroundColor = "red";
    }
    if (money >= 8.704e+77) {
        document.getElementById("a52").style.backgroundColor = "green";
    } else {
        document.getElementById("a52").style.backgroundColor = "red";
    }
    if (money >= 2.8105e+79) {
        document.getElementById("a53").style.backgroundColor = "green";
    } else {
        document.getElementById("a53").style.backgroundColor = "red";
    }
    if (money >= 1.02e+81) {
        document.getElementById("a54").style.backgroundColor = "green";
    } else {
        document.getElementById("a54").style.backgroundColor = "red";
    }
    if (money >= 3.3805e+82) {
        document.getElementById("a55").style.backgroundColor = "green";
    } else {
        document.getElementById("a55").style.backgroundColor = "red";
    }
    if (money >= 1.27e+84) {
        document.getElementById("a56").style.backgroundColor = "green";
    } else {
        document.getElementById("a56").style.backgroundColor = "red";
    }
    if (money >= 3.8025e+85) {
        document.getElementById("a57").style.backgroundColor = "green";
    } else {
        document.getElementById("a57").style.backgroundColor = "red";
    }
    if (money >= 1.518e+87) {
        document.getElementById("a58").style.backgroundColor = "green";
    } else {
        document.getElementById("a58").style.backgroundColor = "red";
    }
    if (money >= 4.545e+88) {
        document.getElementById("a59").style.backgroundColor = "green";
    } else {
        document.getElementById("a59").style.backgroundColor = "red";
    }
    if (money >= 1.764e+90) {
        document.getElementById("a60").style.backgroundColor = "green";
    } else {
        document.getElementById("a60").style.backgroundColor = "red";
    }
    if (money >= 5.03e+91) {
        document.getElementById("a61").style.backgroundColor = "green";
    } else {
        document.getElementById("a61").style.backgroundColor = "red";
    }
    if (money >= 2.008e+93) {
        document.getElementById("a62").style.backgroundColor = "green";
    } else {
        document.getElementById("a62").style.backgroundColor = "red";
    }
    if (money >= 6.012e+94) {
        document.getElementById("a63").style.backgroundColor = "green";
    } else {
        document.getElementById("a63").style.backgroundColor = "red";
    }
    if (money >= 2.25e+96) {
        document.getElementById("a64").style.backgroundColor = "green";
    } else {
        document.getElementById("a64").style.backgroundColor = "red";
    }
    if (money >= 7.984e+97) {
        document.getElementById("a65").style.backgroundColor = "green";
    } else {
        document.getElementById("a65").style.backgroundColor = "red";
    }
    if (money >= 2.49e+99) {
        document.getElementById("a66").style.backgroundColor = "green";
    } else {
        document.getElementById("a66").style.backgroundColor = "red";
    }

}
