# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trans', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='postmodel',
            name='name',
            field=models.CharField(default=b'ara', max_length=100),
        ),
    ]
