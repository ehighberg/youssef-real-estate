from django.db import models

class Listing(models.Model):
    price = models.CharField(max_length=20)
    beds = models.IntegerField()
    baths = models.DecimalField(max_digits=2, decimal_places=1)
    sq_ft = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    city_state = models.CharField(max_length=100)
    photo_credit = models.CharField(max_length=200, default='Weichert, Realtors')


class Image(models.Model):
    base64_image = models.ImageField(upload_to='media/')
    listing_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)