
var counter = 0;
var graphFlow = [];
var graphVolume = [];
var graphPresure = [];
var lab = [];
for(var i = 0; i<300; i++){
  graphFlow.push(0);
  graphVolume.push(0);
  graphPresure.push(0);
  lab.push(i);
}

window.chartColors = {
  red: 'rgb(255, 99, 132)', 
  white: 'rgb(255, 255, 255)', 
  blue: 'rgb(59, 131, 189)'
};

function onReceive(event){
  
    let containerFlow = myChartFlow.config.data.datasets[event.index].data.slice(0);
    let containerVolume = myChartVolume.config.data.datasets[event.index].data.slice(0);
    let containerPresure = myChartPresure.config.data.datasets[event.index].data.slice(0);

    containerFlow[counter] = event.f;
    containerVolume[counter] = event.v;
    containerPresure[counter] = event.p;

    if(counter === containerFlow.length -1 && counter === containerVolume.length -1 && counter === containerPresure.length -1){
      counter = 0;
    }else{
      containerFlow[counter + 1] = undefined;
      containerVolume[counter +1] = undefined;
      containerPresure[counter +1] = undefined;
      counter++;
    }

    myChartFlow.config.data.datasets[event.index].data = containerFlow;
    myChartVolume.config.data.datasets[event.index].data = containerVolume;
    myChartPresure.config.data.datasets[event.index].data = containerPresure;

    myChartFlow.update();
    myChartVolume.update();
    myChartPresure.update();
    
  
}

var configFlow = {
  type: 'line',
  data: {
    labels: lab,
    datasets: [
      {
        backgroundColor: window.chartColors.white,
        borderColor: window.chartColors.white,
        fill: false,
        cubicInterpolationMode: 'monotone',
        data: graphFlow,
      },
      
    ],
  },
  options: {
    animation:{
      duration:0
    },
    legend: {
      display: false // Ocultar legendas
    },
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
          display: false
        },
      ],
      yAxes: [
        {
          
        },
      ],
    },
  },
};

var configVolume= {
  type: 'line',
  data: {
    labels: lab,
    datasets: [
      
      {
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        fill: false,
        cubicInterpolationMode: 'monotone',
        data: graphVolume,
        colors: ['', 'red', 'white']
      }
    ],
  },
  options: {
    animation:{
      duration:0
    },
    legend: {
      display: false // Ocultar legendas
    },
    title: {
      display: false,
      
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
          display: false
        },
      ],
      yAxes: [
        {
          
        },
      ],
    },
  },
};

var configPresure= {
  type: 'line',
  data: {
    labels: lab,
    datasets: [
      
      {
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        fill: false,
        cubicInterpolationMode: 'monotone',
        data: graphPresure,
        colors: ['', 'red', 'white']
      }
    ],
  },
  options: {
    animation:{
      duration:0
    },
    legend: {
      display: false // Ocultar legendas
    },
    title: {
      display: false,
      
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
          display: false
        },
      ],
      yAxes: [
        {
          
        },
      ],
    },
  },
};

window.onload = function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const ctx3 = document.getElementById('myChart3').getContext('2d');
  window.myChartFlow = new Chart(ctx, configFlow);
  window.myChartVolume = new Chart(ctx2, configVolume);
  window.myChartPresure = new Chart(ctx3, configPresure);
};
