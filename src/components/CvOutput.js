import React from 'react';

class CvOutput extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
        <div className="cv-output">
          <div className="cv-header">
            {this.props.cv.generalInformation.firstName} {this.props.cv.generalInformation.lastName}
            <div className="cv-header__job-title">
              {this.props.cv.employmentExperience.position}
            </div>
          </div>
          <div className="cv-main-content">
            <div className="cv-description">
              <div className="cv-description__heading">Description</div>


              {this.props.cv.generalInformation.description}
            </div>
            <div className="cv-experience__heading">Experience</div>
            <div className="cv-experience">
              <div className="cv-experience__dates">{this.props.cv.employmentExperience.employmentFrom} - {this.props.cv.employmentExperience.employmentTo}</div>
              <div className="cv-experience__job-title">
                {this.props.cv.employmentExperience.position}
                <div className="cv-experience__job-description">{this.props.cv.employmentExperience.company}, {this.props.cv.employmentExperience.city}</div>
              </div>

            </div>
            <div className="cv-education__heading">Education</div>
            <div className="cv-education">
              <div className="cv-education__dates">{this.props.cv.educationalExperience.educationFrom} - {this.props.cv.educationalExperience.educationTo}</div>
              <div className="cv-education__institution">
                {this.props.cv.educationalExperience.institution}
                <div className="cv-education__subject">{this.props.cv.educationalExperience.subject}</div>
                <div className="cv-education__qualification">{this.props.cv.educationalExperience.qualType}</div>
              </div>

            </div>
          </div>
        </div>
    )
  }
}

export default CvOutput;
