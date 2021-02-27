from django.db import models
# from django.utils import timezone


class NavBar(models.Model):
    logo = models.ImageField(upload_to="images/", default="")
    logo_text = models.ImageField(upload_to="images/", default="")

    link_1 = models.CharField(max_length=50, default="eat")
    link_2 = models.CharField(max_length=50, default="drink")
    link_3 = models.CharField(max_length=50, default="events")
    link_4 = models.CharField(max_length=50, default="experience")
    link_5 = models.CharField(max_length=50, default="about")
    link_6 = models.CharField(max_length=50, default="contact")

    button_text = models.CharField(max_length=50, default="DEALS")

    class Meta:
        verbose_name_plural = "Navigation bar"

    name = Meta()

    def save(self, *args, **kwargs):
        if not self.pk and NavBar.objects.exists():
            raise SystemError(f'ATTEMPTED TO CREATED 2 {self.name.verbose_name_plural.upper()}S, There can only be one {self.name.verbose_name_plural.lower()}')
        return super(NavBar, self).save(*args, **kwargs)

    def __str__(self):
        return "Navigation bar"


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
