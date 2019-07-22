from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog, Category

# Create your views here.


def blog_list(request):
    categories = Category.objects.all()
    blogs = Blog.objects.all()
    for blog in blogs:
        blog.published = blog.published.strftime("%Y-%m-%d %H:%I:%S")
    context = {}
    context['blogs'] = blogs
    context['categories'] = categories
    return render(request, 'blog.html', context=context)
