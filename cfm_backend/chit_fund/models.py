from django.db import models
from authenticator.models import User


class Group(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    members = models.ManyToManyField(User, related_name='chit_fund_groups')

    def __str__(self):
        return self.name


class Scheme(models.Model):
    name = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    duration_months = models.IntegerField()
    installment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    withdrawal_installment_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name


class GroupScheme(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='group_schemes')
    scheme = models.ForeignKey(Scheme, on_delete=models.CASCADE, related_name='group_schemes')
    current_total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_month = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f'{self.group.name}_{self.scheme.name}'


class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    group_scheme = models.ForeignKey(GroupScheme, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)


class Withdrawal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='withdrawals')
    group_scheme = models.ForeignKey(GroupScheme, on_delete=models.CASCADE, related_name='withdrawals')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)
    new_installment_amount = models.DecimalField(max_digits=10, decimal_places=2)


