# Generated by Django 3.1.7 on 2021-03-19 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0024_auto_20210319_0821'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={},
        ),
        migrations.RemoveField(
            model_name='post',
            name='Top_5_group',
        ),
        migrations.AddField(
            model_name='post',
            name='Subpage',
            field=models.ManyToManyField(to='home.Top5'),
        ),
    ]
