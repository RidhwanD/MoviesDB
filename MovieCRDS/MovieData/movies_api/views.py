from .models import Movie, Genre
from .serializers import MovieSerializer, UserSerializer, GenreSerializer, MovieAddSerializer
from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import filters

# Create your views here.

# ModelViewSet for retrieving movies data
class MovieViewSet(mixins.ListModelMixin, mixins.DestroyModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    list:
    Return a list of all the existing movies.

    retrieve:
    Retrieve a movie instance based on id.

    destroy:
    Delete a movie instance based on id.
    """
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    authentication_classes = [TokenAuthentication]      # Authentication is required.
    permission_classes = [IsAuthenticated]

# ModelViewSet for adding new movie data
class MovieAddViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    create:
    Create a new movie instance.
    """
    serializer_class = MovieAddSerializer
    queryset = Movie.objects.all()
    authentication_classes = [TokenAuthentication]      # Authentication is required.
    permission_classes = [IsAuthenticated]

# ModelViewSet for retrieving genres data
class GenreViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    list:
    Return a list of all the existing genres.
    """
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()
    authentication_classes = [TokenAuthentication]      # Authentication is required.
    permission_classes = [IsAuthenticated]

# ModelViewSet for retrieving users data
class UserViewSet(mixins.ListModelMixin, mixins.DestroyModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    list:
    Return a list of all the existing users.

    retrieve:
    Retrieve a user instance based on id.

    destroy:
    Delete a user instance based on id.

    create:
    Create a new user instance.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()

# ModelViewSet for searching a movie based on a query
class MovieFilterViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    list:
    Return a list of all the existing movies whose title matched the query.
    """
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    filter_backends = [filters.SearchFilter]            # Only using basic search filter.
    search_fields = ['title']                           # Only support searching in the title field.
    authentication_classes = [TokenAuthentication]      # Authentication is required.
    permission_classes = [IsAuthenticated]
