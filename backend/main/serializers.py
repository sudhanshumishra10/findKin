from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

from .models import People, PeopleFound

class PeopleSerializer(serializers.ModelSerializer):
    image=Base64ImageField() # From DRF Extra Fields
    class Meta:
        model = People
        fields = ['name', 'image', 'aadhar_no', 'age', 'gender', 'contact', 'address', 'clothes_color', 'height', 'weight', 'height_characterstics', 'body_characterstics', 'complexion', 'hair_color']

    def create(self, validated_data):
        image=validated_data.pop('image')
        name=validated_data.pop('name')
        aadhar_no=validated_data.pop('aadhar_no')
        age=validated_data.pop('age')
        gender=validated_data.pop('gender')
        contact=validated_data.pop('contact')
        address=validated_data.pop('address')
        clothes_color=validated_data.pop('clothes_color')
        height=validated_data.pop('height')
        weight=validated_data.pop('weight')
        height_characterstics=validated_data.pop('height_characterstics')
        body_characterstics=validated_data.pop('body_characterstics')
        complexion=validated_data.pop('complexion')
        hair_color=validated_data.pop('hair_color')
        return People.objects.create(name=name,image=image,aadhar_no=aadhar_no,age=age,gender=gender,contact=contact,address=address,clothes_color=clothes_color,height=height,weight=weight,height_characterstics=height_characterstics,body_characterstics=body_characterstics,complexion=complexion,hair_color=hair_color)

class PeopleFoundSerializer(serializers.ModelSerializer):
    image=Base64ImageField() # From DRF Extra Fields
    class Meta:
        model = PeopleFound
        fields = ['reporter_name', 'contact', 'image', 'missing_name', 'clothes_color', 'aadhar_no', 'gender', 'height_characterstics', 'body_characterstics', 'complexion', 'hair_characterstics']