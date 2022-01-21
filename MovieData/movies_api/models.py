from django.db import models

# Create your models here.
class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False)
    genres = models.ManyToManyField(Genre)
    rating = models.FloatField(null=True)
    duration = models.IntegerField(null=True)
    quality = models.CharField(max_length=10, null=True)
    trailer = models.URLField(null=True)
    watch = models.URLField(null=True)

    def __str__(self):
        return self.title
