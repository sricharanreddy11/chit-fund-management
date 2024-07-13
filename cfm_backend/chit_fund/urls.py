from rest_framework.routers import DefaultRouter
from .views import GroupViewSet, SchemeViewSet, GroupSchemeViewSet, PaymentViewSet, WithdrawalViewSet

router = DefaultRouter()
router.register(r'groups', GroupViewSet)
router.register(r'schemes', SchemeViewSet)
router.register(r'group-schemes', GroupSchemeViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'withdrawals', WithdrawalViewSet)

urlpatterns = router.urls
