from django.conf.urls import include, url
from django.contrib import admin
from .views import home, register, user_login, user_logout

urlpatterns = [
    # Examples:
    # url(r'^$', 'usermodels.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', home, name='home'),
    url(r'^register/$', register, name='register'),
    url(r'^login/$', user_login, name='login'),
    url(r'^logout/$', user_logout, name='logout'),
]
