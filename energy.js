document.addEventListener("DOMContentLoaded", () => {

  feather.replace();

  /* MONTH FILTER */
  const months = ["Jan","Feb","Mar","Apr","May","Jun"];
  let index = 3;

  const monthLabel = document.getElementById("currentMonth");

  document.getElementById("prevMonth").onclick = () => {
    index = (index - 1 + months.length) % months.length;
    monthLabel.innerText = months[index] + " 2024";
  };

  document.getElementById("nextMonth").onclick = () => {
    index = (index + 1) % months.length;
    monthLabel.innerText = months[index] + " 2024";
  };

  /* LINE CHART */
  new Chart(dailyChart, {
    type: 'line',
    data: {
      labels: [6,7,8,9,10,11,12,13,14],
      datasets: [{
        data: [6,7,10,14,15,9,11,20,26],
        borderColor: '#3bb78f',
        backgroundColor: 'rgba(59,183,143,0.25)',
        fill: true,
        tension: 0.4
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });

  /* BAR CHART */
  new Chart(roomChart, {
    type: 'bar',
    data: {
      labels: ["305","122","204","210","307"],
      datasets: [{
        data: [43.5,35.8,28.7,24.3,18.5],
        backgroundColor: '#3a7bd5'
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } }
    }
  });

  /* PIE CHART */
 new Chart(usageChart, {
    type: 'doughnut',
    data: {
      labels: ["Lighting","Climate Control","Other"],
      datasets: [{
        data: [40,35,25],
        backgroundColor: ["#3a7bd5","#3bb78f","#f7971e"]
      }]
    }
  });

});
