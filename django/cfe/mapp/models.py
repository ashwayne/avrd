from django.db import models
from django.utils.encoding import smart_text
from .validators import email_check
from django.utils.text import slugify
from django.db.models.signals import pre_save, post_save
from django.utils import timezone
from django.utils.timesince import timesince
from datetime import timedelta, datetime, date
from django.core.urlresolvers import reverse
PUBLISH_CHOICES = (
    ('draft', 'Draft'),
    ('publish', 'Publish'),
    ('private', 'Privt'),
)


class PostModel(models.Model):
    id = models.AutoField(primary_key=True)
    active = models.BooleanField(default=True)
    title = models.CharField(max_length=200, verbose_name='Post_title')
    content = models.TextField(null=True, blank=True)
    publish = models.CharField(max_length=200, choices=PUBLISH_CHOICES, default='draft')
    count = models.IntegerField(default=0)
    pub_date = models.DateField(auto_now=False, auto_now_add=False, default=timezone.now)
    email = models.EmailField(max_length=240, validators=[email_check], null=True, blank=True)
    slug = models.SlugField(null=True, blank=True, unique=True)
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'BlogPost'
        verbose_name_plural = 'BlogPosts'

    def __str__(self):
        return smart_text(self.title)

    def save(self, *args, **kwargs):
        print("Hello")
        if not self.slug:
            self.slug = slugify(self.title)
        super(PostModel, self).save(*args, **kwargs)

    @property
    def age(self):
        now = datetime.now()
        publish_time = datetime.combine(
            self.pub_date,
            datetime.now().time()
        )

        print timedelta(minutes=1)
        try:
            difference = now - publish_time
        except:
            return "unknown"
        if difference <=timedelta(minutes=1):
            return "just now"
        return timesince(self.pub_date)

    def get_absolute_url(self):
        return reverse('detail', kwargs={'slug': self.slug})


def pre_save_func(sender, instance, *args, **kwargs):
    if not instance.slug:
        print "inside presave"
        instance.slug = slugify(instance.title)


pre_save.connect(pre_save_func, sender=PostModel)

