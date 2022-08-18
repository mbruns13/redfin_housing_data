// used code from: https://leafletjs.com/examples/choropleth/

// colors/legend are not yet updated to reflect our data

var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4,
});

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

var geoData = "https://raw.githubusercontent.com/mbruns13/project_3_housing_data/main/Code/Resources/updated.geojson"
var geojson;

d3.json(geoData).then(function(data) {
    console.log(data.features[1]);

    L.geoJson(data).addTo(myMap);

    function getColor(d) {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
            d > 200 ? '#E31A1C' :
            d > 100 ? '#FC4E2A' :
            d > 50 ? '#FD8D3C' :
            d > 20 ? '#FEB24C' :
            d > 10 ? '#FED976' :
            'none';

    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.yoy_2020_diff),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.6
        };
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        myMap.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        })
    }
    var info = L.control();

    info.onAdd = function(myMap) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function(props) {
        // if (props.yoy_2020_diff) {
        this._div.innerHTML = '<h4>Average Median Sale Price - All Residential</h4>' + (props ?
            '<b>' + props.NAMELSAD + ', ' + props.STATE_NAME + '</b><br />Change in average median sale price from 2019 to 2020: $' + props.yoy_2020_diff + ' ' :
            'Hover over a state');
        // } else {
        //     this._div.innerHTML = '<h4>Average Median Sale Price - All Residential</h4>' + (props ?
        //         '<b>' + props.NAMELSAD + ', ' + props.STATE_NAME + '</b><br />Change in average median sale price from 2019 to 2020 could not be calculated.' :
        //         'Hover over a state');
        // }
    };

    info.addTo(myMap);

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function(map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 20, 50, 100, 200, 500, 1000],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(myMap);



});