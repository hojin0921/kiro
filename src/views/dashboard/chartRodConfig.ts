export const data = {
  labels: ['5월', '6월', '7월', '8월', '9월', '10월'],
  datasets: [
    {
      labels: '입고',
      backgroundColor: '#FB9E14',
      data: [4000, 200, 8000, 1000, 8000, 1000]
    },
    {
      labels: '선별',
      backgroundColor: '#2EA4AB',
      data: [4000, 0, 1000, 1000, 8000, 1000]
    },
    {
      labels: '출고',
      backgroundColor: '#8F7CF0',
      data: [3000, 2000, 8000, 0, 8000, 1000]
    },
    {
      labels: '재고',
      backgroundColor: '#CA425B',
      data: [4000, 2000, 8000, 1000, 0, 1000]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        offset: true
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  }
}
