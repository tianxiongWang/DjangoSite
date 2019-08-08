from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserProfile(models.Model):
    mobile = models.CharField(max_length=11)
    email = models.EmailField()
    nickname = models.OneToOneField(User, on_delete=models.CASCADE)
