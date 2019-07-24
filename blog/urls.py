from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', blog_list),
    path('<int:blog_id>', blog_detail),
    path('view', blog_view),
]