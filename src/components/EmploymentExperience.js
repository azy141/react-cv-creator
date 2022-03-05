import React from 'react';

class EmploymentExperience extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
        <div className="employment-experience">
          <form className="employmentExperience">
            <label htmlFor="position">Position</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.position || ''} id="position" type='text' name="position"/>

            <label htmlFor="company">Company</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.company || ''} id="company" type='text' name="company"/>

            <label htmlFor="city">City</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.city || ''} id="city" type='text' name="city"/>

            {/*<label htmlFor="photo">Photo</label>*/}
            {/*<input onChange={} value={} id="photo" type='text' name="photo"/>*/}

            <label htmlFor="employmentFrom">From</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.employmentFrom || ''} id="employmentFrom" type='text' name="employmentFrom"/>

            <label htmlFor="employmentTo">To</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.employmentTo || ''} id="employmentTo" type='text' name="employmentTo"/>
          </form>
        </div>
    )
  }
}

export default EmploymentExperience;
