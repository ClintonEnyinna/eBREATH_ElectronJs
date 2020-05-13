function onReceive(event) {
  myChart.config.data.datasets[event.index].data.push({
    x: event.timestamp,
    y: event.value,
  });
  myChart.update({
    preservation: true,
  });
}

const config = {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Volume',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        data: [],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'eBREATH',
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          type: 'realtime',
          realtime: {
            duration: 20000,
            delay: 2000,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'value',
          },
        },
      ],
    },
  },
};

window.onload = function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  window.myChart = new Chart(ctx, config);
};
