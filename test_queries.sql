SELECT * FROM county_data;

SELECT property_type, COUNT(property_type)
FROM county_data
GROUP BY property_type
ORDER BY COUNT(property_type);

SELECT region, state, AVG(median_sale_price) As "Average Median Sale Price"
FROM county_data
GROUP BY region, state
ORDER BY AVG(median_sale_price) DESC;