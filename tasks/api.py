from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()

  serializer_class = TaskSerializer

  # Allows to use this viewSet without authentication
  permission_classes = [permissions.AllowAny]
