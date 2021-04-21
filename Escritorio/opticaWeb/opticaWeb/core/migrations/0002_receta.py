# Generated by Django 3.1.7 on 2021-04-14 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Receta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=100, null=True)),
                ('apelido', models.CharField(blank=True, max_length=100, null=True)),
                ('localidad', models.CharField(blank=True, max_length=100, null=True)),
                ('dni', models.CharField(blank=True, max_length=100, null=True)),
                ('telefono', models.CharField(blank=True, max_length=100, null=True)),
                ('numero_receta', models.IntegerField(blank=True, null=True)),
                ('fecha', models.DateField(auto_now_add=True)),
                ('d_esf', models.CharField(blank=True, max_length=50, null=True)),
                ('d_cil', models.CharField(blank=True, max_length=50, null=True)),
                ('d_eje', models.CharField(blank=True, max_length=50, null=True)),
                ('d_alt', models.CharField(blank=True, max_length=50, null=True)),
                ('d_d_int', models.CharField(blank=True, max_length=50, null=True)),
                ('i_esf', models.CharField(blank=True, max_length=50, null=True)),
                ('i_cil', models.CharField(blank=True, max_length=50, null=True)),
                ('i_eje', models.CharField(blank=True, max_length=50, null=True)),
                ('i_alt', models.CharField(blank=True, max_length=50, null=True)),
                ('i_d_int', models.CharField(blank=True, max_length=50, null=True)),
                ('calibrado', models.CharField(blank=True, max_length=100, null=True)),
                ('armazon', models.CharField(blank=True, max_length=100, null=True)),
                ('tam_pel', models.CharField(blank=True, max_length=50, null=True)),
                ('alt_OD', models.CharField(blank=True, max_length=50, null=True)),
                ('material_de_cristal', models.CharField(blank=True, max_length=100, null=True)),
                ('color_cristal', models.CharField(blank=True, max_length=100, null=True)),
                ('observacion', models.TextField(blank=True, null=True)),
                ('total', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]