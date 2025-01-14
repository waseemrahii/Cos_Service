import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

// Static job data
const jobData = [
  {
    _id: "66c990548e64e829f83b43f2",
    vacancy: 1,
    employmentStatus: "Full Time,Construction,Manager",
    jobResponsibilities: "rgttfhrttfhdfh",
    educationalRequirement: "ms",
    experienceRequirement: "dffgdshsrttjdst",
    additionalRequirement: "asdferh werh",
    salary: "3",
    jobLocation: "rgthrtd",
    applyMail: "khan@gmail.com",
    compensationBenefitOthers: "sdfsdfs",
    categoryId: {
      _id: "66c79cb2ce7aa87d99dd4074",
      categoryName: "Credit Assessment Manager"
    }
  },
  {
    _id: "66c9ab44831d14d870bdb8c1",
    vacancy: 1,
    employmentStatus: "Full Time,Construction,Manager",
    jobResponsibilities: "rgttfhrttfhdfh",
    educationalRequirement: "ms",
    experienceRequirement: "dffgdshsrttjdst",
    additionalRequirement: "asdferh werh",
    salary: "3",
    jobLocation: "rgthrtd",
    applyMail: "khan@gmail.com",
    compensationBenefitOthers: "sdfsdfs",
    categoryId: {
      _id: "66c79c92ce7aa87d99dd406e",
      categoryName: "Assistant General Manager"
    }
  }
];

export default function Career() {
  return (
    <>
      <Banner />
      <section className="career-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-box mb-5">
                <h2>Come &amp; Work With Us</h2>
                <p>
                  <i>We help customers build world-class construction projects since 2001</i>
                  <br />
                  <br />
                  <span>In Progress status signifies that a task or process has started but is not yet fully finished</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {jobData.map((job) => (
                <div key={job._id} className="job-post mb-4 p-3 border rounded" style={{ textAlign: 'left' }}>
                  <div>
                    <Link to={`/careerdetails/${job._id}`} className="title">{job.categoryId.categoryName}</Link>
                    {job.employmentStatus.split(',').map((status, index) => (
                      <span key={index} className="tag">{status.trim()}</span>
                    ))}
                  </div>
                  <Link to={`/careerdetails/${job._id}`} className="btn-custom mt-2">Apply now</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
