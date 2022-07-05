from rest_framework import serializers
from playground.models import Car
from django.core.exceptions import ValidationError


class CarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Car
        fields = ('id', 'car_plate', 'owner_name')
