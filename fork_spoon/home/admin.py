from django.contrib import admin
from .models import NavBar, Hero, HeroTitle, Category, Top5, Top


class TopInline(admin.StackedInline):
    model = Top
    extra = 5


class Top5Admin(admin.ModelAdmin):
    inlines = [TopInline]


homeModels = [Category, NavBar, Hero, HeroTitle]

admin.site.register(homeModels)
admin.site.register(Top5, Top5Admin)
