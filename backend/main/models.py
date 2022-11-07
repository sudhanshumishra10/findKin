from django.db import models

# Create your models here.

class People(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    aadhar_no = models.CharField(max_length=50)
    age = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    contact = models.CharField(max_length=50)
    address = models.TextField(max_length=500)
    clothes_color = models.CharField(max_length=100)
    height = models.CharField(max_length=50)
    weight = models.CharField(max_length=50)
    height_characterstics = models.CharField(max_length=50)
    body_characterstics = models.CharField(max_length=50)
    complexion = models.CharField(max_length=50)
    hair_color = models.CharField(max_length=50)


    def __str__(self):
        return self.name

class PeopleFound(models.Model):
    reporter_name = models.CharField(max_length=100)
    contact = models.CharField(max_length=50)
    # name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    missing_name = models.CharField(max_length=100)
    clothes_color = models.CharField(max_length=100)
    aadhar_no = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    height_characterstics = models.CharField(max_length=50)
    body_characterstics = models.CharField(max_length=50)
    complexion = models.CharField(max_length=50)
    hair_characterstics = models.CharField(max_length=50)

    def __str__(self):
        return self.missing_name
