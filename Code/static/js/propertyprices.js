const state_url = "http://127.0.0.1:5000/api/v1.0/state_data";

const states_array = []
const labels = ["Condo/Co-op", "Multi-Family (2-4 Unit)", "Single Family Residential", "Townhouse"];



d3.json(state_url).then(function(data) {
    console.log(data);
    console.log(data[0]);

    function init() {
        var trace1 = {
            x: labels,
            y: [160857.86363636365, 139234.5394736842, 165123.272, 158759.84895833334],
            name: '2019',
            type: 'bar',
            marker: {
                color: 'pink',
                line: {
                    color: 'red',
                    width: 1
                }
            }
        };

        var trace2 = {
            x: labels,
            y: [172937.1794871795, 141289.53488372092, 191170.05708661416, 169394.52906976745],
            name: '2020',
            type: 'bar',
            marker: {
                color: 'lightblue',
                line: {
                    color: 'blue',
                    width: 1
                }
            }
        };

        var trace3 = {
            x: labels,
            y: [199971.91780821918, 146056.06382978722, 212085.49411764706, 195500.0744680851],
            name: '2021',
            type: 'bar',
            marker: {
                color: 'lightgreen',
                line: {
                    color: 'green',
                    width: 1
                }
            }
        };

        var barData = [trace1, trace2, trace3];

        var barLayout = { barmode: 'group' };

        let state_prices_bar = Plotly.newPlot('state_prices_bar', barData, barLayout);
    };






    for (var i = 0; i < data.length; i++) {
        if (data[i]["year"] == 2019) {
            states_array.push(data[i].state)
        } else if (data[i]["year"] == 2020) {
            states_array.push(data[i].state)
        } else if (data[i]["year"] == 2021) {
            states_array.push(data[i].state)
        }
    }
    const uniqueStates = [...new Set(states_array)];
    // console.log(uniqueStates)

    // add state names to dropdown selection
    for (let i = 0; i < uniqueStates.length; i++) {
        let dropdown = d3.select("select").append("option").text(uniqueStates[i]);
        // console.log(uniqueStates)
    };

    d3.selectAll("#selDataset").on("change", optionChanged);

    function optionChanged() {
        // Use D3 to select the dropdown menu and assign the value of the dropdown menu option to a variable
        let currentID = d3.select("#selDataset").property("value");
        // console.log(dataset)
        console.log(currentID)

        // let currentPropertyTypes2019 = []
        // let currentHomesSold2019 = []
        // let currentPropertyTypes2020 = []
        // let currentHomesSold2020 = []
        // let currentPropertyTypes2021 = []
        // let currentHomesSold2021 = []

        let property_prices_dict2019 = [{
                "property_type": "Condo/Co-op",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Single Family Residential",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Townhouse",
                "avg_median_sale_price": 0,
            }
        ]
        let property_prices_dict2020 = [{
                "property_type": "Condo/Co-op",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Single Family Residential",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Townhouse",
                "avg_median_sale_price": 0,
            }
        ]
        let property_prices_dict2021 = [{
                "property_type": "Condo/Co-op",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Single Family Residential",
                "avg_median_sale_price": 0,
            },
            {
                "property_type": "Townhouse",
                "avg_median_sale_price": 0,
            }
        ]

        for (var i = 0; i < data.length; i++) {
            if (data[i]["state"] == currentID) {
                if (data[i]["year"] == 2019) {
                    for (var t = 0; t < property_prices_dict2019.length; t++) {
                        if (data[i].property_type == property_prices_dict2019[t].property_type) {
                            property_prices_dict2019[t].avg_median_sale_price = parseInt(data[i].avg_median_sale_price)
                        }
                    }
                } else if (data[i]["year"] == 2020) {
                    for (var t = 0; t < property_prices_dict2020.length; t++) {
                        if (data[i].property_type == property_prices_dict2020[t].property_type) {
                            property_prices_dict2020[t].avg_median_sale_price = parseInt(data[i].avg_median_sale_price)
                        }
                    }
                } else if (data[i]["year"] == 2021) {
                    for (var t = 0; t < property_prices_dict2021.length; t++) {
                        if (data[i].property_type == property_prices_dict2021[t].property_type) {
                            property_prices_dict2021[t].avg_median_sale_price = parseInt(data[i].avg_median_sale_price)
                        }
                    }
                }
            }
        }
        console.log(property_prices_dict2019)

        // let barTrace1 = {
        //     x: labels,
        //     y: [property_prices_dict2019[0].total_homes_sold, property_prices_dict2019[1].total_homes_sold, property_prices_dict2019[2].total_homes_sold, property_prices_dict2019[3].total_homes_sold],
        //     name: '2019',
        //     type: 'bar'
        // };
        // let barTrace2 = {
        //     x: labels,
        //     y: [property_prices_dict2020[0].total_homes_sold, property_prices_dict2020[1].total_homes_sold, property_prices_dict2020[2].total_homes_sold, property_prices_dict2020[3].total_homes_sold],
        //     name: '2020',
        //     type: 'bar'
        // };
        // let barTrace3 = {
        //     x: labels,
        //     y: [property_prices_dict2021[0].total_homes_sold, property_prices_dict2021[1].total_homes_sold, property_prices_dict2021[2].total_homes_sold, property_prices_dict2021[3].total_homes_sold],
        //     name: '2021',
        //     type: 'bar'
        // };
        // let updatedBarData = { barTrace1, barTrace2, barTrace3 }
        // let barLayout = { barmode: 'group' };
        var update = {
            y: [
                [property_prices_dict2019[0].avg_median_sale_price, property_prices_dict2019[1].avg_median_sale_price, property_prices_dict2019[2].avg_median_sale_price, property_prices_dict2019[3].avg_median_sale_price],
                [property_prices_dict2020[0].avg_median_sale_price, property_prices_dict2020[1].avg_median_sale_price, property_prices_dict2020[2].avg_median_sale_price, property_prices_dict2020[3].avg_median_sale_price],
                [property_prices_dict2021[0].avg_median_sale_price, property_prices_dict2021[1].avg_median_sale_price, property_prices_dict2021[2].avg_median_sale_price, property_prices_dict2021[3].avg_median_sale_price],
            ]
        }

        Plotly.restyle(state_prices_bar, update, [0, 1, 2]);

    }


    init();


});