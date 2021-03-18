from django.db import models
# from django.utils import timezone


class NavBar(models.Model):
    logo = models.ImageField(upload_to="images/", default="")
    logo_text = models.ImageField(upload_to="images/", default="")

    link_1 = models.CharField(max_length=50)
    link_2 = models.CharField(max_length=50)
    link_3 = models.CharField(max_length=50)
    link_4 = models.CharField(max_length=50)
    link_5 = models.CharField(max_length=50)
    link_6 = models.CharField(max_length=50)

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
    button_text = models.CharField(max_length=30)
    slide = models.ImageField(upload_to='images/')
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


class Category(models.Model):
    category_name = models.CharField(max_length=50)

    image = models.ImageField(upload_to='images/')

    category_description = models.TextField()

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.category_name


class Top5(models.Model):
    Top_5 = models.CharField(max_length=100, default="Portuguese")

    Description = models.TextField(default="Portuguese")

    def create_links(self):
        string = self.Description
        if "{" in string:
            bracket_text = string[string.index("{"):string.index("]") + 1]
            link_text = string[string.index("{") + 1:string.index("}")]
            link = string[string.index("[") + 1:string.index("]")]
            self.Description = string.replace(bracket_text, f"<a href='{link}'>{link_text}</a>")
            return self.create_links()
        return string

    def __str__(self):
        return "Top 5 " + self.Top_5


class Top(models.Model):
    Top_5_group = models.ForeignKey(Top5, on_delete=models.CASCADE)

    image = models.ImageField(upload_to="images/")
    restaurant_name = models.CharField(max_length=100)
    description = models.TextField(default="", blank=True)

    class Meta:
        verbose_name_plural = "Dishes"


class Example(models.Model):
    image = models.ImageField(upload_to='images/')
