# Generated by Django 3.1.7 on 2021-03-19 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0025_auto_20210319_0841'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='Subpage',
            new_name='Appear_on',
        ),
    ]
