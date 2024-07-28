from django.http import HttpResponse, JsonResponse


def home(request):
    return HttpResponse("Hello from Dev!")
