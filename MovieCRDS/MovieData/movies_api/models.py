from django.db import models

# 'Genre' model class.
# Containing:
# - 'id' as primary key, and
# - 'name' of the genre.
class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


# 'Movie' model class.
# Containing:
# - 'id' as primary key,
# - 'title' of the movie,
# - 'genres' of the movie as a many-to-many relationship with the class Genre,
# - 'rating' of the movie in the scale of 1 to 10,
# - 'duration' of the movie,
# - 'quality' of the provided movie URL,
# - 'trailer' URL of the movie, and
# - 'watch' URL of the movie.
class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False)
    genres = models.ManyToManyField(Genre)
    rating = models.FloatField(null=True, blank=True)
    duration = models.IntegerField(null=True, blank=True)
    quality = models.CharField(max_length=10, null=True, blank=True)
    trailer = models.URLField(null=True, blank=True)
    watch = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title
