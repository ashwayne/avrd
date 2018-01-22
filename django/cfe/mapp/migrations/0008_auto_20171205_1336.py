# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0007_auto_20171204_1910'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='pub_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
