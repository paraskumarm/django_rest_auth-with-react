# added mannualy
# from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken import views
from .views import home
urlpatterns = [
    path('', home,name="home"),
    path('user/', include('api.user_api.urls')),
]
