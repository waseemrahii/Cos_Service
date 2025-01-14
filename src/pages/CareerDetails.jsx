import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';

// Static job data
const jobDetailsData = {
  "66c990548e64e829f83b43f2": {
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
      categoryName: "Credit Assessment Manager"
    }
  },
  "66c9ab44831d14d870bdb8c1": {
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
      categoryName: "Assistant General Manager"
    }
  }
};

export default function CareerDetails() {
  const { jobId } = useParams(); // Get jobId from URL
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    saySomething: '',
    cv: null,
    portfolioLink: ''
  });

  const job = jobDetailsData[jobId];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  if (!job) {
    return <p>Loading job details...</p>;
  }

  const categoryName = job?.categoryId?.categoryName || 'Unknown Category';

  return (
    <>
      <Banner />
      <section className="career-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0 jobDetails">
              <div className="job-description text-left">
                <h3>{categoryName}</h3>
                <p><strong>Vacancy:</strong> {job.vacancy || 'N/A'}</p>
                <p><strong>Employment Status:</strong> {job.employmentStatus || 'N/A'}</p>
                <p><strong>Job Responsibilities:</strong> {job.jobResponsibilities || 'N/A'}</p>
                <p><strong>Educational Requirement:</strong> {job.educationalRequirement || 'N/A'}</p>
                <p><strong>Experience Requirement:</strong> {job.experienceRequirement || 'N/A'}</p>
                <p><strong>Additional Requirement:</strong> {job.additionalRequirement || 'N/A'}</p>
                <p><strong>Salary:</strong> {job.salary ? `${job.salary} USD` : 'N/A'}</p>
                <p><strong>Job Location:</strong> {job.jobLocation || 'N/A'}</p>
                <p><strong>Apply Mail:</strong> {job.applyMail || 'N/A'}</p>
                <p><strong>Compensation & Benefit Others:</strong> {job.compensationBenefitOthers || 'N/A'}</p>
                <button
                  className="btn-custom"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#jobApplication"
                >
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Job Application */}
      <div className="modal fade" id="jobApplication" tabIndex="-1" aria-labelledby="jobApplicationLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header align-items-baseline">
              <div>
                <h3>Job Application</h3>
                <span>Please complete the form below to apply for a position.</span>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form method="post" encType="multipart/form-data" id="jobApplicationForm" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="input-box col-md-6">
                    <label htmlFor="firstName" className="text-left">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      autoComplete="off"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-box col-md-6">
                    <label htmlFor="lastName" className="text-left">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      autoComplete="off"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-box col-md-6">
                    <label htmlFor="email" className="text-left">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-box col-md-6">
                    <label htmlFor="phoneNumber" className="text-left">Phone Number</label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phoneNumber"
                      autoComplete="off"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-box col-12">
                    <label htmlFor="saySomething" className="text-left">Say Something About Yourself</label>
                    <textarea
                      className="form-control"
                      name="saySomething"
                      rows="4"
                      value={formData.saySomething}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-box col-md-6">
                    <label htmlFor="cv" className="text-left">Attach Your CV</label>
                    <input
                      className="form-control"
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="input-box col-md-6">
                    <label htmlFor="portfolioLink" className="text-left">Portfolio Link (Optional)</label>
                    <input
                      className="form-control"
                      type="url"
                      name="portfolioLink"
                      autoComplete="off"
                      value={formData.portfolioLink}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-custom mt-4">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
