var cpuChart, memoryChart, diskChart, performanceChart;

function initCharts() {
  var ctx = document.getElementById("cpuChart").getContext("2d");
  cpuChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Used", "Free"],
      datasets: [
        {
          label: "CPU Usage",
          data: [45, 55],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
          hoverOffset: 4,
        },
      ],
    },
  });

  var ctx2 = document.getElementById("memoryChart").getContext("2d");
  memoryChart = new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels: ["Used", "Free"],
      datasets: [
        {
          label: "Memory Usage",
          data: [68, 32],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(201, 203, 207)"],
          hoverOffset: 4,
        },
      ],
    },
  });

  var ctx3 = document.getElementById("diskChart").getContext("2d");
  diskChart = new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: ["Used", "Free"],
      datasets: [
        {
          label: "Disk Usage",
          data: [75, 25],
          backgroundColor: ["rgb(255, 206, 86)", "rgb(153, 102, 255)"],
          hoverOffset: 4,
        },
      ],
    },
  });

  var ctx4 = document.getElementById("performanceChart").getContext("2d");
  performanceChart = new Chart(ctx4, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Performance",
          data: [60, 69, 75, 70, 80],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initCharts();
  refreshData();
});

function refreshData() {
  // Simulate fetching data with random values
  const simulatedData = {
    cpu: Math.floor(Math.random() * 101),
    memory: Math.floor(Math.random() * 101),
    disk: Math.floor(Math.random() * 101),
    performance: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100 + 50))
  };
  
  updateChartData(cpuChart, [simulatedData.cpu, 100 - simulatedData.cpu]);
  updateChartData(memoryChart, [simulatedData.memory, 100 - simulatedData.memory]);
  updateChartData(diskChart, [simulatedData.disk, 100 - simulatedData.disk]);
  updatePerformanceChartData(performanceChart, simulatedData.performance);
}

function updateChartData(chart, newData) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = newData;
  });
  chart.update();
}

function updatePerformanceChartData(chart, newData) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = newData;
  });
  chart.update();
}





const toggleInfoBtn = document.getElementById('toggleInfoBtn');
    const toggleIcon = document.getElementById('toggleIcon');
    const serverInfoContent = document.getElementById('serverInfoContent');

    toggleInfoBtn.addEventListener('click', () => {
        if (serverInfoContent.style.display === 'none') {
            serverInfoContent.style.display = 'grid';
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
        } else {
            serverInfoContent.style.display = 'none';
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
        }
    });





    const toggleConnectionBtn = document.getElementById('toggleConnectionBtn');
    const toggleConnectionIcon = document.getElementById('toggleConnectionIcon');
    const connectionContent = document.getElementById('connectionContent');

    toggleConnectionBtn.addEventListener('click', () => {
        if (connectionContent.style.display === 'none') {
            connectionContent.style.display = 'grid';
            toggleConnectionIcon.classList.remove('fa-chevron-down');
            toggleConnectionIcon.classList.add('fa-chevron-up');
        } else {
            connectionContent.style.display = 'none';
            toggleConnectionIcon.classList.remove('fa-chevron-up');
            toggleConnectionIcon.classList.add('fa-chevron-down');
        }
    });