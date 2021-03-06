# Generated by Django 4.0.1 on 2022-01-21 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies_api', '0005_remove_movie_genres_movie_genres_delete_genre'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='movie',
            name='genres',
        ),
        migrations.AddField(
            model_name='movie',
            name='genres',
            field=models.ManyToManyField(to='movies_api.Genre'),
        ),
    ]
