from django.shortcuts import render
from blog.models import Category, Blog
# Create your views here.


def index(request):
    categories = Category.objects.all()
    blogs = Blog.objects.all()
    context = dict()
    context['categories'] = categories
    context['blogNum'] = len(blogs)
    if len(blogs) > 4:
        blogs = blogs[0:4]
    context['blogs'] = blogs
    return render(request, 'index_cn.html', context=context)


def index_en(request):
    return render(request, 'index_en.html')