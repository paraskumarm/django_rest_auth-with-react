# -*- coding: utf-8 -*-
from django.http import JsonResponse

# Create your views here.
def home(request):
    return JsonResponse({"name":"paras"})
