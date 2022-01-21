from django.shortcuts import get_object_or_404
from .models import Movie
from .serializers import MovieSerializer
from rest_framework import viewsets, mixins

# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
