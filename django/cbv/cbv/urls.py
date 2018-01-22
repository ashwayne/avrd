from django.conf.urls import include, url
from django.contrib import admin
from classy import urls
urlpatterns = [
    # Examples:
    # url(r'^$', 'cbv.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^classy/', include('classy.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
