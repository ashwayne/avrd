# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0008_auto_20171205_1336'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='slug',
            field=models.SlugField(unique=True, null=True, blank=True),
        ),
    ]
