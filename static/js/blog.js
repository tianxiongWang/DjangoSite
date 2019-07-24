var xhr = new XMLHttpRequest();
xhr.open('get', '/blog/view', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        response = xhr.responseText;
        console.log(this.response);
        var list = this.response.split(',');
        console.log(list[0]);
        num = document.getElementsByClassName('bloginfo').length;
        console.log(num);
        for (var i = 0; i < num; i++){
            document.getElementsByClassName('viewNum')[i].innerHTML = '<span class="glyphicon glyphicon-eye-open"></span>&nbsp;' + list[i];
        }
    }
}
xhr.send(null);