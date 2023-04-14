import abc
from genericpath import exists
from django.contrib.auth.backends import UserModel
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login,logout
# Create your views here.
import random
import re

def generate_session_token(length=10):

    arr=[]
    for i in range(0,26):
        arr.append(chr(i+97))
    for i in range(10):
        arr.append(str(i))
    s=""
    for i in range(10):
        s+=random.SystemRandom().choice(arr) 
    return s

@csrf_exempt 
def signin(request):
    if not request.method =='POST':
        return JsonResponse({'error':'Send a post request with a valid parameter'}) 
    # username=request.POST['username']
    password=request.POST['password']
    email=request.POST['email']
    UserModel=get_user_model()

    try:
        user=UserModel.objects.get(email=email)
        if user.check_password(password):
           
            usr_dict=UserModel.objects.filter(email=email).values().first()
            usr_dict.pop('password')

            if user.session_token!="0":
                user.session_token="0"
                user.save()
                return JsonResponse({'error':'Previous session exists'})
            token=generate_session_token()
            user.session_token=token
            user.save()
            login(request,user)
            return JsonResponse({'token':token,'user':usr_dict})
        else:
            return JsonResponse({'error':'Invalid Password'})
    except UserModel.DoesNotExist:
        return JsonResponse({'error':'Invalid email'})

def signout(request, id):
    logout(request)
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid user ID'})
    return JsonResponse({'success': 'Logout success'})
    
class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create': [AllowAny]}
    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer
    
    