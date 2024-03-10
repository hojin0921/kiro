export const data = {
  labels: [
    '2022. 07',
    '2022. 08',
    '2022. 09',
    '2022. 10',
    '2022. 11',
    '2022. 12',
    '2023. 01',
    '2023. 02',
    '2023. 03',
    '2023. 04',
    '2023. 05',
    '2023. 06'
  ],
  datasets: [
    {
      labels: '호두',
      backgroundColor: '#AB6617',
      data: [4000, 200, 8000, 1000, 8000, 1000, 4000, 200, 8000, 1000, 8000, 1000]
    },
    {
      labels: '밤',
      backgroundColor: '#32A13A',
      data: [4000, 0, 1000, 1000, 8000, 1000, 4000, 200, 8000, 1000, 8000, 1000]
    },
    {
      labels: '대추',
      backgroundColor: '#3B76BD',
      data: [3000, 2000, 8000, 0, 8000, 1000, 4000, 200, 8000, 1000, 8000, 1000]
    },
    {
      labels: '떫은 감',
      backgroundColor: '#EC5F0F',
      data: [4000, 2000, 8000, 1000, 0, 1000, 4000, 200, 8000, 1000, 8000, 1000]
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
