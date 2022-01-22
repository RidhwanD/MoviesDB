# Generated by Django 4.0.1 on 2022-01-20 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('rating', models.FloatField()),
                ('duration', models.IntegerField()),
                ('quality', models.CharField(max_length=10)),
                ('trailer', models.URLField()),
                ('watch', models.URLField()),
                ('genres', models.ManyToManyField(to='movies_api.Genre')),
            ],
        ),
    ]
