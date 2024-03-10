export const horizontalData = {
  labels: ['떫은 감', '대추', '호두', '밤'],
  datasets: [
    {
      labels: '특',
      backgroundColor: '#32A13A',
      data: [4000, 200, 8000, 1000],
      stack: 'Stack'
    },
    {
      labels: '상',
      backgroundColor: '#3B76BD',
      data: [4000, 0, 1000, 1000],
      stack: 'Stack'
    },
    {
      labels: '보통',
      backgroundColor: '#8F7CF0',
      data: [3000, 2000, 8000, 0],
      stack: 'Stack'
    }
  ]
}

export const horizontalOptions = {
  indexAxis: 'y',
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
