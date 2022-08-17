import config
import os
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template, redirect, jsonify


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
        f"/api/v1.0/states"
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




# Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
