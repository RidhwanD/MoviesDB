# Generated by Django 4.0.1 on 2022-01-20 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies_api', '0003_alter_genre_id_alter_movie_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genre',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
