from urllib import response
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.db.models import Q 

from .models import People, PeopleFound
from .serializers import PeopleSerializer, PeopleFoundSerializer

# Create your views here.


@api_view(['GET','POST'])
def PeopleView(request, pk=None):
    if request.method == 'GET':
        people = People.objects.all()
        # people = get_object_or_404(People, pk=pk)
        serializer = PeopleSerializer(people, many=True)
        # print("SERIALIZER=",serializer.data)
        return Response(serializer.data)

    if request.method == 'POST':
        print(request)
        # people = get_object_or_404(People, pk=pk)
        serializer = PeopleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PeopleFoundView(APIView):
    def get(self, request):
        people = PeopleFound.objects.all()
        # people = get_object_or_404(PeopleFound, pk=pk)
        serializer = PeopleFoundSerializer(people, many=True)
        print("SERIALIZER=",serializer.data)
        return Response(serializer.data)

    def post(self, request):
        # people = get_object_or_404(PeopleFound, pk=pk)
        serializer = PeopleFoundSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("SERIALIZER=",serializer.data)
        
        query = request.data.get('aadhar_no')
        print("aadhar_no DATA = ", query)
        search_results = People.objects.filter(Q(aadhar_no__icontains=query))
        search_result = 0
        for i in search_results:
            search_result = str(i)
        print(search_result, type(search_result))
        
        return Response(search_result, status=status.HTTP_201_CREATED)


def SearchView(request):
    query = request.POST.get('aadhar_no')
    search_results = People.objects.filter(Q(aadhar_no__icontains=query))
    context = {
        'search_results':search_results
    }
    return response(context)