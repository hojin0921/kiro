export interface MenuItem {
  index: string
  icon?: string
  title: string
  name?: string
  toRouter?: string
  disabled?: boolean
  headArticle?: boolean
  children?: MenuItem[]
}

// 메뉴 아이템들을 정의합니다.
export const menuItems: MenuItem[] = [
  {
    index: '1',
    icon: 'menu_icon1',
    title: '대시보드',
    toRouter: '/',
    name: '/'
  },
  {
    index: '2',
    icon: 'menu_icon2',
    title: '조회',
    children: [
      {
        index: '2-1',
        title: '기본 조회',
        toRouter: '/search/basic_search',
        name: 'basic_search'
      },
      {
        index: '2-2',
        title: '이력 추적',
        toRouter: '/search/history_search',
        name: 'history_Search'
      },
      {
        index: '2-3',
        title: '통계',
        toRouter: '/search/statistics',
        name: 'statistics'
      }
    ]
  },
  {
    index: '3',
    icon: 'menu_icon3',
    title: '알림',
    toRouter: '/notification',
    name: 'notification'
  },
  {
    index: '4',
    icon: 'menu_icon4',
    title: '등록관리',
    children: [
      {
        index: '4-1',
        title: '임산물 ',
        toRouter: '/registration/product',
        name: 'product'
      },
      {
        index: '4-2',
        title: '잔여물량',
        toRouter: '/registration/residual',
        name: 'residual'
      },
      {
        index: '4-3',
        title: '운송로봇',
        toRouter: '/registration/transport_robot',
        name: 'transport_robot'
      },
      {
        index: '4-4',
        title: '사용자',
        toRouter: '/registration/user',
        name: 'user'
      },
      {
        index: '4-5',
        title: '배송지',
        toRouter: '/registration/delivery',
        name: 'delivery'
      },
      {
        index: '4-6',
        title: '경보',
        toRouter: '/registration/alarm',
        name: 'alarm'
      }
    ]
  },
  {
    index: '4',
    icon: 'menu_icon5',
    title: '로그',
    toRouter: '/log',
    name: 'log'
  }
]
