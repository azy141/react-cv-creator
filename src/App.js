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

  handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  }

  handleMultiInputChange(empInfo,index,objectName, event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      let ourObject = prevState[objectName][index];
      ourObject[name] = value;
      return {ourObject};
    });
  }

  additionalEmploymentInfo(event) {
    this.setState(prevState => {
      let empInfo = [...prevState.empInfo, {
        employmentExperience: {
          position: '',
          company: '',
          city: '',
          employmentFrom: '',
          employmentTo: '',
        }
      },
      ];
      return {empInfo};
    });
  }

  additionalEducationInfo(event) {
    this.setState(prevState => {
      let eduInfo = [...prevState.eduInfo, {
        educationalExperience: {
          institution: '',
          city: '',
          qualType: '',
          subject: '',
          educationFrom: '',
          educationTo: '',
        }
      },
      ];
      return {eduInfo};
    });
  }

  render() {
    const newthis = this;
    return (
        <div className="App">
          <div className="cv-form-data">
            <h2>General Information</h2>
            <label htmlFor="photo">Photo</label>
            <input type="file" multiple accept="image/*" onChange={this.handleImageChange.bind(this)} />

            <GeneralInformation handleInputChange={this.handleInputChange.bind(this)} formValues={this.state.generalInformation}/>

            <h2>Employment Information</h2>
            {this.state.empInfo.map(function (empinfo, index) {
              return <EmploymentExperience handleInputChange={newthis.handleMultiInputChange.bind(newthis, empinfo, index, 'empInfo')} formValues={empinfo}/>
            })}
            <button onClick={this.additionalEmploymentInfo.bind(this)}>Add more</button>

            <h2>Educational Information</h2>
            {this.state.eduInfo.map(function (eduInfo, index) {
              return <EducationalExperience handleInputChange={newthis.handleMultiInputChange.bind(newthis, eduInfo, index, 'eduInfo')} formValues={eduInfo}/>
            })}
            <button onClick={this.additionalEducationInfo.bind(this)}>Add more</button>

          </div>
          <CvOutput cv={this.state} />
        </div>
    );
  }
}

export default App;
