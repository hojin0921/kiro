import { createRouter, createWebHistory } from 'vue-router'
import BasicSearch from '@/views/search/BasicSearch.vue'
import HistorySearch from '@/views/search/HistorySearch.vue'
import StatisticsSearch from '@/views/search/StatisticsSearch.vue'
import ProductView from '@/views/registration/ProductView.vue'
import ProductIndex from '@/views/registration/ProductIndex.vue'
import ResidualView from '@/views/registration/ResidualView.vue'
import TransportRobot from '@/views/registration/TransportRobot.vue'
import UserIndex from '@/views/registration/UserIndex.vue'
import UserView from '@/views/registration/UserView.vue'
import DeliveryView from '@/views/registration/DeliveryView.vue'
import LogView from '@/views/LogView.vue'
import AlarmView from '@/views/AlarmView.vue'
import Dashboard from '@/views/DashboardView.vue'
import NotificationView from '@/views/NotificationView.vue'
import MainView from '@/views/tablet/MainView.vue'
import ReceivingWrite from '@/views/tablet/ReceivingWrite.vue'
import ReceivingView from '@/views/tablet/ReceivingView.vue'
import ReleaseWrite from '@/views/tablet/ReleaseWrite.vue'
import ReleaseView from '@/views/tablet/ReleaseView.vue'
import SelectionWrite from '@/views/tablet/SelectionWrite.vue'
import SelectionView from '@/views/tablet/SelectionView.vue'
import RobotWrite from '@/views/tablet/RobotWrite.vue'
import RouteLayout from '@/layouts/RouteLayout.vue'
import TabletLayout from '@/layouts/TabletLayout.vue'
import TabletViewLayout from '@/layouts/TabletViewLayout.vue'
import TabletLogin from '@/layouts/TabletLogin.vue'
import LoginPage from '@/layouts/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouteLayout,
      children: [
        {
          path: '',
          component: Dashboard,
          name: '대시보드',
          meta: {
            headArticle: true
          }
        },
        {
          path: '/search',
          name: '조회',
          children: [
            {
              path: '/search/basic_search',
              name: '기본 조회',
              meta: {
                headArticle: true
              },
              component: BasicSearch
            },
            {
              path: '/search/history_search',
              component: HistorySearch,
              name: '이력 추적',
              meta: {
                headArticle: true
              }
            },
            {
              path: '/search/statistics',
              component: StatisticsSearch,
              name: '통계',
              meta: {
                headArticle: false
              }
            }
          ]
        },
        {
          path: '/notification',
          component: NotificationView,
          name: '알림',
          meta: {
            headArticle: true
          }
        },
        {
          path: '/registration',
          name: '등로관리',
          children: [
            {
              path: '/registration/product/',
              name: '임산물 ',
              meta: {
                headArticle: false
              },
              component: ProductIndex
            },
            {
              path: '/registration/product/:id',
              name: '임산물',
              meta: {
                headArticle: true
              },
              component: ProductView
            },
            {
              path: '/registration/residual',
              name: '잔여물량',
              meta: {
                headArticle: true
              },
              component: ResidualView
            },
            {
              path: '/registration/transport_robot',
              name: '운송로봇',
              meta: {
                headArticle: true
              },
              component: TransportRobot
            },
            {
              path: '/registration/user',
              name: '사용자 ',
              meta: {
                headArticle: false
              },
              component: UserIndex
            },
            {
              path: '/registration/user/:id',
              name: '사용자',
              meta: {
                headArticle: true
              },
              component: UserView
            },
            {
              path: '/registration/delivery',
              name: '배송지',
              meta: {
                headArticle: true
              },
              component: DeliveryView
            },
            {
              path: '/registration/alarm',
              name: '경보',
              meta: {
                headArticle: false
              },
              component: AlarmView
            }
          ]
        },
        {
          path: '/log',
          component: LogView,
          name: '로그',
          meta: {
            headArticle: true
          }
        }
      ]
    },
    {
      path: '/tablet',
      component: TabletViewLayout,
      children: [
        {
          path: '/tablet/',
          component: MainView,
          name: '작업자 관리 시스템'
        },
        {
          path: '/tablet/receiving_view',
          component: ReceivingView
        },
        {
          path: '/tablet/release_view',
          component: ReleaseView
        },
        {
          path: '/tablet/selection_view',
          component: SelectionView
        }
      ]
    },
    {
      path: '/tablet',
      component: TabletLayout,
      children: [
        {
          path: '/tablet/receiving',
          component: ReceivingWrite,
          name: '기본 입고'
        },
        {
          path: '/tablet/release',
          component: ReleaseWrite,
          name: '출고'
        },
        {
          path: '/tablet/selection',
          component: SelectionWrite,
          name: '선별'
        },
        {
          path: '/tablet/robot',
          component: RobotWrite,
          name: '운송 로봇'
        }
      ]
    },
    {
      path: '/tablet/login',
      component: TabletLogin
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

export default router
