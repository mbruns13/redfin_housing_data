url_geojson = "https://raw.githubusercontent.com/mbruns13/project_3_housing_data/Molly/Code/assets/cb_2021_us_county_5m.geojson"

function createMap(data) {
    // Create the tile layer that will be the background of our map.
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Create a baseMaps object to hold the lightmap layer.
    var baseMaps = {
        "Street Map": street,
        "Topographic Map": topo
    };

    var geojson = L.geoJSON(data, {
        style: {
            color: "black",
            fillColor: "none",
            weight: .5
        }
    })

    // Create an overlayMaps object to hold the earthquakes layer.
    var overlayMaps = {
        "Counties": geojson
    };
    // Create the map object with options.
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 4,
        layers: [street, geojson]
    });

    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    layerControl = L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

};




d3.json(url_geojson).then(function(data) {
    console.log(data);
    //     // console.log(data.features[0])

    createMap(data);

});