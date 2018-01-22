from django import forms
from .models import PostModel


class BookForm(forms.ModelForm):
    class Meta:
        model = PostModel
        fields = [
            'title',
            'content',
        ]

# class PostModelForm(forms.ModelForm):
#     class Meta:
#         model = PostModel
#         fields = ['title', 'content']

