from django.core.exceptions import ValidationError


def email_check(value):
    if '@' not in value:
        raise ValidationError('Not a valid e-mail')
