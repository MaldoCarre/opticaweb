# Generated by Django 2.2.2 on 2019-11-01 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ergo', '0002_auto_20191021_2045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ergometria',
            name='st_mm',
            field=models.CharField(max_length=50, null=True, verbose_name='St mm'),
        ),
    ]
