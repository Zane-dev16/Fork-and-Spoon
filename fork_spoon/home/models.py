from django.db import models
from django.utils import timezone

class Hero(models.Model):
    title = models.CharField(max_length = 100)
    button_text = models.CharField(max_length=30, default="")
    slide = models.ImageField(upload_to='images/', default = "")
    # date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Hero Slide"
    