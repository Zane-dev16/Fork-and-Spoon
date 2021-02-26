from django.contrib import admin
from .models import Hero, HeroTitle, NavBar

homeModels = [Hero, HeroTitle, NavBar]
admin.site.register(homeModels)
