# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PostModel',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('active', models.BooleanField(default=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'Post_title')),
                ('content', models.TextField(null=True, blank=True)),
            ],
            options={
                'verbose_name': 'BlogPost',
                'verbose_name_plural': 'BlogPosts',
            },
        ),
    ]
