from django.shortcuts import render
from django.http import HttpResponse
from .models import NavBar, Hero, HeroTitle, Category


def home(request):
    context = {
        'navbar': NavBar.objects.first(),
        'slides': Hero.objects.all(),
        'title': HeroTitle.objects.first(),
        'categories': Category.objects.all()
    }
    return render(request, 'home/home.html', context)


def about(request):
    return HttpResponse('<h1>About</h1>')
