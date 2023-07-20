from django.urls import path, include
from . import views

app_name = 'receipt_predictions' 

urlpatterns=[
    # 수령액 예측

    path('api/', views.payments_pred, name='prediction-api'),
]