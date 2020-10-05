from django.urls import path
from . import views


urlpatterns = [
    path('api/listing/', views.ListingListCreate.as_view()),
]
