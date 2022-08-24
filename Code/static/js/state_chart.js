const state_url = "http://127.0.0.1:5000/api/v1.0/state_data";

const states_array = []
const labels = ["Condo/Co-op", "Multi-Family (2-4 Unit)", "Single Family Residential", "Townhouse"];



d3.json(state_url).then(function(data) {
    console.log(data);
    console.log(data[0]);

    function init() {
        var trace1 = {
            x: labels,
            y: [952, 80, 31797, 1135],
            name: '2019',
            type: 'bar'
        };

        var trace2 = {
            x: labels,
            y: [881, 100, 34828, 1279],
            name: '2020',
            type: 'bar'
        };

        var trace3 = {
            x: labels,
            y: [1064, 130, 36303, 1325],
            name: '2021',
            type: 'bar'
        };

        var barData = [trace1, trace2, trace3];

        var barLayout = { barmode: 'group' };

        let state_bar = Plotly.newPlot('state_bar', barData, barLayout);
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

        let testdict2019 = [{
                "property_type": "Condo/Co-op",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Single Family Residential",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Townhouse",
                "total_homes_sold": 0,
            }
        ]
        let testdict2020 = [{
                "property_type": "Condo/Co-op",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Single Family Residential",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Townhouse",
                "total_homes_sold": 0,
            }
        ]
        let testdict2021 = [{
                "property_type": "Condo/Co-op",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Multi-Family (2-4 Unit)",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Single Family Residential",
                "total_homes_sold": 0,
            },
            {
                "property_type": "Townhouse",
                "total_homes_sold": 0,
            }
        ]

        for (var i = 0; i < data.length; i++) {
            if (data[i]["state"] == currentID) {
                if (data[i]["year"] == 2019) {
                    for (var t = 0; t < testdict2019.length; t++) {
                        if (data[i].property_type == testdict2019[t].property_type) {
                            testdict2019[t].total_homes_sold = parseInt(data[i].total_homes_sold)
                        }
                    }
                } else if (data[i]["year"] == 2020) {
                    for (var t = 0; t < testdict2020.length; t++) {
                        if (data[i].property_type == testdict2020[t].property_type) {
                            testdict2020[t].total_homes_sold = parseInt(data[i].total_homes_sold)
                        }
                    }
                } else if (data[i]["year"] == 2021) {
                    for (var t = 0; t < testdict2021.length; t++) {
                        if (data[i].property_type == testdict2021[t].property_type) {
                            testdict2021[t].total_homes_sold = parseInt(data[i].total_homes_sold)
                        }
                    }
                }
            }
        }
        console.log(testdict2019)

        // let barTrace1 = {
        //     x: labels,
        //     y: [testdict2019[0].total_homes_sold, testdict2019[1].total_homes_sold, testdict2019[2].total_homes_sold, testdict2019[3].total_homes_sold],
        //     name: '2019',
        //     type: 'bar'
        // };
        // let barTrace2 = {
        //     x: labels,
        //     y: [testdict2020[0].total_homes_sold, testdict2020[1].total_homes_sold, testdict2020[2].total_homes_sold, testdict2020[3].total_homes_sold],
        //     name: '2020',
        //     type: 'bar'
        // };
        // let barTrace3 = {
        //     x: labels,
        //     y: [testdict2021[0].total_homes_sold, testdict2021[1].total_homes_sold, testdict2021[2].total_homes_sold, testdict2021[3].total_homes_sold],
        //     name: '2021',
        //     type: 'bar'
        // };
        // let updatedBarData = { barTrace1, barTrace2, barTrace3 }
        // let barLayout = { barmode: 'group' };
        var update = {
            y: [
                [testdict2019[0].total_homes_sold, testdict2019[1].total_homes_sold, testdict2019[2].total_homes_sold, testdict2019[3].total_homes_sold],
                [testdict2020[0].total_homes_sold, testdict2020[1].total_homes_sold, testdict2020[2].total_homes_sold, testdict2020[3].total_homes_sold],
                [testdict2021[0].total_homes_sold, testdict2021[1].total_homes_sold, testdict2021[2].total_homes_sold, testdict2021[3].total_homes_sold],
            ]
        }

        Plotly.restyle(state_bar, update, [0, 1, 2]);

    }


    init();


});