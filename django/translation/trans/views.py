from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from .forms import BookForm
from django.views.generic.edit import FormView
from .models import PostModel
# class ContactView(FormView):
#     template_name = 'contact.html'
#     form_class = ContactForm
#     success_url = '/thanks/'
#
#     def form_valid(self, form):
#         # This method is called when valid form data has been POSTed.
#         # It should return an HttpResponse.
#         form.
#         return super().form_valid(form)


class Home(FormView):
    model = PostModel
    template_name = 'trans/register.html'
    form_class = BookForm

    def get_context_data(self, *args, **kwargs):
        context = super(Home, self).get_context_data(*args, **kwargs)
        context['form'] = BookForm
        return context

    def form_valid(self, form):
        # form1 = super(home, self).form_valid(form)
        context = self.get_context_data(*args, **kwargs)
        obj = form.save(commit=False)
        context["html"] = "<ul><li>thomthatha</li><li>jeeboombaa</li></ul>"
        obj.save()
        return super(Home, self).form_valid(form)

    def get_success_url(self):
        return reverse('home')


class A(TemplateView):
    template_name = 'trans/index.html'

    def post(self, request, *args, **kwargs):
        action = self.request.POST("action")
        print action
        if action == 'a':
            out = "qwe"
        else:
            out = "zxc"
        context = self.get_context_data()
        pass
