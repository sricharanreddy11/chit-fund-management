from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, \
    DestroyModelMixin
from rest_framework.viewsets import GenericViewSet
from .models import Group, Scheme, GroupScheme, Payment, Withdrawal
from .serializers import GroupListSerializer, SchemeListSerializer, GroupSchemeSerializer, PaymentListSerializer, \
    WithdrawalListSerializer


class GroupViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                   DestroyModelMixin):
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer


class SchemeViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                    DestroyModelMixin):
    queryset = Scheme.objects.all()
    serializer_class = SchemeListSerializer


class GroupSchemeViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                         DestroyModelMixin):
    queryset = GroupScheme.objects.all()
    serializer_class = GroupSchemeSerializer


class PaymentViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                     DestroyModelMixin):
    queryset = Payment.objects.all()
    serializer_class = PaymentListSerializer


class WithdrawalViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                        DestroyModelMixin):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalListSerializer
