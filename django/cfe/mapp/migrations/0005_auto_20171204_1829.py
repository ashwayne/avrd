# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import mapp.validators


class Migration(migrations.Migration):

    dependencies = [
        ('mapp', '0004_postmodel_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='email',
            field=models.EmailField(blank=True, max_length=240, null=True, validators=[mapp.validators.email_check]),
        ),
    ]
