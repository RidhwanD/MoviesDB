from django.db import models

# 'Genre' model class.
class Genre(models.Model):
    id = models.AutoField(primary_key=True, help_text=("Unique alphanumeric identifier"))
    name = models.CharField(max_length=100, null=False, help_text=("A string stating the name of the genre"))

    def __str__(self):
        return self.name


# 'Movie' model class.
class Movie(models.Model):
    id = models.AutoField(primary_key=True, help_text=("Unique alphanumeric identifier"))
    title = models.CharField(max_length=100, null=False, help_text=("A string stating the title of the movie"))
    genres = models.ManyToManyField(Genre, help_text=("The list of genres of the movie"))
    rating = models.FloatField(null=True, blank=True, help_text=("A float stating the rating of the movie in range 0 - 10"))
    duration = models.IntegerField(null=True, blank=True, help_text=("An integer specifying the duration of the movie in hour"))
    quality = models.CharField(max_length=10, null=True, blank=True, help_text=("A string determining the quality of the movie video"))
    trailer = models.URLField(null=True, blank=True, help_text=("A URL pointing to the movie trailer"))
    watch = models.URLField(null=True, blank=True, help_text=("A URL pointing to the movie video"))

    def __str__(self):
        return self.title
