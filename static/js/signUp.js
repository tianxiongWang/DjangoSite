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
    check3 = 0, //确认密码
    check4 = 0, //手机号码
    check5 = 0, //短信验证码
    check6 = 0, //电子邮箱
    check7 = 0, //昵称
    check8 = 0; //QQ号码

window.onload = function () {
    //验证用户名函数
    username.onblur = function () {
        //js的正则表达式,很有必要
        var patrn = /^[a-zA-Z0-9._/]{5,20}$/;
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
    //验证密码函数
    password.onblur = function () {
        var patrn = /^[a-zA-Z0-9._/]{8,20}$/;
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
    //验证密码确认函数
    password_repeat.onblur = function () {
        check3 = (password.value == password_repeat.value && check2);
        if (check3 == true) {
            document.getElementsByClassName("check")[2].innerHTML = "<span></span>&nbsp;密码验证成功";
            document.getElementsByClassName("check")[2].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[2].children[0].setAttribute("style", "color:green;");
        }
        if (check3 == false) {
            document.getElementsByClassName("check")[2].innerHTML = "<span></span>&nbsp;两次密码不一致,请重新来过";
            document.getElementsByClassName("check")[2].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[2].children[0].setAttribute("style", "color:red;");
        }
    }
    //验证手机号码函数,手机设置为11位的纯数字,在模型中手机号码是以字符串存储的，还算比较方便
    mobile.onblur = function () {
        var patrn = /^1[0-9]{10}$/;
        var num = mobile.value;
        check4 = patrn.test(num);
        if (check4 == true) {
            document.getElementsByClassName("check")[3].innerHTML = "<span></span>&nbsp;手机号暂且是对的";
            document.getElementsByClassName("check")[3].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[3].children[0].setAttribute("style", "color:green;");
        }
        if (check4 == false) {
            document.getElementsByClassName("check")[3].innerHTML = "<span></span>&nbsp;手机号最起码是11位吧？";
            document.getElementsByClassName("check")[3].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[3].children[0].setAttribute("style", "color:red;");
        }
    }
    email.onblur = function () {
        var patrn = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var Edress = email.value;
        check6 = patrn.test(Edress);
        if (check6 == true) {
            document.getElementsByClassName("check")[5].innerHTML = "<span></span>&nbsp;是合法邮箱";
            document.getElementsByClassName("check")[5].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[5].children[0].setAttribute("style", "color:green;");
        }
        if (check6 == false) {
            document.getElementsByClassName("check")[5].innerHTML = "<span></span>&nbsp;请填写正确的邮箱";
            document.getElementsByClassName("check")[5].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[5].children[0].setAttribute("style", "color:red;");
        }
    }
}


function checkForm() {
    alert(check1);
    return false;
}