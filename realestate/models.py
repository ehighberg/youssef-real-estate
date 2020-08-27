from django.db import models

class Listing(models.Model):
    price = models.CharField(max_length=20)
    beds = models.IntegerField()
    baths = models.DecimalField(max_digits=2, decimal_places=1)
    sq_ft = models.IntegerField()
    address = models.CharField(max_length=100)
    city_state = models.CharField(max_length=100)
    image = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)