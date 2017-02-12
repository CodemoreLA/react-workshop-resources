import React, { Component } from 'react';

class Form extends Component {

  // 1. create a constructor, in a moment you
  // will bind your form submit function here



  // 2. create a function for handling the form submit
  // take in the event and prevent page refresh
  // create constant to hold form data
  // pass constant to postFormData prop/function

  render() {
    return(
  // Add handleFormSubmit function to the onSubmit event on opening form tag
      <form onSubmit={}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>First Name</label>

              {/* Add onChange handler and value */}
              <input
                onChange={}
                value={}
                type="text"
                className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Last Name</label>

              {/* we will grab this value using refs */}
              <input
                type="text"
                ref={}
                className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>This person codes

              {/* Add checked prop and onClick handler */}
              <input
                checked={}
                onClick={}
                type="checkbox" />
            </label>

            {/* This select will use the ref technique to grab value */}
            <select className="form-control"
              ref={}>

              {/* map over ageRanges array to produce options */}
              <option value="">Select age range</option>
              {this.props.ageRanges.map(/* ... */)}
            </select>
          </div>
          <div className="col-sm-6 radios">
            <h4>Which would you like for lunch?</h4>
            {/* map over lunchOptions prop to produce radio options */}
            {/* also add onLunchSelect handler to the onClick event */}
            {this.props.lunchOptions.map(/* ... */))}
          </div>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit" />
      </form>
    )
  }
}

export default Form;
