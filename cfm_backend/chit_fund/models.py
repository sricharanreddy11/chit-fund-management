from django.db import models
from authenticator.models import User


class Group(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    group_owner = models.CharField(max_length=255,null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'groups'


class Scheme(models.Model):
    name = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    duration_months = models.IntegerField(null=True, blank=True)
    installment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    withdrawal_installment_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'schemes'


class GroupScheme(models.Model):
    name = models.CharField(max_length=255,null=True, blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='group_schemes')
    scheme = models.ForeignKey(Scheme, on_delete=models.CASCADE, related_name='group_schemes')
    current_total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_month = models.CharField(max_length=255, default=1)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f'{self.group.name}_{self.scheme.name}'

    class Meta:
        db_table = 'group_schemes'


class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    group_scheme = models.ForeignKey(GroupScheme, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'payments'


class Withdrawal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='withdrawals')
    group_scheme = models.ForeignKey(GroupScheme, on_delete=models.CASCADE, related_name='withdrawals')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)
    current_month = models.IntegerField(default=0, null=True, blank=True)

    class Meta:
        db_table = 'withdrawals'


