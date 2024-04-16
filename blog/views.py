from django.shortcuts import render,HttpResponse

# Create your views here.
def home(request):
    return HttpResponse("this is the home")

def blog(request):
    return HttpResponse("this is blog")

def blogpost(request,slug):
    return HttpResponse(f"this is the blog{slug}")

def contacts(request):
    return HttpResponse("contact me")
