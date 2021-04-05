# Generated by Django 3.1.7 on 2021-04-04 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0035_auto_20210404_1445'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dish_name', models.CharField(default='Sushi dish thing something', max_length=1000)),
                ('image', models.ImageField(upload_to='images/')),
                ('subtitle', models.CharField(default='LOREM IPSUM', max_length=300)),
            ],
        ),
    ]