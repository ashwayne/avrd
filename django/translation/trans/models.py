from django.db import models

# Create your models here.


class PostModel(models.Model):
    count = models.IntegerField(default=0)
    name = models.CharField(max_length=100, default='ara')

    def __str__(self):
        return str(self.count)