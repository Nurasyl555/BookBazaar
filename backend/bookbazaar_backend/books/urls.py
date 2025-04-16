from django.urls import path
from .views import BookViewSet, GenreViewSet, PublisherViewSet

urlpatterns = [
    # BookViewSet URLs
    path('', BookViewSet.as_view({'get': 'list', 'post': 'create'}), name='book-list'),
    path('<int:pk>/', BookViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='book-detail'),
    path('popular/', BookViewSet.as_view({'get': 'popular'}), name='book-popular'),

    # GenreViewSet URLs
    path('genres/', GenreViewSet.as_view({'get': 'list', 'post': 'create'}), name='genre-list'),
    path('genres/<int:pk>/', GenreViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='genre-detail'),
    path('genres/popular/', GenreViewSet.as_view({'get': 'popular'}), name='genre-popular'),

    # PublisherViewSet URLs
    path('publishers/', PublisherViewSet.as_view({'get': 'list', 'post': 'create'}), name='publisher-list'),
    path('publishers/<int:pk>/', PublisherViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='publisher-detail'),
    path('publishers/recent/', PublisherViewSet.as_view({'get': 'recent'}), name='publisher-recent'),
]