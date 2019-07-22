from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.CharField(max_length=30)
    # 设置外键引用，引用作者
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="blogs")
    # 设置外键引用，引用分类
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="blogs")
    body = models.TextField()
    # 设置自动添加时间戳
    published = models.DateTimeField(auto_now_add=True)
    #浏览量
    see = models.IntegerField(default=0)

    class Meta:
        # 按时间倒序排列在后台管理器
        ordering = ["-published"]

    def __str__(self):
        return self.title
