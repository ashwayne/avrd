# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='postmodel',
            name='publish',
            field=models.CharField(default=b'draft', max_length=200, choices=[(b'draft', b'Draft'), (b'publish', b'Publish'), (b'private', b'Privt')]),
        ),
    ]
