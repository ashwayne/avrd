from django.shortcuts import render
from django.views.generic.base import TemplateView, TemplateResponseMixin, ContextMixin
from django.views.generic import View
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.utils.decorators import method_decorator

# Create your views here.


class LoginRequiredMixin(object):
    @classmethod
    def as_view(cls, **kwargs):
        view = super(LoginRequiredMixin, cls).as_view(**kwargs)
        return login_required(view)

    # @method_decorator(login_required)
    # def dispatch(self, request, *args, **kwargs):
    #     return super(LoginRequiredMixin, self).dispatch(request, *args, **kwargs)


class Temp(TemplateView):
    template_name = "classy/temp1.html"

    def get_context_data(self, *args, **kwargs):
        context = super(Temp, self).get_context_data(*args, **kwargs)
        context["heading"] = "no heading"
        return context


class MyView(LoginRequiredMixin, View, TemplateResponseMixin, ContextMixin):

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        context["heading"] = "Si Patron"
        return self.render_to_response(context)

    # @method_decorator(login_required)
    # def dispatch(self, request, *args, **kwargs):
    #     return super(MyView, self).dispatch(request, *args, **kwargs)
