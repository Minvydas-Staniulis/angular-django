from django.urls import re_path
from playground import views

urlpatterns = [
    re_path(r'^car$', views.carApi),
    re_path(r'^car/([0-9]+)$', views.carApi)
]
