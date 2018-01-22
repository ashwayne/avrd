# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0002_postmodel_publish'),
    ]

    operations = [
        migrations.AddField(
            model_name='postmodel',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='postmodel',
            name='pub_date',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
