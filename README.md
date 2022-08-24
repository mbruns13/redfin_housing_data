# redfin_housing_data

## Project Proposal:

### Questions to answer or how you want end users (i.e. the public) to use your site or visualizations: 
* For our project, we wanted to create visualizations that allow people to better ingest Housing Market data during the COVID-19 pandemic (2019-2021):
  * Difference in housing prices over time (by County)
  * Housing price versus population estimate (by County)
  * Property type availablility over time (by County)

### Data Sources 

* Housing Data Source: <a href="https://www.kaggle.com/datasets/thuynyle/redfin-housing-market-data">2012-2021 Redfin Dataset</a> obtained using Kaggle. This residential real estate data set was created by Redfin, an online real estate brokerage. Published on January 9th, 2022, this data summarize the monthly housing market for every State and County served by Redfin in the U.S.. Redfin aggregated the data across multiple listing services and has been gracious enough to include property type in their reporting in addition to a multitude of useful columns of data. 

* Population Data Source: <a href="https://www.census.gov/data/datasets/time-series/demo/popest/2010s-state-total.html#par_textimage_1873399417">U.S. Census 2010-2019 Dataset</a> which included Population, Population Change, and Estimated Components of Population Change from the U.S. Census website for those 10 years. We also used the <a href="https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html">2020-2021 U.S. Census Dataset</a>, which provided information about Annual Population Estimates, Estimated Components of Resident Population Change, and Rates of the Components of Resident Population Change for all of the United States, including District of Columbia and Puerto Rico. 

### Database Type
* pgAdmin

### Initial ideas for pages or visuals
* Home Page
* Dashboard View: using Charts.js, Leaflet, Plotly (filter by state, county)
* Map View: Leaflet, HeatMap (filter by state, county)
* Data View: Table with available raw data for users to ingest
