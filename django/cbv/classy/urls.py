from django.conf.urls import include, url
from django.views.generic.base import TemplateView
from .views import Temp, MyView
urlpatterns = [
    # Examples:
    # url(r'^$', 'cbv.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', TemplateView.as_view(template_name='classy/temp1.html'), name='starter'),
    url(r'^qwe/$', Temp.as_view(), name='temp'),
    url(r'^rty/$', MyView.as_view(template_name='classy/temp1.html'), name='someview'),

]
