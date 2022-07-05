from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from playground.models import Car
from playground.serializers import CarSerializer

# Create your views here.


@csrf_exempt
def carApi(request, id=0):
    if request.method == 'GET':
        car = Car.objects.all()
        car_serializer = CarSerializer(car, many=True)
        return JsonResponse(car_serializer.data, safe=False)
    elif request.method == 'POST':
        car_data = JSONParser().parse(request)
        car_serializer = CarSerializer(data=car_data)
        if car_serializer.is_valid():
            car_serializer.save()
            return JsonResponse(car_serializer.data, status=201)
        return JsonResponse(car_serializer.errors, status=400)
    elif request.method == 'PUT':
        car_data = JSONParser().parse(request)
        car = Car.objects.get(id=car_data['ID'])
        car_serializer = CarSerializer(car, data=car_data)
        if car_serializer.is_valid():
            car_serializer.save()
            return JsonResponse({'message': 'Car information updated successfully!'}, status=201)
        return JsonResponse(car_serializer.errors, status=400)
    elif request.method == 'DELETE':
        car = Car.objects.get(id=id)
        car.delete()
        return JsonResponse({'message': 'Car deleted successfully!'}, status=204)
