# Generated by Django 3.1.7 on 2021-02-24 13:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20210224_1119'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hero',
            name='title',
        ),
    ]
