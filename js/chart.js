
var counter = 0;
var graph = [];
var lab = [];
for(var i = 0; i<300; i++){
  graph.push(0);
  lab.push(i);
}


function onReceive(event){
  
    let container = myChart.config.data.datasets[event.index].data.slice(0);
    //myChart.config.data.datasets[event.index].data[counter] = event.value;

    container[counter] = event.value;
    if(counter === container.length -1){
      counter = 0;
    }else{
      container[counter + 1] = undefined;
      counter++;
    }

    myChart.config.data.datasets[event.index].data = container;
    myChart.update();
  
}

var config = {
  type: 'line',
  data: {
    labels: lab,
    datasets: [
      {
        //label: 'volume',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        data: graph,
        //data:[]
      },
    ],
  },
  options: {
    title: {
      display: false,
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
          /*type: 'realtime',
          realtime: {
            duration: 20000,
            delay: 2000,
            
          },*/
          display: false
        },
      ],
      yAxes: [
        {
          /*scaleLabel: {
            display: true,
            labelString: 'value',
          },*/
        },
      ],
    },
  },
};

window.onload = function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  window.myChart = new Chart(ctx, config);
};
