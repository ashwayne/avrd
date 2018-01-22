from django.shortcuts import render
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.http import Http404
from .models import PostModel
from django.core.urlresolvers import reverse
from django.contrib import messages
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import ModelFormMixin
from .forms import BookForm


# class MultipleObjectMixin(object):
#     def get_object(self, queryset=None, *args, **kwargs):
#         slug = self.kwargs["slug"]
#         if slug:
#             try:
#                 obj = self.model.objects.get(slug=slug)
#             except self.model.MultipleObjectsReturned:
#                 obj = self.get_queryset().first()
#             except:
#                 raise Http404
#             return obj
#         raise Http404


class Create(SuccessMessageMixin, CreateView):
    template_name = "mapp/createform.html"
    model = PostModel
    # fields = ['title', 'content']
    form_class = BookForm
    success_message = "%(title)s created oh geez"

    def form_valid(self, form):
        form.instance.publish = 'publish'
        valid_form = super(Create, self).form_valid(form)
        # messages.success(self.request, "object created")
        return valid_form

    def get_success_url(self):
        return reverse('list')

    def get_context_data(self, *args, **kwargs):
        context = super(Create, self).get_context_data(*args, **kwargs)
        return context


class Update(UpdateView):
    template_name = "mapp/updateform.html"
    model = PostModel
    fields = ['title', 'content']
    # form_class = BookForm


class Delete(DeleteView):
    template_name = "mapp/delete.html"
    model = PostModel
    # form_class = BookForm

    def get_success_url(self):
        return reverse('list')


class Detail(ModelFormMixin, DetailView):
    template_name = "mapp/detail.html"
    model = PostModel
    form_class = BookForm

    def get_context_data(self, *args, **kwargs):
        context = super(Detail, self).get_context_data(*args, **kwargs)
        print context
        context["form"] = self.get_form()
        context['btn'] = 'Update'
        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def get_success_url(self):
        return reverse('list')


class List(ListView):
    template_name = "mapp/list.html"
    model = PostModel

    def get_context_data(self, *args, **kwargs):
        context = super(List, self).get_context_data(*args, **kwargs)
        return context
