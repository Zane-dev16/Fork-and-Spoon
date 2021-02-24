from django.shortcuts import render
from django.http import HttpResponse
from .models import Hero

def home(request):
    context = {
        'slides': Hero.objects.all(),
    }
    return render(request, 'home/home.html', context)

def about(request):
    return HttpResponse('<h1>About</h1>')