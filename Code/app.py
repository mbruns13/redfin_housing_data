import config
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_cors import CORS, cross_origin


from flask import Flask, render_template, redirect, jsonify, request

#################################################
# Database Setup
#################################################
url = f'{config.user}:{config.password}@{config.hostname}:{config.port}/housing_db'
engine = create_engine(f'postgresql://{url}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the tables
County = Base.classes.county_data
Pop = Base.classes.pop_data

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
@cross_origin(origin='*')
# index = homepage of application
def index():
    """List available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/counties<br/>"
        f"/api/v1.0/grouped_data<br/>"
        f"/api/v1.0/merged_data<br/>"
        f"/api/v1.0/housing_data_2019<br/>"
        f"/api/v1.0/housing_data_2020<br/>"
        f"/api/v1.0/housing_data_2021<br/>"
        f"/api/v1.0/county_data_deltas<br/>"
        f"/api/v1.0/state_data<br/>"
        f"/api/v1.0/property_totals"
    )
        #return render_template("index.html")


@app.route("/api/v1.0/counties")
@cross_origin(origin='*')
def counties():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all county names"""
    # Query all counties
    results = session.query(County.county).distinct().all()

    session.close()
    
    # Convert list of tuples into a normal list
    all_counties = list(np.ravel(results))

    return jsonify(all_counties)


@app.route("/api/v1.0/grouped_data")
@cross_origin(origin='*')
def grouped():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return grouped data"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.county, County.property_type).all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    all_housing_data = []

    for year, state, county, property_type, inventory, homes_sold, median_sale_price, median_ppsf in results:
        data_dict = {}
        data_dict["year"] = year
        data_dict["state"] = state
        data_dict["county"] = county
        data_dict["property_type"] = property_type
        data_dict["avg_inventory"] = str(inventory)
        data_dict["total_homes_sold"] = str(homes_sold)
        data_dict["avg_median_sale_price"] = str(median_sale_price)
        data_dict["avg_median_ppsf"] = str(median_ppsf)

        all_housing_data.append(data_dict)
    return jsonify(all_housing_data)

@app.route("/api/v1.0/merged_data")
# @app.route("/api/v1.0/merged_data", methods=['GET', 'POST'])
@cross_origin(origin='*')
def merged():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return merged data (For now, All Residential property types only)"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf), Pop.pop_estimate_2019, Pop.pop_estimate_2020, Pop.pop_estimate_2021).group_by(County.year, County.state, County.county,Pop.pop_estimate_2019, Pop.pop_estimate_2020, Pop.pop_estimate_2021).filter(County.property_type == "All Residential").join(Pop, (Pop.state == County.state) & (Pop.county == County.county)).all()
    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    merged_data = []

    for year, state, county, inventory, homes_sold, median_sale_price, median_ppsf, pop_estimate_2019, pop_estimate_2020, pop_estimate_2021 in results:
        merged_dict = {}
        merged_dict["year"] = year
        merged_dict["state"] = state
        merged_dict["county"] = county
        merged_dict["avg_inventory"] = str(inventory)
        merged_dict["total_homes_sold"] = str(homes_sold)
        merged_dict["avg_median_sale_price"] = str(median_sale_price)
        merged_dict["avg_median_ppsf"] = str(median_ppsf)
        merged_dict["pop_estimate_2019"] = pop_estimate_2019
        merged_dict["pop_estimate_2020"] = pop_estimate_2020
        merged_dict["pop_estimate_2021"] = pop_estimate_2021


        merged_data.append(merged_dict)

        # if request.method == 'GET':
        #     return jsonify(merged_data)  # serialize and use JSON headers
        # # POST request
        # if request.method == 'POST':
        #     print(request.get_json())  # parse as JSON
        #     return 'Sucesss', 200

    # return render_template("test_chart.html", merged_data=merged_data)
    return jsonify(merged_data)

@app.route("/api/v1.0/housing_data_2019")
@cross_origin(origin='*')
def county2019():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return 2019 data"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.county, County.property_type).filter(County.year == '2019').all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    housing_data_2019 = []

    for year, state, county, property_type, inventory, homes_sold, median_sale_price, median_ppsf in results:
        dict2019 = {}
        dict2019["year"] = year
        dict2019["state"] = state
        dict2019["county"] = county
        dict2019["property_type"] = property_type
        dict2019["avg_inventory"] = str(inventory)
        dict2019["total_homes_sold"] = str(homes_sold)
        dict2019["avg_median_sale_price"] = str(median_sale_price)
        dict2019["avg_median_ppsf"] = str(median_ppsf)

        housing_data_2019.append(dict2019)

    return jsonify(housing_data_2019)


@app.route("/api/v1.0/housing_data_2020")
@cross_origin(origin='*')
def county2020():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return 2020 data"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.county, County.property_type).filter(County.year == '2020').all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    housing_data_2020 = []

    for year, state, county, property_type, inventory, homes_sold, median_sale_price, median_ppsf in results:
        dict2020 = {}
        dict2020["year"] = year
        dict2020["state"] = state
        dict2020["county"] = county
        dict2020["property_type"] = property_type
        dict2020["avg_inventory"] = str(inventory)
        dict2020["total_homes_sold"] = str(homes_sold)
        dict2020["avg_median_sale_price"] = str(median_sale_price)
        dict2020["avg_median_ppsf"] = str(median_ppsf)

        housing_data_2020.append(dict2020)

    return jsonify(housing_data_2020)


@app.route("/api/v1.0/housing_data_2021")
@cross_origin(origin='*')
def county2021():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return 2021 data"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.county, County.property_type).filter(County.year == '2021').all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    housing_data_2021 = []

    for year, state, county, property_type, inventory, homes_sold, median_sale_price, median_ppsf in results:
        dict2021 = {}
        dict2021["year"] = year
        dict2021["state"] = state
        dict2021["county"] = county
        dict2021["property_type"] = property_type
        dict2021["avg_inventory"] = str(inventory)
        dict2021["total_homes_sold"] = str(homes_sold)
        dict2021["avg_median_sale_price"] = str(median_sale_price)
        dict2021["avg_median_ppsf"] = str(median_ppsf)

        housing_data_2021.append(dict2021)
    return jsonify(housing_data_2021)

@app.route("/api/v1.0/state_data")
@cross_origin(origin='*')
def state_housing_data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return merged data (For now, All Residential property types only)"""
    # Query all counties
    results = session.query(County.year, County.state, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.property_type).filter(County.property_type != "All Residential").all()
    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    state_data = []

    for year, state, property_type, inventory, homes_sold, median_sale_price, median_ppsf in results:
        state_dict = {}
        state_dict["year"] = year
        state_dict["state"] = state
        state_dict["property_type"] = property_type
        state_dict["avg_inventory"] = str(inventory)
        state_dict["total_homes_sold"] = str(homes_sold)
        state_dict["avg_median_sale_price"] = str(median_sale_price)
        state_dict["avg_median_ppsf"] = str(median_ppsf)


        state_data.append(state_dict)


    return jsonify(state_data)



@app.route("/api/v1.0/property_totals")
@cross_origin(origin='*')
def properties():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return properties / homes sold data"""
    # Query all counties
    results = session.query(County.year, County.property_type, func.sum(County.homes_sold)).group_by(County.year, County.property_type).filter(County.property_type != "All Residential").all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_data
    property_totals = []

    for year, property_type, homes_sold in results:
        property_totals_dict = {}
        property_totals_dict["year"] = year
        property_totals_dict["property_type"] = property_type
        property_totals_dict["total_homes_sold"] = str(homes_sold)
       

        property_totals.append(property_totals_dict)

    return jsonify(property_totals)











# Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
