from .models import Listing
from .serializers import ListingSerializer
from rest_framework import generics

class ListingListCreate(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer