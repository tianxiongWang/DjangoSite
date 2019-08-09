var username = document.getElementById("username");
// 离开焦点，将触发ajax请求，判断用户是否重复
username.onblur = function () {
    ajaxUsername();
}

function ajaxUsername() {
    alert('1234');
}