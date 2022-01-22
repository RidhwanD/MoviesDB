from .models import Movie, Genre
from .serializers import MovieSerializer, UserSerializer, GenreSerializer, MovieAddSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import filters

# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class MovieAddViewSet(viewsets.ModelViewSet):
    serializer_class = MovieAddSerializer
    queryset = Movie.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class GenreViewSet(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MovieFilterViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']