# Generated by Django 3.1.7 on 2021-04-23 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_receta_distancia'),
    ]

    operations = [
        migrations.AddField(
            model_name='receta',
            name='alt_OI',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]