from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'frontend/index.html')


def display_image(request):
    print(request)
    image_data = open(request, 'rb').read()
    return HttpResponse(image_data, content_type='image/png')