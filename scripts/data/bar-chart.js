const typeBarChart = 'horizontalBar';

const labelBarChart = [
    'Tarik', 'Prambon', 'Krembung', 'Porong', 'Jabon', 'Tanggulangin',
    'Candi', 'Sidoarjo', 'Tulangan', 'Wonoayu', 'Krian', 'Balongbendo',
    'Taman', 'Sukodono', 'Buduran', 'Gedangan', 'Sedati', 'Waru'
];

const dataBarChart = [{
    label: "Tidak Sesuai",
    backgroundColor: '#f44336', //red
    data: [
        1.50, 0.40, 1.62, 0.29, 2.72, 0.03,
        0.04, 5.71, 0, 0, 0.15, 0.14,
        0.13, 0, 3.46, 0, 6.98, 1.35
    ],
}, {
    label: "Kurang Sesuai",
    backgroundColor: '#ff9800', //orange
    data: [
        11.21, 0.83, 7.07, 14.29, 42.76, 7.68,
        23.20, 38.98, 0.08, 0.01, 2.08, 2.34,
        3.29, 4.86, 30.73, 1.57, 49.03, 18.67
    ],
}, {
    label: "Cukup Sesuai",
    backgroundColor: '#ffd600', //yellow
    data: [
        0.21, 5.08, 0.10, 3.10, 16.87, 5.40,
        3.94, 11.89, 0.25, 0.53, 0.39, 6.68,
        2.55, 1.91, 15.44, 0.05, 14.55, 14.09
    ],
}, {
    label: "Sesuai",
    backgroundColor: '#8bc34a', //green
    data: [
        11.49, 30.81, 62.04, 9.39, 17.10, 14.16,
        12.24, 5.55, 14.13, 2.10, 0.01, 7.99,
        20.24, 2.81, 16.37, 58.86, 13.20, 10.62
    ],
}, {
    label: "Sangat Sesuai",
    backgroundColor: '#2196f3', //blue
    data: [
        75.59, 62.88, 29.17, 72.94, 20.54, 72.72,
        60.57, 37.87, 85.54, 97.37, 97.38, 82.85,
        73.80, 90.42, 34.00, 39.51, 16.26, 55.27
    ]
}];

const optionsBarChart = {
    responsive: true,
    plugins: {
        datalabels: {
            display: false
        }
    },
    legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
            boxWidth: 20,
            fontSize: 12,
            fontColor: '#666'
        }
    },
    tooltips: {
        enabled: true,
        mode: 'label',
        callbacks: {
            title: function (tooltipItem, data) {
                let indice = tooltipItem[0].index;
                return "Kecamatan " + labelBarChart[indice];
            },
            label: function (tooltipItem, data) {
                let type = data.datasets[tooltipItem.datasetIndex].label;
                let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                let unit = ' %';
                return type + ' : ' + value + unit;
            }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            stacked: true,
        }],
        xAxes: [{
            ticks: {
                beginAtZero: true,
                max: 100
            },
            stacked: true,
        }]
    }
};

const barChart = document.getElementById("barChart").getContext('2d');

const showBarChart = new Chart(barChart, {
    type: typeBarChart,
    data: {
        labels: labelBarChart,
        datasets: dataBarChart
    },
    options: optionsBarChart
});