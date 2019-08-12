from django.shortcuts import render
from blog.models import Category, Blog
# Create your views here.


def index(request):
    categories = Category.objects.all()
    blogs = Blog.objects.all()
    context = dict()
    context['categories'] = categories
    blogNum = len(blogs)
    # 增加判定，判断到底有几篇博客
    if blogNum >= 4:
        blogNum = 4
    context['blogNum'] = blogNum
    if len(blogs) > 4:
        blogs = blogs[0:4]
    context['blogs'] = blogs
    return render(request, 'index_cn.html', context=context)


def index_en(request):
    return render(request, 'index_en.html')