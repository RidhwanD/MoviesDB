# Generated by Django 4.0.1 on 2022-01-20 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies_api', '0002_alter_movie_duration_alter_movie_quality_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genre',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]