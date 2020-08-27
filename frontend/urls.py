from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index),
    path('recent', views.index),
    path('history', views.index),
    re_path(r'.png$', views.display_image)
]