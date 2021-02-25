from django.db import models
# from django.utils import timezone


class Hero(models.Model):
    button_text = models.CharField(max_length=30, default="")
    slide = models.ImageField(upload_to='images/', default="")
    # date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.button_text

    class Meta:
        verbose_name = "Hero Slide"


class HeroTitle(models.Model):
    title = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Hero Title"

    def __str__(self):
        return self.title
