export interface listColumn {
  prop: string
  label: string
  width?: number | string
  sortable?: boolean
  align?: string
  headerAlign?: string
  click?: boolean
  template?: string
}

export const BasicSearchColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '품목',
    sortable: true,
    width: '*'
  },
  {
    prop: 'state',
    label: '처리상태',
    sortable: true
  },
  {
    prop: 'farmhouse',
    label: '농가',
    sortable: true
  },
  {
    prop: 'data',
    label: '처리일시',
    sortable: true
  },
  {
    prop: 'standard',
    label: '규격',
    sortable: true
  },
  {
    prop: 'kg',
    label: '총 무게(kg)',
    sortable: true
  },
  {
    prop: 'name',
    label: '담당자',
    sortable: true
  }
]

export const HistorySearchColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '품목',
    sortable: true,
    click: true
  },
  {
    prop: 'delivery',
    label: '출고일시',
    sortable: true,
    width: 180
  },
  {
    prop: 'quantity',
    label: '수량',
    sortable: true
  },
  {
    prop: 'screening',
    label: '선별 일시',
    sortable: true,
    width: 180
  },
  {
    prop: 'screening_kg',
    label: '선별 수량(kg)',
    sortable: true,
    width: 160
  },
  {
    prop: 'store',
    label: '입고 일시',
    sortable: true,
    width: 180
  },
  {
    prop: 'store_kg',
    label: '입고 수량(kg)',
    sortable: true,
    width: 160
  },
  {
    prop: 'storage',
    label: '창고',
    sortable: true
  },
  {
    prop: 'address',
    label: '배송지',
    sortable: true
  }
]
export const NotificationColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'system',
    label: '시스템',
    width: 220
  },
  {
    prop: 'level',
    label: '레벨',
    width: 230
  },
  {
    prop: 'explanation',
    label: '설명',
    align: 'left'
  },
  {
    prop: 'occurrence',
    label: '발생 시간',
    width: 280
  },
  {
    prop: 'whether',
    label: '확인 여부',
    width: 230
  }
]
export const ItemColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '품목',
    sortable: true
  },
  {
    prop: 'data',
    label: '등록 일자',
    sortable: true
  },
  {
    prop: 'name',
    label: '담당자'
  }
]
export const FarmhouseColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '농가',
    sortable: true
  },
  {
    prop: 'agent',
    label: '대표자'
  },
  {
    prop: 'tel',
    label: '연락처'
  },
  {
    prop: 'data',
    label: '등록 날짜'
  }
]
export const StandardColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '종류',
    sortable: true
  },
  {
    prop: 'kg',
    label: '단위 (kg)',
    sortable: true
  },
  {
    prop: 'data',
    label: '등록 일자',
    sortable: true
  },
  {
    prop: 'name',
    label: '담당자',
    sortable: true
  }
]
export const ResidualColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'item',
    label: '종류',
    sortable: true
  },
  {
    prop: 'data',
    label: '입고 일시',
    sortable: true
  },
  {
    prop: 'farm',
    label: '농가 명',
    sortable: true
  },
  {
    prop: 'stocked',
    label: '입고 수량',
    sortable: true
  },
  {
    prop: 'stock',
    label: '재고 수량 (kg)'
  },
  {
    prop: 'windfall',
    label: '낙과 수량 (kg)'
  },
  {
    prop: 'name',
    label: '담당자'
  }
]
export const TransportRobotColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'robot',
    label: '로봇명',
    sortable: true
  },
  {
    prop: 'robot_state',
    label: '상태',
    sortable: true
  },
  {
    prop: 'data',
    label: '등록 일자',
    sortable: true
  },
  {
    prop: 'position',
    label: '현위치'
  },
  {
    prop: 'battery',
    label: '배터리 잔량 (%)',
    sortable: true
  },
  {
    prop: 'order',
    label: '수행명령'
  },
  {
    prop: 'name',
    label: '담당자',
    sortable: true
  }
]
export const UserColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'userId',
    label: 'ID'
  },
  {
    prop: 'name',
    label: '이름',
    sortable: true
  },
  {
    prop: 'office',
    label: '소속'
  },
  {
    prop: 'tel',
    label: '연락처'
  },
  {
    prop: 'power',
    label: '권한'
  },
  {
    prop: 'note',
    label: '비고'
  }
]
export const OfficeColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'office',
    label: '소속',
    sortable: true
  },
  {
    prop: 'data',
    label: '등록날짜'
  }
]
export const DeliveryColumn: listColumn[] = [
  {
    prop: 'id',
    label: 'No',
    width: 120
  },
  {
    prop: 'delivery',
    label: '배송지'
  },
  {
    prop: 'name',
    label: '담당자',
    sortable: true
  },
  {
    prop: 'tel',
    label: '연락처'
  },
  {
    prop: 'car',
    label: '배송차량'
  },
  {
    prop: 'data',
    label: '등록날짜'
  }
]
export const LogColumn: listColumn[] = [
  {
    prop: 'timestamp',
    label: 'Timestamp',
    width: 350
  },
  {
    prop: 'event',
    label: 'Event',
    width: 200
  },
  {
    prop: 'level',
    label: 'Level',
    width: 200
  },
  {
    prop: 'message',
    label: 'Message',
    align: 'left'
  }
]
