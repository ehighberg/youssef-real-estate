from .models import Listing, Image
from .serializers import ListingSerializer, ImageSerializer
from rest_framework import generics, viewsets

class ListingListCreate(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ImageViewSet(generics.ListCreateAPIView):
    http_method_names = ['get']
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    pagination_class = None