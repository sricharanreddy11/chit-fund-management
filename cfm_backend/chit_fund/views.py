from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, \
    DestroyModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import Group, Scheme, GroupScheme, Payment, Withdrawal
from .serializers import GroupListSerializer, SchemeListSerializer, GroupSchemeSerializer, PaymentListSerializer, \
    WithdrawalListSerializer


class GroupViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                   DestroyModelMixin):
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class SchemeViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                    DestroyModelMixin):
    queryset = Scheme.objects.all()
    serializer_class = SchemeListSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class GroupSchemeViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                         DestroyModelMixin):
    queryset = GroupScheme.objects.all()
    serializer_class = GroupSchemeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class PaymentViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                     DestroyModelMixin):
    queryset = Payment.objects.all()
    serializer_class = PaymentListSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class WithdrawalViewSet(GenericViewSet, ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                        DestroyModelMixin):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalListSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
