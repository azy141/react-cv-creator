import React from 'react';

class EducationalExperience extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="educational-experience">
          <form className="educationalExperience">
            <label htmlFor="institution">Institution name</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.institution || ''} id="institution" type='text' name="institution"/>

            <label htmlFor="city">City</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.city || ''} id="city" type='text' name="city"/>

            <label htmlFor="qualType">Qualification type</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.qualType || ''} id="qualType" type='text' name="qualType"/>

            <label htmlFor="subject">Subject</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.subject || ''} id="subject" type='text' name="subject"/>

            <label htmlFor="educationFrom">From</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.educationFrom || ''} id="educationFrom" type='text' name="educationFrom"/>

            <label htmlFor="educationTo">To</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.educationTo || ''} id="educationTo" type='text' name="educationTo"/>
            {this.props.index !== 0 &&
                <button className="delete-button" onClick={this.props.handleDelete}>Delete</button>
            }
          </form>
        </div>
    )
  }
}

export default EducationalExperience;
