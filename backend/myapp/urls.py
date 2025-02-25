from django.urls import path
from myapp.views import * # import all

urlpatterns = [
    
    path('', login)
]
