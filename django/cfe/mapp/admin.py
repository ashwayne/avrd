from django.contrib import admin
from .models import PostModel
# Register your models here.


class PostModelAdmin(admin.ModelAdmin):
    fields = [
        'active',
        'title',
        'content',
        'email',
        'publish',
        'count',
        'pub_date',
        'slug',
        'added',
        'updated',
        'get_age',
    ]
    readonly_fields = [
        'added',
        'updated',
        'get_age',
    ]

    def get_age(self, obj, *args, **kwargs):
        return obj.age

admin.site.register(PostModel, PostModelAdmin)
