document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element by its id
    var ctx = document.getElementById('myLineChart').getContext('2d');

    // Define the labels for 12 months
    var labels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Initialize data with two datasets
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'Year 1 (2022)',
                data: generateRandomData(12, 100, 10000, 1000,1500), // Start at 100, increase, and then decrease
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.4)',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Year 2 (2023)',
                data: generateRandomData(12, 100, 12000, 2500,3000), // Start at 100, increase, and then decrease
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                borderWidth: 2,
                fill: false,
            }
        ]
    };

    // Define chart options with explicit y-axis ticks
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    // Specify the y-axis ticks explicitly
                    stepSize: 500,
                    values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000],
                },
                grid: {
                    display: false
                },
                beginAtZero: true // Start at zero on the y-axis
            }
        },
        plugins: {
            legend: {
                display: true
            },
        },
        layout: {
            padding: {
                top: 20
            }
        }
    };

    // Create a new Line Chart instance
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    // Function to generate data with custom increment
    function generateRandomData(months, min, max, minIncrement, maxIncrement) {
        var data = [];
        var value = min;
    
        for (var i = 0; i < months; i++) {
            data.push(value);
    
            // Generate a random increment within the specified range
            var randomIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
    
            // Apply the random increment to the value
            value += randomIncrement;
    
            // Ensure that the value stays within the specified range (min to max)
            if (value < min) {
                value = min;
            } else if (value > max) {
                value = max;
            }
        }
    
        return data;
    }
    
    
});
