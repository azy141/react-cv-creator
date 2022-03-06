import React from 'react';

class ExperienceOutput extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
    <div className="cv-experience">
      <div className="cv-experience__dates">
        {this.props.experience.employmentFrom}
        {this.props.experience.employmentTo !== undefined && ' - ' + this.props.experience.employmentTo}
      </div>

      <div className="cv-experience__job-title">
        {this.props.experience.position}
        <div className="cv-experience__job-description">
          {this.props.experience.company}
          {this.props.experience.city !== undefined && ', ' + this.props.experience.city}
        </div>
      </div>

    </div>
  )
  }
}

export default ExperienceOutput;
