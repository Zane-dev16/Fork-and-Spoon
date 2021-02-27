from django.contrib import admin
from .models import NavBar, Hero, HeroTitle, Category

homeModels = [Category, NavBar, Hero, HeroTitle]
admin.site.register(homeModels)
