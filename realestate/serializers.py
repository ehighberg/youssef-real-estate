from rest_framework import serializers

from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'price', 'beds', 'baths', 'sq_ft', 'address', 'city_state', 'photo', 'photo_credit')
