CREATE TABLE county_data(
	id SERIAL PRIMARY KEY,
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
	id SERIAL PRIMARY KEY,
    county VARCHAR,
    state VARCHAR,
    pop_estimate_2019 INTEGER,
    pop_estimate_2020 INTEGER,
    pop_estimate_2021 INTEGER
);