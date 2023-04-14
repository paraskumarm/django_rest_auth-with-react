from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import authentication_classes,permission_classes
from .models import CustomUser
from django.http import JsonResponse
import re
from rest_framework.response import Response

class UserSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
        password=validated_data.pop('password',None)
        instance=self.Meta.model(**validated_data)
        if(password is not None):
            instance.set_password(password)
        #EMAIL VALIDATION
        if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$",instance.email):
            return JsonResponse({'error':'Enter a valid email'})

        #MOBILE VALIDATION
        if not re.match("^[0-9]{10}$",instance.mobile):
            instance.error='Invalid mobile number'
            return instance

        #USERNAME VALIDATION
        if not re.match("^[a-zA-Z]",instance.username):
            instance.error='Invalid username'
            return instance  
        #PASSWORD VALIDATION
        if not re.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",password):
            instance.error='Password should be alphanumeric of atleast 8 characters'
            return instance 
        instance.save()
        return instance
    

    class Meta:   
        model=CustomUser
        extra_kwargs={'password':{'write_only':True}}
        fields=('id','error','username','email','password','mobile','address') 