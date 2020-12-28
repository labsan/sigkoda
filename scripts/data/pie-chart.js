const typePieChart = 'pie';

const labelPieChart = [
    'Tidak Sesuai',
    'Kurang Sesuai',
    'Cukup Sesuai',
    'Sesuai',
    'Sangat Sesuai'
];

const valuePieChart = [
    14.776,
    145.134,
    53.807,
    112.228,
    385.831
];

const bgColorPieChart = [
    '#f44336', //red
    '#ff9800', //orange
    '#ffd600', //yellow
    '#8bc34a', //green
    '#2196f3' //blue
];

const dataPieChart = [{
    data: valuePieChart,
    backgroundColor: bgColorPieChart,
    borderColor: "#fff"
}];

const optionsPieChart = {
    responsive: true,
    tooltips: {
        enabled: true,
        mode: 'index',
        callbacks: {
            title: function (tooltipItem, data) {
                let indice = tooltipItem[0].index;
                return "Lahan " + labelPieChart[indice];
            },
            label: function (tooltipItem, data) {
                let indice = tooltipItem.index;
                let unit = ' km2';
                return "Luas " + Number(valuePieChart[indice]) + unit;
            }
        }
    },
    plugins: {
        datalabels: {
            formatter: (value, pieChart) => {
                let sum = pieChart.dataset._meta[0].total;
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
            },
            color: '#fff',
        }
    },
    legend: {
        labels: {
            boxWidth: 20,
            fontSize: 12
        }
    }
};

const pieChart = document.getElementById("pieChart").getContext('2d');
const showPieChart = new Chart(pieChart, {
    type: typePieChart,
    data: {
        labels: labelPieChart,
        datasets: dataPieChart
    },
    options: optionsPieChart
});