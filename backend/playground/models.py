from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.


def validate_car_number_plate(value):
    if value[0:2].isalpha():
        if value[3:5].isdigit():
            return value
    raise ValidationError('Invalid car number plate')


class Car(models.Model):
    id = models.BigAutoField(
        auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    car_plate = models.CharField(max_length=6, unique=True, validators=[
                                 validate_car_number_plate])
    owner_name = models.CharField(max_length=50)
