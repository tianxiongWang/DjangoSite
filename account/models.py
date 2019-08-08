from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserProfile(models.Model):
    mobile = models.CharField(max_length=11, verbose_name="手机号码")
    email = models.EmailField(default='', verbose_name="电子邮箱")
    nickname = models.CharField(max_length=30, verbose_name="昵称")
    username = models.OneToOneField(User, on_delete=models.CASCADE, default=None, verbose_name="用户名")
    QQ = models.CharField(max_length=10, verbose_name="QQ号码")