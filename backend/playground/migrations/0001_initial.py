# Generated by Django 4.0.6 on 2022-07-05 12:01

from django.db import migrations, models
import playground.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('car_plate', models.CharField(max_length=6, unique=True, validators=[playground.models.validate_car_number_plate])),
                ('owner_name', models.CharField(max_length=50)),
            ],
        ),
    ]
