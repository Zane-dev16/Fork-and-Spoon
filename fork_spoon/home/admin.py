from django.contrib import admin
from .models import NavBar, Hero, HeroTitle

homeModels = [NavBar, Hero, HeroTitle]
admin.site.register(homeModels)
