from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog, Category
# Create your views here.


def blog_list(request):
    categories = Category.objects.all()
    blogs = Blog.objects.all()
    blogs_see = blogs.order_by('-see')
    for blog in blogs:
        blog.published = blog.published.strftime("%Y-%m-%d %H:%I:%S")
    context = {}
    context['blogs'] = blogs
    context['categories'] = categories
    context['blogs_see'] = blogs_see[0:5]
    return render(request, 'blog.html', context=context)


def blog_detail(request, blog_id):
    blog = Blog.objects.get(id=blog_id)
    blog.see += 1
    blog.save()
    return HttpResponse("第%s个博客详细界面" % blog_id)

#用ajax加载的动态显示，传给前端方便解析，我用逗号隔开每个元素。
#下面注释掉的代码是不用ajax方式加载
def blog_view(request):
    blogs = Blog.objects.all()
    List = list()
    for blog in blogs:
        List.append(str(blog.see) + ',')
    return HttpResponse(List)