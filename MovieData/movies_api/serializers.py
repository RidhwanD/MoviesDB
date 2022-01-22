from rest_framework import serializers
from .models import Movie, Genre
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'
        depth = 1


class MovieAddSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
