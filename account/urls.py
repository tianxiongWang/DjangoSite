from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from .views import user_login, user_signup

urlpatterns = [
    path('login/', user_login, name='user_login'),
    path('signup/', user_signup),
    # path('login/', auth_views.LoginView.as_view(template_name='account/login2.html'), name='user_login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='account/logout.html'), name='user_logout')
]