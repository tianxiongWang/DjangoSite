from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from .forms import LoginForm

# Create your views here.
def user_login(request):
    if request.method == 'GET':
        # 自动生成表单
        login_form = LoginForm()
        context = {}
        context['form'] = login_form
        return render(request, "account/login.html", context=context)
    if request.method == 'POST':
        #用POST请求来初始化表单
        login_form = LoginForm(request.POST)
        # 判断用户输入是否合法
        if login_form.is_valid():
            # 用键值对存储了表单中的数据
            data = login_form.cleaned_data
            user = authenticate(username=data['username'], password=data['password'])
            if user:
                login(request, user)
                request.session['username'] = data['username']
                return redirect('/')
            else:
                return HttpResponse('账号或密码错误')
        else:
            return HttpResponse('登录内容有误')