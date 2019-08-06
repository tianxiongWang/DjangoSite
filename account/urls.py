from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from .views import *

urlpatterns = [
    # path('login/', user_login),
    path('login/', auth_views.LoginView.as_view(template_name='account/login2.html'), name='user_login'),
]