from django.urls import path
from . import views

app_name = 'per_predictions' 

urlpatterns=[
    # 수령액 예측

    path('api/', views.percentsge_pred, name='prediction-api'),
]