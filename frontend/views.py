from django.shortcuts import render
from django.http import FileResponse


def index(request):
    print(request)
    return render(request, 'frontend/index.html')


def display_image(request):
    print(request.attrs)
    image_data = open(request, 'rb')
    return FileResponse(image_data, content_type='image/png')