SELECT * FROM county_data;
SELECT * FROM pop_data;

DROP VIEW IF EXISTS data_by_year;
CREATE VIEW data_by_year AS
SELECT year, state, county, property_type, AVG(inventory) AS "avg_inventory", SUM(homes_sold) AS "total_homes_sold", AVG(median_sale_price) AS "avg_median_sale_price", AVG(median_ppsf) AS "avg_median_ppsf" 
FROM county_data
GROUP BY year, state, county, property_type;
SELECT * FROM data_by_year;


DROP VIEW IF EXISTS merged_view;
CREATE VIEW merged_view AS
SELECT year, d.state, d.county, p.pop_estimate_2019, p.pop_estimate_2020, p.pop_estimate_2021, property_type, "avg_inventory", "total_homes_sold", "avg_median_sale_price", "avg_median_ppsf" 
FROM data_by_year as d
INNER JOIN pop_data as p
ON d.county = p.county
AND d.state = p.state;
SELECT * FROM merged_view;

SELECT year, d.state, d.county, p.pop_estimate_2019, p.pop_estimate_2020, p.pop_estimate_2021, property_type, "avg_inventory", "total_homes_sold", "avg_median_sale_price", "avg_median_ppsf" 
FROM data_by_year as d
INNER JOIN pop_data as p
ON d.county = p.county
AND d.state = p.state
WHERE property_type = 'All Residential';


SELECT year, state, county, AVG(median_sale_price)
FROM county_data
WHERE property_type = 'All Residential'
GROUP BY year, state, county
ORDER BY year, state, county;

-- SELECT property_type, COUNT(property_type)
-- FROM county_data
-- GROUP BY property_type
-- ORDER BY COUNT(property_type);

-- SELECT region, state, AVG(median_sale_price) As "Average Median Sale Price"
-- FROM county_data
-- GROUP BY region, state
-- ORDER BY AVG(median_sale_price) DESC;

-- SELECT region, AVG(median_ppsf) As "Average Median Price Per Square Foot"
-- FROM county_data
-- GROUP BY region 
-- ORDER BY AVG(median_ppsf) DESC;