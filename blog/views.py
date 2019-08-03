from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog, Category
# Create your views here.


def blog_list(request):
    categories = Category.objects.all()
    blogs = Blog.objects.all()
    blogs_see = blogs.order_by('-see')
    # 设置不重复的年月类别，并传送到前端模板
    YearMonth = set()
    for blog in blogs:
        YearMonth.add((blog.published.year, blog.published.month))
    counter = {}.fromkeys(YearMonth, 0)
    for blog in blogs:
        counter[(blog.published.year, blog.published.month)] += 1
        blog.published = blog.published.strftime("%Y-%m-%d %H:%I:%S")
    #这个是传递到前端的最终数据
    yearMonth = []
    for count in counter:
        yearMonth.append(("%s年%s月" % (count), counter[count]))
    print(yearMonth)
    context = {}
    context['blogs'] = blogs
    context['categories'] = categories
    # 最受欢迎的五篇博客
    context['blogs_see'] = blogs_see[0:5]
    context['yearMonth'] = yearMonth
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