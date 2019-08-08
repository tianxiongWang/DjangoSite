from django import forms
from .models import UserProfile
class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

class SignUpForm(forms.ModelForm):
    username = forms.CharField()
    class Meta:
        model = UserProfile
        fields = ['mobile', 'email', 'nickname', 'QQ']
