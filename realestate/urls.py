from django.urls import path
from . import views

urlpatterns = [
    path('api/listings', views.ListingListCreate.as_view()),
]