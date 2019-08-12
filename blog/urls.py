from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', blog_list),
    path('<int:blog_id>', blog_detail),
    # 这是由js发起的ajax请求的视图函数
    path('view', blog_view),
]