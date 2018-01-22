# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0005_auto_20171204_1829'),
    ]

    operations = [
        migrations.AddField(
            model_name='postmodel',
            name='slug',
            field=models.SlugField(null=True, blank=True),
        ),
    ]
