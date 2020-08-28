from django.shortcuts import render
from django.http import FileResponse


def index(request):
    return render(request, 'frontend/index.html')
