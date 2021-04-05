from django.contrib import admin
from .models import NavBar, Hero, HeroTitle, Category, Top5, Post, Example, Feature, Recipe


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {'fields': ('image', 'name', 'description')}),
        ('Appear On', {
            'fields': ('eat',),
            'classes': ('collapse')
        })
    )


homeModels = [Category, NavBar, Hero, HeroTitle, Example, Top5, Feature, Recipe]
admin.site.register(homeModels)
