var username = document.getElementById("username");
var password = document.getElementById("password");
var password_repeat = document.getElementById("password_repeat");
var mobile = document.getElementById("mobile");
var mobile_identy = document.getElementById("mobile_identy");
var email = document.getElementById("email");
var nickname = document.getElementById("nickname");
var QQ = document.getElementById("QQ");
var check1 = 0,
    check2 = 0,
    check3 = 0,
    check4 = 0,
    check5 = 0,
    check6 = 0,
    check7 = 0,
    check8 = 0;

window.onload = function () {
    username.onblur = function () {
        var patrn = /[a-zA-Z0-9._/]{5,20}/;
        var usr = username.valuel;
        check1 = patrn.test(usr);
        if (check1 == true) {
            document.getElementsByClassName("check")[0].innerHTML = "<span></span>&nbsp;该用户名合法";
            document.getElementsByClassName("check")[0].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[0].children[0].setAttribute("style", "color:green;");
        }
    }
}


function checkForm() {
    alert(check1);
    return false;
}