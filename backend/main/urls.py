from django.urls import path
from .views import PeopleView, PeopleFoundView, SearchView

urlpatterns = [
    path('people/', PeopleView, name='people'),
    # path('people/<int:pk>/', PeopleView, name='peopleDetail'),
    path('people_found/', PeopleFoundView.as_view(), name='peopleFound'),
    # path('people_found/<int:pk>/', PeopleFoundView.as_view(), name='peopleFoundDetail'),
    path('search/', SearchView, name='search'),
]