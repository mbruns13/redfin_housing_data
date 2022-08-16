CREATE TABLE county_data(
	period_end DATE,
    year INTEGER,
    county VARCHAR,
    state VARCHAR,
    property_type VARCHAR,
    inventory INTEGER,
    homes_sold INTEGER,
    median_sale_price DECIMAL,
    median_ppsf DECIMAL
);

CREATE TABLE pop_data(
	county VARCHAR,
    state VARCHAR,
    pop_estimate_2019 INTEGER,
    pop_estimate_2020 INTEGER,
    pop_estimate_2021 INTEGER
);