interface TopMenu {
  name: string
  active: boolean
}

export const topMenu: TopMenu[] = [
  {
    name: '전체',
    active: true
  },
  {
    name: '밤',
    active: false
  },
  {
    name: '대추',
    active: false
  },
  {
    name: '호두',
    active: false
  },
  {
    name: '감',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  },
  {
    name: '표고버섯(생)',
    active: false
  }
]

export const storage: TopMenu[] = [
  {
    name: '창고1',
    active: true
  },
  {
    name: '창고2',
    active: false
  },
  {
    name: '창고3',
    active: false
  },
  {
    name: '창고4',
    active: false
  }
]
interface Situation {
  name: string
  icon: string
}
export const situation: Situation[] = [
  {
    name: '입고 현황',
    icon: 'icon_inbound'
  },
  {
    name: '선별 현황',
    icon: 'icon_select'
  },
  {
    name: '출고 현황',
    icon: 'icon_outbound'
  },
  {
    name: '재고 현황',
    icon: 'icon_inventory'
  }
]
