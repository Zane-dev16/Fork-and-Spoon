from django.shortcuts import render
from django.http import HttpResponse
from .models import NavBar, Hero, HeroTitle, Category, Top5, Example, Feature, Recipe


def home(request):
    context = {
        'navbar': NavBar.objects.first(),
        'slides': Hero.objects.all(),
        'title': HeroTitle.objects.first(),
        'categories': Category.objects.all(),
        'top5': Top5.objects.all(),
        'example': Example.objects.first(),
        'featured_chef': Feature.objects.get(category="featured chef"),
        'featured_FandB': Feature.objects.get(category="featured F&B"),
        'recipes': Recipe.objects.all()
    }
    return render(request, 'home/home.html', context)


def about(request):
    return HttpResponse('<h1>About</h1>')
