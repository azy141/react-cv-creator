import React from 'react';
import EducationOutput from './EducationOutput';
import ExperienceOutput from './ExperienceOutput';

class CvOutput extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
        <div className="cv-output">
          <div className="cv-header">
            <div className="cv-image">
              {this.props.cv.image &&
                <img src={this.props.cv.image} alt={this.props.cv.generalInformation.firstName + this.props.cv.generalInformation.lastName} />
              }
            </div>
            <div className="cv-header__name">
              {this.props.cv.generalInformation.firstName} {this.props.cv.generalInformation.lastName}
            </div>

            <div className="cv-header__job-title">
              {this.props.cv.empInfo[0].position}
            </div>

            <div className="cv-header__address">
              {this.props.cv.generalInformation.address}
            </div>

            <div className="cv-header__phone">
              {this.props.cv.generalInformation.phoneNumber}
            </div>

            <div className="cv-header__email">
              {this.props.cv.generalInformation.email}
            </div>
          </div>

          <div className="cv-main-content">

            <div className="cv-description">
              <div className="cv-description__heading header">Description</div>
              {this.props.cv.generalInformation.description}
            </div>

            <div className="cv-experience__heading header">Experience</div>
            {this.props.cv.empInfo.map(function (empinfo) {
              return <ExperienceOutput experience={empinfo} />
            })}

            <div className="cv-education__heading header">Education</div>
            {this.props.cv.eduInfo.map(function (eduInfo) {
              return <EducationOutput education={eduInfo} />
            })}

          </div>
        </div>
    )
  }
}

export default CvOutput;
