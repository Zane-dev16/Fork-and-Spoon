# Generated by Django 3.1.7 on 2021-04-04 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0033_remove_post_appear_on'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='Eat',
            field=models.BooleanField(default=False),
        ),
    ]
