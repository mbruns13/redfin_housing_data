const myHeaders = new Headers();
myHeaders.append('Accept', 'Header 2');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};

const query_url = "http://127.0.0.1:5000/api/v1.0/property_totals";

const property_types = []
    // const property_type_2020 = []
    // const property_type_2021 = []
const homes_sold_2019 = []
const homes_sold_2020 = []
const homes_sold_2021 = []

// async function getData() {
d3.json(query_url).then(function(data) {
    // console.log(data[0]);

    for (var i = 0; i < data.length; i++) {
        if (data[i]["year"] == 2019) {
            property_types.push(data[i].property_type)
            homes_sold_2019.push(parseInt(data[i].total_homes_sold))

        } else if (data[i]["year"] == 2020) {
            homes_sold_2020.push(parseInt(data[i].total_homes_sold))

        } else if (data[i]["year"] == 2021) {
            homes_sold_2021.push(parseInt(data[i].total_homes_sold))

        }

        // } 
    }

    return property_types, homes_sold_2019, homes_sold_2020, homes_sold_2021


});
// };

var barChartData = {
    labels: property_types,
    datasets: [{
            label: "2019",
            backgroundColor: "pink",
            borderColor: "red",
            borderWidth: 1,
            data: homes_sold_2019
        },
        {
            label: "2020",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: homes_sold_2020
        },
        {
            label: "2021",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: homes_sold_2021
        },
    ]
};

var chartOptions = {
    responsive: true,
    legend: {
        position: "bottom"
    },
    title: {
        display: true,
        text: "Property Types Sold by Year"
    },

}

window.onload = function() {
    var ctx = document.getElementById("property_bar").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
};