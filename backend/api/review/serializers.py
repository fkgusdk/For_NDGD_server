from .models import Review
from rest_framework import serializers

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.email')
    class Meta:
        model = Review
        fields = ['id', 'title', 'created_at', 'user', 'body', 'percentage']