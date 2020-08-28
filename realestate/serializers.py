from rest_framework import serializers
from django.core.files import File
import base64

from .models import Listing, Image

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'price', 'beds', 'baths', 'sq_ft', 'address', 'city_state')


class ImageSerializer(serializers.ModelSerializer):
    base64_image = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ('base64_image', 'listing_id', 'id')

    def get_base64_image(self, obj):
        f = open(obj.base64_image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data