from rest_framework import serializers
from .models import CustomUser

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)

class UserDetailSerializer(serializers.ModelField):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'role']