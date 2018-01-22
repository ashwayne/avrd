from django.conf.urls import include, url
from .views import Home, A

urlpatterns = [
    # Examples:
    # url(r'^$', 'translation.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),


    url(r'^$', Home.as_view(), name='home'),
    url(r'^a/$', A.as_view(), name='a'),
]
