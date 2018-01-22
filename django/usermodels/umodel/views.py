from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth import login, get_user_model, logout
from .forms import UserCreationForm, UserLoginForm
# Create your views here.
from .models import Profile
User = get_user_model()

def home(request):
    if request.user.is_authenticated():
        print(request.user.profile.city)
    q = Profile.objects.all()
    return render(request, "umodel/home.html", {'q': q})


def register(request,*args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = UserCreationForm()
    return render(request, "umodel/register.html", {"form": form})


def user_login(request,*args, **kwargs):
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        user_obj = form.cleaned_data.get('user_obj')
        user_obj.backend = 'django.contrib.auth.backends.ModelBackend'
        login(request, user_obj)
        return HttpResponseRedirect("/profile/")
    return render(request, "umodel/login.html", {"form": form})


def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/profile/login')
