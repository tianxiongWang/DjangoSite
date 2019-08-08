from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserProfile(models.Model):
    mobile = models.IntegerField(default=0)
    email = models.EmailField(default=' ')
    nickname = models.CharField(default="user",max_length=30)
    username = models.OneToOneField(User, on_delete=models.CASCADE, default=None)
    QQ = models.IntegerField()