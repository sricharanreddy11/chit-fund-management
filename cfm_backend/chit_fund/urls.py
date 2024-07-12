from django.urls import path
from .views import GroupListCreateView, SchemeListCreateView, GroupSchemeListCreateView, PaymentListCreateView, WithdrawalListCreateView


urlpatterns = [
    path('groups/', GroupListCreateView.as_view(), name='group-list-create'),
    path('schemes/', SchemeListCreateView.as_view(), name='scheme-list-create'),
    path('group-schemes/', GroupSchemeListCreateView.as_view(), name='group-scheme-list-create'),
    path('payments/', PaymentListCreateView.as_view(), name='payment-list-create'),
    path('withdrawals/', WithdrawalListCreateView.as_view(), name='withdrawal-list-create'),
]
