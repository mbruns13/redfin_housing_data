import config
import os
from decimal import Decimal
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template, redirect, jsonify

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)

#################################################
# Database Setup
#################################################
url = f'{config.user}:{config.password}@{config.hostname}:{config.port}/housing_db'

# engine = create_engine("sqlite:///housing.sqlite")

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

# example from class activity using flask / sqlite
# @app.route("/api/v1.0/passengers")
# def passengers():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of passenger data including the name, age, and sex of each passenger"""
#     # Query all passengers
#     results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     all_passengers = []
#     for name, age, sex in results:
#         passenger_dict = {}
#         passenger_dict["name"] = name
#         passenger_dict["age"] = age
#         passenger_dict["sex"] = sex
#         all_passengers.append(passenger_dict)

#     return jsonify(all_passengers)


@app.route("/")
# index = homepage of application
def index():
    """List available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/counties<br/>"
        f"/api/v1.0/grouped_data"
    )

@app.route("/api/v1.0/counties")
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
def grouped():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return grouped data"""
    # Query all counties
    results = session.query(County.year, County.state, County.county, County.property_type, func.avg(County.inventory), func.sum(County.homes_sold), func.avg(County.median_sale_price), func.avg(County.median_ppsf)).group_by(County.year, County.state, County.county, County.property_type).all()

    session.close()
    
    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []

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

        all_data.append(data_dict)

    return jsonify(all_data)

# Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
