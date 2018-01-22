from django.conf.urls import include, url
from django.contrib import admin
from mapp import urls
urlpatterns = [
    # Examples:
    # url(r'^$', 'cfe.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^mapp/', include('mapp.urls')),
    # url(r'^pomoform/', include('pomoform.urls')),

]
