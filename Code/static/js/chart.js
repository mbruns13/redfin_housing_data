const myHeaders = new Headers();
myHeaders.append('Accept', 'Header 2');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};

const merged_data_url = "http://127.0.0.1:5000/api/v1.0/merged_data";
const state_merged_data_url = "http://127.0.0.1:5000/api/v1.0/state_merged_data";

const states_2019 = []
const homes_sold_2019 = []
const population_est_2019 = []
const sale_prices_2019 = []

const states_2020 = []
const homes_sold_2020 = []
const population_est_2020 = []
const sale_prices_2020 = []

const states_2021 = []
const homes_sold_2021 = []
const population_est_2021 = []
const sale_prices_2021 = []

async function getData() {
    d3.json(state_merged_data_url).then(function(data) {
        // console.log(data[0]);

        for (var i = 0; i < data.length; i++) {
            if (data[i]["year"] == 2019) {
                states_2019.push(data[i].state)
                homes_sold_2019.push(parseInt(data[i].total_homes_sold))
                population_est_2019.push(data[i].pop_estimate_2019)
                sale_prices_2019.push(parseFloat(data[i].avg_median_sale_price))

            } else if (data[i]["year"] == 2020) {
                states_2020.push(data[i].state)
                homes_sold_2020.push(parseInt(data[i].total_homes_sold))
                population_est_2020.push(data[i].pop_estimate_2020)
                sale_prices_2020.push(parseFloat(data[i].avg_median_sale_price))


            } else if (data[i]["year"] == 2021) {
                states_2021.push(data[i].state)
                homes_sold_2021.push(parseInt(data[i].total_homes_sold))
                population_est_2021.push(data[i].pop_estimate_2021)
                sale_prices_2021.push(parseFloat(data[i].avg_median_sale_price))

            }

            // } 
        }
    });
    return { states_2019, homes_sold_2019, population_est_2019, sale_prices_2019, states_2020, homes_sold_2020, population_est_2020, sale_prices_2020, states_2021, homes_sold_2021, population_est_2021, sale_prices_2021 }
};

// console.log(states_2019);
// console.log(population_est_2019);

makeChart();

async function makeChart() {
    const d = await getData();
    // const ctx = document.getElementById('myChart').getContext('2d');
    // const mixedChart = new Chart(ctx, {
    //     data: {
    //         datasets: [{
    //             type: 'bar',
    //             label: 'Homes Sold',
    //             data: d.sale_prices_2019,
    //             borderColor: 'rgb(255, 99, 132)',
    //             backgroundColor: 'rgba(255, 99, 132)'
    //         }, {
    //             type: 'line',
    //             label: 'Population Estimates 2019',
    //             data: d.homes_sold_2019,
    //             // borderColor: 'rgb(54, 162, 235)'
    //         }],
    //         labels: d.states_2019
    //     },
    //     options: {}
    // });


    ///////
    const labels = d.states_2019;
    const data = {
        labels: labels,
        datasets: [{
                label: 'Estimated Population, 2019',
                data: d.population_est_2019,
                borderColor: 'red',
                backgroundColor: 'red',
                yAxisID: 'y',
            },
            {
                label: 'Homes Sold, 2019',
                data: d.homes_sold_2019,
                borderColor: 'blue',
                backgroundColor: 'blue',
                yAxisID: 'y1',
            }
        ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Multi Axis'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },
            }
        },
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


}