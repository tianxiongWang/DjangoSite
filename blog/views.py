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


def blog_detail(request, blog_id):
    blog = Blog.objects.get(id=blog_id)
    blog.see += 1
    blog.save()
    return HttpResponse("第%s个博客详细界面" % blog_id)