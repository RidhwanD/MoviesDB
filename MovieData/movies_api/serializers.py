from rest_framework import serializers
from .models import Movie

# class GenreSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Genre
#         fields = ('id', 'name')
#
#     def create(self, validated_data):
#         return Genre.objects.create(**validated_data)

class MovieSerializer(serializers.ModelSerializer):
    # genres = GenreSerializer(many=True)

    class Meta:
        model = Movie
        fields = '__all__'

    # def create(self, validated_data):
    #     genres_data = validated_data.get('genres', None)
    #     movie = Movie.objects.create(**validated_data)
    #     for genre_data in genres_data:
    #         movie.genres.add(genre_data)
    #     return movie
