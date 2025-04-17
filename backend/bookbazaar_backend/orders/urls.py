from django.urls import path
from .views import OrderViewSet, CartViewSet

urlpatterns = [
    # OrderViewSet URLs
    path('', OrderViewSet.as_view({'get': 'list', 'post': 'create'}), name='order-list'),
    path('<int:pk>/', OrderViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='order-detail'),
    path('user/', OrderViewSet.as_view({'get': 'user_orders'}), name='user-orders'),

    # CartViewSet URLs
    path('carts/', CartViewSet.as_view({'get': 'list', 'post': 'create'}), name='cart-list'),
    path('carts/<int:pk>/', CartViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='cart-detail'),
    path('carts/user/', CartViewSet.as_view({'get': 'user_cart'}), name='user-cart'),
    path('carts/<int:pk>/add/', CartViewSet.as_view({'post': 'add_to_cart'}), name='add-to-cart'),
]