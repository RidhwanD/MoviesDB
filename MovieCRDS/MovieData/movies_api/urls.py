"""MovieData URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from .views import MovieViewSet, UserViewSet, GenreViewSet, MovieFilterViewSet, MovieAddViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('movies', MovieViewSet, basename="Movies")
router.register('movies-add', MovieAddViewSet, basename="AddMovies")
router.register('genres', GenreViewSet, basename="Genres")
router.register('search', MovieFilterViewSet, basename="Search")
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
