from django.conf.urls import include, url
from .views import Detail, List, Create, Update, Delete

urlpatterns = [
    # Examples:
    # url(r'^$', 'cfe.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^list/$', List.as_view(), name='list'),
    url(r'^1/create/$', Create.as_view(), name='create'),
    url(r'^(?P<slug>[-\w]+)/update/$', Update.as_view(), name='update'),
    url(r'^(?P<slug>[-\w]+)/delete/$', Delete.as_view(), name='delete'),
    url(r'^(?P<slug>[-\w]+)/$', Detail.as_view(), name='detail'),

    # url(r'^2/', ),

]
