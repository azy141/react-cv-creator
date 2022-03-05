import React from 'react';

class GeneralInformation extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="general-information">
          <form className="generalInformation">
            <label htmlFor="firstName">First name</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.firstName || ''} id="firstName" type='text' name="firstName"/>

            <label htmlFor="lastName">Last name</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.lastName || ''} id="lastName" type='text' name="lastName"/>

            <label htmlFor="title">Title</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.title || ''} id="title" type='text' name="title"/>

            {/*<label htmlFor="photo">Photo</label>*/}
            {/*<input onChange={} value={} id="photo" type='text' name="photo"/>*/}

            <label htmlFor="address">Address</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.address || ''} id="address" type='text' name="address"/>

            <label htmlFor="phoneNumber">Phone number</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.phoneNumber || ''} id="phoneNumber" type='tel' name="phoneNumber"/>

            <label htmlFor="email">Email</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.email || ''} id="phoneNumber" type='email' name="email"/>

            <label htmlFor="description">Description</label>
            <input onChange={this.props.handleInputChange} value={this.props.formValues.description || ''} id="description" type='text' name="description"/>
          </form>
        </div>
    )
  }
}

export default GeneralInformation;
