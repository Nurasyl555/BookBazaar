from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', include('books.urls')),  # Include books app URLs
    path('orders/', include('orders.urls')),  # Include orders app URLs
    path('users/', include('users.urls')),  # Include users app URLs
]