function changeLanguage() {
    const language = document.getElementById('language').value;
    alert(`Language changed to: ${language}`);
}

function performSearch() {
    const query = document.getElementById('search').value;
    alert(`Searching for: ${query}`);
}
function changeLanguage() {
    const language = document.getElementById('language').value;
    alert(`Language changed to: ${language}`);
}

function performSearch() {
    const query = document.getElementById('search').value;
    alert(`Searching for: ${query}`);
}

function editProfile() {
    alert('Profile editing functionality goes here.');
}
  // Pie Chart
  const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['مجموع صارفین', 'فعال صارفین', 'آرڈر', 'آمدنی'],
        datasets: [{
            label: 'Statistics',
            data: [1200, 800, 250, 15000], // Sample data
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Statistics Overview'
            }
        }
    }
});

// Call the createCharts function when the document is ready
document.addEventListener('DOMContentLoaded', createCharts);

