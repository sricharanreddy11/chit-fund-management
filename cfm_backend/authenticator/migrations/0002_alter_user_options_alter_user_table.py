# Generated by Django 4.2.14 on 2024-07-13 11:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authenticator', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={},
        ),
        migrations.AlterModelTable(
            name='user',
            table='user',
        ),
    ]
