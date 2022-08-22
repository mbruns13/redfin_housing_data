// http://127.0.0.1:5000/api/v1.0/counties
// http://127.0.0.1:5000/api/v1.0/grouped_data
// http://127.0.0.1:5000/api/v1.0/merged_data
// http://127.0.0.1:5000/api/v1.0/housing_data_2019
// http://127.0.0.1:5000/api/v1.0/housing_data_2020
// http://127.0.0.1:5000/api/v1.0/housing_data_2021
// http://127.0.0.1:5000/api/v1.0/county_data_deltas


var counties_url = "http://127.0.0.1:5000//api/v1.0/counties";

function init() {
    d3.json(counties_url).then((data) => {
        // var counties = [];
        console.log(counties);

    });
}






// // Sets function for D3 library to gather json data
// function init() {
//     var selector = d3.select("#selDataset");
//     d3.json(url).then((data) => {
//         var names = data.names;
//         names.forEach((sampleID) => {
//             selector.append("option").text(sampleID).property("value", sampleID);
//         });
//         var sample1 = names[0];
//         buildMeta(sample1);
//         buildChart(sample1);
//     });
// }
// // Calls the chart and panel building functions when an option is changed
// function optionChanged(sample) {
//     buildMeta(sample);
//     buildChart(sample);
// }
// // Builds the metadata panel
// function buildMeta(sample) {
//     d3.json(url).then((data) => {
//         var meta = data.metadata;
//         var data = meta.filter(sampleObj => sampleObj.id == sample);
//         var result = data[0];
//         var panel = d3.select("#sample-metadata");
//         panel.html("");
//         panel.append("h6").text("ID : " + result.id);
//         panel.append("h6").text('Ethnicity : ' + result.ethnicity);
//         panel.append("h6").text("Gender : " + result.gender);
//         panel.append("h6").text("Age : " + result.age);
//         panel.append("h6").text("Location : " + result.location);
//         panel.append("h6").text("BBTYPE : " + result.bbtype);
//         panel.append("h6").text("WFREQ : " + data[0].wfreq);
//     });
// }
// // Builds both the bar chart and the bubble chart
// // Fetches data needed and sets variables for individual arrays
// function buildChart(sample) {
//     d3.json(url).then((data) => {
//         var samples = data.samples;
//         var data = samples.filter(sampleObj => sampleObj.id == sample);
//         var otu = data[0].otu_ids;
//         var values = data[0].sample_values;
//         var labels = data[0].otu_labels;
//         // Sets up ticks and labels when hovering over bar chart and maps
//         // top ten bacteria values in descending order along with labels
//         var yticks = otu.slice(0, 10).map(otu => "OTU " + otu).reverse();
//         var xticks = values.slice(0, 10).reverse()
//         var hoverlabels = labels.slice(0, 10).reverse()
//         // Trace for the bar chart. 
//         var barData = [{
//             type: 'bar',
//             orientation: 'h',
//             text: hoverlabels,
//             y: yticks,
//             x: xticks,
//         }
//         ];
//         // Sets title for bar chart
//         var barLayout = {
//             title: 'Top 10 Bacteria Cultures Found'
//         };
//         // Plots bar chart
//         Plotly.newPlot("bar", barData, barLayout);

//         // Trace for the bubble chart
//         var bubbleData = [{
//             type: 'bubble',
//             x: otu,
//             y: values,
//             text: labels,
//             mode: 'markers',
//             marker: { size: values, color: otu }
//         }];
//         // Labels and titles for bubble chart
//         var bubbleLayout = {
//             title: 'Bacteria Cultures Per Sample',
//             xaxis: { title: "OTU ID" },
//             hovermode: 'closest',
//         };
//         // Plots the bubble chart
//         Plotly.newPlot("bubble", bubbleData, bubbleLayout);
//     });
// };
// // Calls init() function to create first sample panel and charts
// init();