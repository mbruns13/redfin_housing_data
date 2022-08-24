state_data_url = "http://127.0.0.1:5000/api/v1.0/merged_data"


d3.json(state_data_url).then(function(data) {
        console.log(data[0]);
    
    const states_2019 = [];
    const homes_sold_2019 = [];
    const population_est_2019 = [];
    const sale_prices_2019 = [];

    const states_2020 = [];
    const homes_sold_2020 = [];
    const population_est_2020 = [];
    const sale_prices_2020 = [];

    const states_2021 = [];
    const homes_sold_2021 = [];
    const population_est_2021 = [];
    const sale_prices_2021 = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i]["year"] == 2019 && data[i]["state"]=="California") {
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
    return { states_2019, homes_sold_2019, population_est_2019, sale_prices_2019, states_2020, homes_sold_2020, population_est_2020, sale_prices_2020, states_2021, homes_sold_2021, population_est_2021, sale_prices_2021 }
    }
})
    var ctx = document.getElementById("myChart");

    var data = {
        labels: [states_2019],
        datasets: [
            {
                label: "Blue",
                backgroundColor: "blue",
                data: [population_est_2019]
            },
            {
                label: "Red",
                backgroundColor: "red",
                data: [sale_prices_2019]
            },
            {
                label: "Green",
                backgroundColor: "green",
                data: [homes_sold_2019]
            }
        ]
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            barValueSpacing: 5,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    }
                }]
            }
        }

   //return { states_2019, homes_sold_2019, population_est_2019, sale_prices_2019, states_2020, homes_sold_2020, population_est_2020, sale_prices_2020, states_2021, homes_sold_2021, population_est_2021, sale_prices_2021 }
})
