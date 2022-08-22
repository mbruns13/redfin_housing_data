// used code from: https://leafletjs.com/examples/choropleth/

// colors/legend are not yet updated to reflect our data

var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4,
});

// https://leaflet-extras.github.io/leaflet-providers/preview/
var tiles = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(myMap);

var geoData = "https://raw.githubusercontent.com/mbruns13/project_3_housing_data/main/Code/Resources/updated.geojson"
var geojson;

d3.json(geoData).then(function(data) {
    console.log(data.features[1]);


    L.geoJson(data, {
        style: {
            weight: 1,
            opacity: 1,
            color: 'none',
            // dashArray: '3',
            fillOpacity: 0.6
        }
    }).addTo(myMap);

    function getColor(d) {
        return d > 1561134 ? '#23b029' :
            d > 22476 ? '#80cc74' :
            d > 125 ? '#c1e6b8' :
            // d > 0 ? '#c0eabe' :
            // d = 0 ? '#ffffff' :
            d > -71 ? '#ffffff' :
            d > -18763 ? '#ff795a' :
            d > -1451000 ? '#f00606' :
            '#E9E9E9';

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
        this._div.innerHTML = '<h4>Average Median Sale Price - All Residential</h4>' + (props ?
            '<b>' + props.NAMELSAD + ', ' + props.STATE_NAME + '</b><br />Change in average median sale price from 2019 to 2020: $' + props.yoy_2020_diff + ' ' :
            'Hover over a county');

    };

    info.addTo(myMap);

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function(map) {

        var div = L.DomUtil.create('div', 'info legend'),
            // grades = [0, 10, 20, 50, 100, 200, 500, 1000],
            grades = [NaN, -1451000, -18763, -71, 125, 22476, 1561134]
        labels = [];

        // generate a label for grey / undefined counties on the map
        div.innerHTML =
            '<i style="background:' + getColor(grades[1]) + '"></i> ' +
            'Undefined' + '<br>';
        // loop through our density intervals and generate a label with a colored square for each interval

        for (var i = 1; i < grades.length; i++) {
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