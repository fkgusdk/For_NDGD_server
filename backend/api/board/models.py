from django.db import models
from django.conf import settings
from accounts.models import User
from django.utils import timezone
from api.settings import AUTH_USER_MODEL

class Blog(models.Model):
    # 1. 게시글의 id 값
    id = models.AutoField(primary_key=True, null=False, blank=False) 
    # 2. 제목
    title = models.CharField(max_length=100)
    # 3. 작성일
    created_at = models.DateTimeField(auto_now=True)
    # 4. 작성자
    user = models.ForeignKey(AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, related_name='blogs')
    # 5. 본문
    body = models.TextField()