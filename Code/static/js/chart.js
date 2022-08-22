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

console.log(states_2019);
console.log(population_est_2019);

makeChart();

async function makeChart() {
    const d = await getData();

    const data = {
        labels: d.states_2019,
        datasets: [{
            label: 'Population Estimates by State - 2019',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: d.population_est_2019
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config);
}