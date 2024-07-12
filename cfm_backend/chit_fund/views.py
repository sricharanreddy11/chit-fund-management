from rest_framework import generics
from .models import Group, Scheme, GroupScheme, Payment, Withdrawal
from .serializers import GroupSerializer, SchemeSerializer, GroupSchemeSerializer, PaymentSerializer, WithdrawalSerializer


class GroupListCreateView(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class SchemeListCreateView(generics.ListCreateAPIView):
    queryset = Scheme.objects.all()
    serializer_class = SchemeSerializer


class GroupSchemeListCreateView(generics.ListCreateAPIView):
    queryset = GroupScheme.objects.all()
    serializer_class = GroupSchemeSerializer


class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    

class WithdrawalListCreateView(generics.ListCreateAPIView):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalSerializer
