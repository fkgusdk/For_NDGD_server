from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework import generics

# 회원가입
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


#만약 로그인기능 잘 안될시
'''
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

class UserLogin(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': '로그인 성공'})
        else:
            return JsonResponse({'message': '로그인 실패'})'''
