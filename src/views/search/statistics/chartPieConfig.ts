export const data = {
  labels: [
    '열과',
    '그을음병',
    '탄저병',
    '색채이상',
    '검은점',
    '균열',
    '파과',
    '스크래치',
    '무름',
    '찍힘'
  ],
  datasets: [
    {
      backgroundColor: [
        '#9B2226',
        '#CA6702',
        '#005F73',
        '#0A9396',
        '#001219',
        '#94D2BD',
        '#BB3E03',
        '#EE9B00',
        '#E9D8A6',
        '#AE2012'
      ],
      data: [400, 200, 800, 100, 400, 200, 800, 100, 400, 200]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 16,
          family: 'Pretendard'
        }
      }
    },
    tooltip: {
      enabled: true,
      intersect: true,
      title: false,
      backgroundColor: '#FBF9FD',
      titleFont: {
        size: 0,
        family: 'Pretendard'
      },
      bodyColor: '#293332',
      bodyFont: {
        size: 18,
        family: 'Pretendard'
      },
      usePointStyle: true,
      callbacks: {
        label: function (context: { parsed: number }) {
          return `${context.parsed.toLocaleString()}`
        }
      }
    }
  }
}
