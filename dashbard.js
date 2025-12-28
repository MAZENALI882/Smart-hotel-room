const ctx = document.getElementById('energyChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'kWh',
      data: [8, 9, 14, 16, 10, 18, 20],
      borderColor: '#2ecc71',
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    }
  }
});
