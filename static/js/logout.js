var timeOut = 2;
function redirect() {
    console.log(timeOut);
    if (timeOut == 0) {
        window.location.href = "http://127.0.0.1:8000";
    }
    document.getElementById('logout').innerHTML = ""+timeOut+"秒后将跳回主页";
    timeOut = timeOut - 1;
}
window.onload = function () {
    setInterval(redirect, 1000);
}