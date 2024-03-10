export const data = {
  labels: ['밤 - 정상', '밤 - 불량', '대추 - 정상', '대추 - 불량'],
  datasets: [
    {
      backgroundColor: ['#32A13A', '#BFD0E6', '#3B76BD', '#CFEED1'],
      data: [4000, 2000, 8000, 1000]
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
