# Generated by Django 3.1.7 on 2021-02-24 19:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_hero_title'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Hero_Title',
            new_name='HeroTitle',
        ),
        migrations.AlterModelOptions(
            name='herotitle',
            options={'verbose_name': 'Hero Title'},
        ),
    ]
