# Generated by Django 3.1.7 on 2021-03-18 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0020_auto_20210312_1005'),
    ]

    operations = [
        migrations.AddField(
            model_name='top5',
            name='Description',
            field=models.CharField(default='Portuguese', max_length=1000),
        ),
    ]