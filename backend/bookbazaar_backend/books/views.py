from django.shortcuts import render
from rest_framework import  viewsets, permissions
from  rest_framework.decorators import action
from rest_framework.response import Response
from  .models import Book, Genre, Publisher
from .serializers import BookSerializer,BookCreateSerializer, GenreSerializer, PublisherSerializer
# Create your views here.
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    filterset_fields = ['genre', 'publisher', 'age_limit', 'price']  # Фильтрация по этим полям
    search_fields = ['title']  # Поиск по названию книги
    ordering_fields = ['popularity', 'title', 'publication_date', 'price']

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return BookCreateSerializer
        return BookSerializer
    def perform_create(self, serializer):
        serializer.save()

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def popular(self, request):
        popular_books = Book.objects.order_by('-popularity')[:5]
        serializer = BookSerializer(popular_books, many=True)
        return Response(serializer.data)
    
class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def popular(self, request):
        popular_genres = Genre.objects.order_by('name')[:5]
        serializer = GenreSerializer(popular_genres, many=True)
        return Response(serializer.data)
    

class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def recent(self, request):
        recent_publishers = Publisher.objects.order_by('name')[:5]  # Fetch the 5 most recent publishers
        serializer = self.get_serializer(recent_publishers, many=True)
        return Response(serializer.data)