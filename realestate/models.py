from django.db import models

from django_s3_storage.storage import S3Storage


class Listing(models.Model):
    price = models.IntegerField()
    beds = models.IntegerField()
    baths = models.DecimalField(max_digits=2, decimal_places=1)
    sq_ft = models.IntegerField()
    address = models.CharField(max_length=100)
    city_state = models.CharField(max_length=100)
    photo = models.ImageField(storage=S3Storage(aws_s3_bucket_name="youssef-real-estate"))
    photo_credit = models.CharField(max_length=200, default='Weichert, Realtors')
