const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); 
        const count = +counter.innerText.replace(/[^0-9]/g, ''); 
        
        
        if(!target) return;

      
        const inc = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20); 
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});


const ctx1 = document.getElementById('developmentChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: 'Problems Solved',
            data: [120, 150, 180, 220, 300, 350],
            backgroundColor: '#38bdf8', 
            borderRadius: 5,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false } 
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#1f2a36' }, 
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    }
});


const ctx2 = document.getElementById('problemTypeChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Potholes', 'Garbage', 'Lighting', 'Water'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
                '#38bdf8', 
                '#facc15', 
                '#4ade80', 
                '#f472b6'  
            ],
            borderWidth: 0,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#e2e8f0' }
            }
        }
    }
});