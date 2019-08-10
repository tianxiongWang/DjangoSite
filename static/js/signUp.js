var username = document.getElementById("username");
var password = document.getElementById("password");
var password_repeat = document.getElementById("password_repeat");
var mobile = document.getElementById("mobile");
var mobile_identy = document.getElementById("mobile_identy");
var email = document.getElementById("email");
var nickname = document.getElementById("nickname");
var QQ = document.getElementById("QQ");
var check1 = 0, //验证用户名
    check2 = 0, //验证密码
    check3 = 0,
    check4 = 0,
    check5 = 0,
    check6 = 0,
    check7 = 0,
    check8 = 0;

window.onload = function () {
    username.onblur = function () {
        var patrn = /[a-zA-Z0-9._/]{5,20}/;
        var usr = username.value;
        check1 = patrn.test(usr);
        if (check1 == true) {
            document.getElementsByClassName("check")[0].innerHTML = "<span></span>&nbsp;该用户名合法";
            document.getElementsByClassName("check")[0].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[0].children[0].setAttribute("style", "color:green;");
        }
        if (check1 == false) {
            document.getElementsByClassName("check")[0].innerHTML = "<span></span>&nbsp;长度应在5到20位;可以是字母、数字、下划线";
            document.getElementsByClassName("check")[0].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[0].children[0].setAttribute("style", "color:red;");
        }
    }
    password.onblur = function () {
        var patrn = /[a-zA-Z0-9._/]{8,20}/;
        var pwd = password.value;
        check2 = patrn.test(pwd);
        if (check2 == true) {
            document.getElementsByClassName("check")[1].innerHTML = "<span></span>&nbsp;该密码符合要求";
            document.getElementsByClassName("check")[1].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[1].children[0].setAttribute("style", "color:green;");
        }
        if (check2 == false) {
            document.getElementsByClassName("check")[1].innerHTML = "<span></span>&nbsp;请输入密码,密码长度应在8位以上";
            document.getElementsByClassName("check")[1].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[1].children[0].setAttribute("style", "color:red;");
        }
    }
}


function checkForm() {
    alert(check1);
    return false;
}