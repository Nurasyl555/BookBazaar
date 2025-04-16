from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CustomUser
from .serializers import UserDetailSerializer, UserRegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.
# Регистрация пользователя
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'user': UserDetailSerializer(user).data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Логин и выдача JWT
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = CustomUser.objects.filter(username=username).first()
    if user and user.check_password(password):
        refresh = RefreshToken.for_user(user)
        return  Response({"access": str(refresh.access_token)}, status=status.HTTP_200_OK)
    return  Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

