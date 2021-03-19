from django.contrib import admin
from .models import NavBar, Hero, HeroTitle, Category, Top5, Post, Example

homeModels = [Category, NavBar, Hero, HeroTitle, Example, Top5, Post]

admin.site.register(homeModels)
