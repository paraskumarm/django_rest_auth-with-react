
from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    
    email=models.EmailField(max_length=254,unique=True)
    mobile=models.CharField(max_length=10,default="Not Known")
    address=models.CharField(max_length=500,default="Not Known")
    session_token=models.CharField(max_length=1000,default=0)
    error=models.CharField(max_length=100,default="None")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    # pass