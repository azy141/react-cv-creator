import './App.css';
import GeneralInformation from './components/GeneralInformation';
import EmploymentExperience from './components/EmploymentExperience';
import EducationalExperience from './components/EducationalExperience';
import CvOutput from './components/CvOutput';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      generalInformation: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      educationalExperience: {
        institution: '',
        city: '',
        qualType: '',
        subject: '',
        educationFrom: '',
        educationTo: '',
      },
      employmentExperience: {
        position: '',
        company: '',
        city: '',
        employmentFrom: '',
        employmentTo: '',
      },
      empInfo: [{
        employmentExperience: {
          position: '',
          company: '',
          city: '',
          employmentFrom: '',
          employmentTo: '',
        }
      }],
      eduInfo: [{
        educationalExperience: {
          institution: '',
          city: '',
          qualType: '',
          subject: '',
          educationFrom: '',
          educationTo: '',
        }
      }],
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      let ourObject = prevState[event.target.form.className];
      ourObject[name] = value;
      return {ourObject};
    });
  }

  additionalEmploymentInfo(event) {
    this.setState(prevState => {
      let ourObject = prevState.empInfo;
      ourObject.push({
        employmentExperience: {
          position: '',
          company: '',
          city: '',
          employmentFrom: '',
          employmentTo: '',
        }
      })
      return {ourObject};
    });
  }

  additionalEducationInfo(event) {
    this.setState(prevState => {
      let ourObject = prevState.eduInfo;
      ourObject.push({
        educationalExperience: {
          institution: '',
          city: '',
          qualType: '',
          subject: '',
          educationFrom: '',
          educationTo: '',
        }
      })
      return {ourObject};
    });
  }

  render() {
    const newthis = this;
    return (
        <div className="App">
          <div className="cv-form-data">
            <h2>General Information</h2>
            <GeneralInformation handleInputChange={this.handleInputChange.bind(this)} formValues={this.state.generalInformation}/>

            <h2>Employment Information</h2>
            {this.state.empInfo.map(function (empinfo) {
              return <EmploymentExperience handleInputChange={newthis.handleInputChange.bind(newthis)} formValues={empinfo}/>
            })}
            <button onClick={this.additionalEmploymentInfo.bind(this)}>Add more</button>

            <h2>Educational Information</h2>
            {this.state.eduInfo.map(function (eduInfo) {
              return <EducationalExperience handleInputChange={newthis.handleInputChange.bind(newthis)} formValues={eduInfo}/>
            })}
            <button onClick={this.additionalEducationInfo.bind(this)}>Add more</button>

          </div>
          <CvOutput cv={this.state} />
        </div>
    );
  }
}

export default App;
