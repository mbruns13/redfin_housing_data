url2019 = "http://127.0.0.1:5000/api/v1.0/housing_data_2019"
url2020 = "http://127.0.0.1:5000/api/v1.0/housing_data_2020"
url2021 = "http://127.0.0.1:5000/api/v1.0/housing_data_2021"

function init() {
    buildChart(url2019);
};

function optionChanged(year) {
    buildChart(year);
};

function buildChart(year) {
    if (year == "2019") {
        year = url2019;
    } else if (year == "2020") {
        year = url2020;
    } else {
        year = url2021
    };
    d3.json(year).then((data) => {
        var listTypes = [];
        var allResidential = [];
        var singleFamily = [];
        var condoCoop = [];
        var multiFamily = [];
        var townhouse = [];
        for (let i = 0; i < data.length; i++) {
            listTypes.push((data[i].property_type))
        };
        let uniqueTypes = [...new Set(listTypes)]
        let uniqueCount = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].property_type == uniqueTypes[0]) {
                allResidential++
            }
                else if (data[i].property_type == uniqueTypes[1]) {
                    singleFamily++;
                }
                else if (data[i].property_type == uniqueTypes[2]) {
                    condoCoop++;
                }
                else if (data[i].property_type == uniqueTypes[3]) {
                    multiFamily++;
                }
                else (data[i].property_type == uniqueTypes[4]) ;{
                    townhouse++;
                }
        };
        uniqueCount.push(allResidential,singleFamily,condoCoop,multiFamily,townhouse);
        // Trace for the bubble chart
        var bubbleData = [{
            type: 'bubble',
            x: uniqueTypes,
            y: uniqueCount,
            text: uniqueTypes,
            mode: 'markers',
            marker: {
                // size: ((uniqueCount[0]/100),(uniqueCount[1]/100),(uniqueCount[2]/100),(uniqueCount[3]/100),(uniqueCount[4]/100)),
                size: [20,40,80,100,200],
                color: [uniqueTypes]
            }
        }];
        // Labels and titles for bubble chart
        var bubbleLayout = {
            title: 'Property Type Distribution',
            xaxis: { title: "Property Types" },
            hovermode: 'closest',
        };
        // Plots the bubble chart
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
})};

init();