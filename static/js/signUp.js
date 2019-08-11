var username = document.getElementById("username");
var password = document.getElementById("password");
var password_repeat = document.getElementById("password_repeat");
var mobile = document.getElementById("mobile");
var mobile_identy = document.getElementById("mobile_identy");
// 提前设置好全局变量，这个值是从后台ajax发来的
var identy = "12";
var mobile_button = document.getElementById("mobile_button");
var email = document.getElementById("email");
var nickname = document.getElementById("nickname");
var QQ = document.getElementById("QQ");
var check1 = false, //验证用户名
    check2 = false, //验证密码
    check3 = false, //确认密码
    check4 = false, //手机号码
    check5 = false, //短信验证码
    check6 = false, //电子邮箱
    check7 = false, //昵称
    check8 = false; //QQ号码

window.onload = function () {
    //验证用户名函数
    username.onblur = function () {
        //js的正则表达式,很有必要
        var patrn = /^[a-zA-Z0-9._/]{5,20}$/;
        var usr = username.value;
        var xhr = new XMLHttpRequest();
        var usrResponse = ""
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                usrResponse = xhr.responseText;
                if (usrResponse == "OK" && patrn.test(usr)) {
                    check1 = true;
                    document.getElementsByClassName("check")[0].innerHTML = "<span></span>&nbsp;该用户名合法";
                    document.getElementsByClassName("check")[0].children[0].setAttribute("class", "glyphicon glyphicon-ok");
                    document.getElementsByClassName("check")[0].children[0].setAttribute("style", "color:green;");
                } else {
                    check1 = false;
                    document.getElementsByClassName("check")[0].innerHTML = "<span></span>&nbsp;用户名不合法或与已有用户重复";
                    document.getElementsByClassName("check")[0].children[0].setAttribute("class", "glyphicon glyphicon-remove");
                    document.getElementsByClassName("check")[0].children[0].setAttribute("style", "color:red;");
                }
            }
        }
        xhr.open("get", "/ajax/username?username=" + usr, true);
        xhr.send(null);
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
    //短信验证，发送ajax请求
    mobile_button.onclick = function () {
        var num = mobile.value;
        if (check4 == true) {
            alert("已发送验证码到" + num);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    identy = xhr.responseText;
                }
            }
            xhr.open("get", "/ajax/message?num=" + num, true);
            xhr.send(null);
        } else {
            alert("手机号码不对是不能发送验证码的");
        }
    }
    // 前端验证电子邮箱，用正则表达式匹配
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
    //前端验证昵称，正则表达式匹配
    nickname.onblur = function () {
        var patrn = /^[\w\d]+$/;
        var nick = nickname.value;
        check7 = patrn.test(nick);
        if (check7 == true) {
            document.getElementsByClassName("check")[6].innerHTML = "<span></span>&nbsp;可选取本昵称";
            document.getElementsByClassName("check")[6].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[6].children[0].setAttribute("style", "color:green;");
        }
        if (check7 == false) {
            document.getElementsByClassName("check")[6].innerHTML = "<span></span>&nbsp;昵称格式不对";
            document.getElementsByClassName("check")[6].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[6].children[0].setAttribute("style", "color:red;");
        }
    }
    // 前端验证qq号码，正则表达式匹配
    QQ.onblur = function () {
        var patrn = /^[\d]{4,10}$/;
        var qq = QQ.value;
        check8 = patrn.test(qq);
        if (check8 == true) {
            document.getElementsByClassName("check")[7].innerHTML = "<span></span>&nbsp;是一个可用的QQ";
            document.getElementsByClassName("check")[7].children[0].setAttribute("class", "glyphicon glyphicon-ok");
            document.getElementsByClassName("check")[7].children[0].setAttribute("style", "color:green;");
        }
        if (check8 == false) {
            document.getElementsByClassName("check")[7].innerHTML = "<span></span>&nbsp;这不是QQ号码哦";
            document.getElementsByClassName("check")[7].children[0].setAttribute("class", "glyphicon glyphicon-remove");
            document.getElementsByClassName("check")[7].children[0].setAttribute("style", "color:red;");
        }
    }
}


function checkForm() {
    if (mobile_identy.value == identy) {
        check5 = true;
    }
    console.log("check1:", check1);
    console.log("check2:", check2);
    console.log("check3:", check3);
    console.log("check4:", check4);
    console.log("check5:", check5);
    console.log("check6:", check6);
    console.log("check7:", check7);
    console.log("check8:", check8);
    if (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8) {
        return true;
    } else {
        return false;
    }
}