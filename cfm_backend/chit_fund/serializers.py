from rest_framework import serializers
from .models import Group, Scheme, GroupScheme, Payment, Withdrawal


class GroupListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class GroupDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class SchemeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scheme
        fields = '__all__'


class SchemeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scheme
        fields = '__all__'


class GroupSchemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupScheme
        fields = '__all__'


class PaymentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class PaymentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class WithdrawalListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdrawal
        fields = '__all__'


class WithdrawalDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdrawal
        fields = '__all__'
