from django.contrib import admin
from .models import NavBar, Hero, HeroTitle, Category, Top5, Post, Example, Feature

homeModels = [Category, NavBar, Hero, HeroTitle, Example, Top5, Post, Feature]

admin.site.register(homeModels)
