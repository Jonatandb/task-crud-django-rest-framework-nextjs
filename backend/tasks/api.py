from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()

  serializer_class = TaskSerializer

  # Allows to use this viewSet without authentication
  permission_classes = [permissions.AllowAny]

  @action(detail=True, methods=['post'])
  def done(self, request, pk=None):
    task = self.get_object()
    task.done = not task.done
    task.save()
    return Response({
      'status': 'Task done' if task.done else 'Task undone'
    }, status=status.HTTP_200_OK)