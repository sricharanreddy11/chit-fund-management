from django.contrib import admin
from .models import Group, Scheme, GroupScheme, Payment, Withdrawal

admin.site.register(Group)
admin.site.register(Scheme)
admin.site.register(GroupScheme)
admin.site.register(Payment)
admin.site.register(Withdrawal)

