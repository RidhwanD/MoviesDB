from rest_framework import serializers
from .models import Movie, Genre
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class GenreSerializer(serializers.ModelSerializer):
# A serializer for the Genre model.
    class Meta:
        model = Genre
        fields = '__all__'          # Use all fields of the genre table.


class MovieSerializer(serializers.ModelSerializer):
# A serializer for the Movie model.
    class Meta:
        model = Movie
        fields = '__all__'          # Use all fields of the movie table.
        depth = 1                   # Use depth = 1 to retrieve also the Genre data from the many-to-many relationship


class MovieAddSerializer(serializers.ModelSerializer):
# A serializer for the Movie model specifically to handle adding new movie.
# Does not require depth = 1.
    class Meta:
        model = Movie
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
# A serializer for the User model.
# Using this, authentication is supported.
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write_only': True,     # Ensure that password cannot be read using the API.
            'required': True
        }}

    # Handle the creation of a token for authentication everytime a new user register.
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
