import React from 'react';

class EducationOutput extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="cv-education">
          <div className="cv-education__dates">
            {this.props.education.educationFrom} {this.props.education.educationTo !== undefined && '- ' + this.props.education.educationTo}
          </div>

          <div className="cv-education__institution">
            {this.props.education.institution} {this.props.education.institution !== undefined && ', ' + this.props.education.city}
            <div className="cv-education__subject">
              {this.props.education.subject}
            </div>
            <div className="cv-education__qualification">
              {this.props.education.qualType}
            </div>

          </div>

        </div>
  )
  }
}

export default EducationOutput;
