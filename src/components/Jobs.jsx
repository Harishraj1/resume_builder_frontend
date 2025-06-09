import React, { useState } from 'react';
import '../styles/jobs.css';

function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    experience: '',
    jobRole: '',
  });

  // Dummy job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore',
      salary: '₹15L - ₹25L PA',
      experience: '5-8 years',
      description: 'We are looking for a Senior Software Engineer with expertise in React, Node.js, and cloud technologies. The ideal candidate should have experience in building scalable applications.',
      postedDate: '2 days ago',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateX',
      location: 'Mumbai',
      salary: '₹20L - ₹30L PA',
      experience: '4-7 years',
      description: 'Seeking an experienced Product Manager to drive product strategy and execution. Must have experience in agile methodologies and product lifecycle management.',
      postedDate: '1 day ago',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research'],
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Hyderabad',
      salary: '₹18L - ₹28L PA',
      experience: '3-6 years',
      description: 'Looking for a Data Scientist to work on machine learning projects and data analysis. Experience with Python, R, and ML frameworks required.',
      postedDate: '3 days ago',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'DesignHub',
      location: 'Delhi',
      salary: '₹12L - ₹18L PA',
      experience: '2-5 years',
      description: 'Join our creative team as a UX/UI Designer. Must have experience in user research, wireframing, and creating beautiful interfaces.',
      postedDate: '4 days ago',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Pune',
      salary: '₹16L - ₹24L PA',
      experience: '4-7 years',
      description: 'DevOps Engineer needed to manage our cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes required.',
      postedDate: '5 days ago',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      company: 'WebSolutions',
      location: 'Chennai',
      salary: '₹14L - ₹22L PA',
      experience: '3-6 years',
      description: 'Full Stack Developer position available. Must have experience with MERN stack and modern web development practices.',
      postedDate: '1 day ago',
      skills: ['MERN Stack', 'JavaScript', 'HTML/CSS', 'Git'],
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle resume upload logic here
      console.log('Resume uploaded:', file.name);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesExperience = !filters.experience || job.experience === filters.experience;
    const matchesRole = !filters.jobRole || job.title.toLowerCase().includes(filters.jobRole.toLowerCase());

    return matchesSearch && matchesLocation && matchesExperience && matchesRole;
  });

  return (
    <div className="jobs-container">
      <div className="jobs-content">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filter-group">
            <h3 className="filter-title">Location</h3>
            <input
              type="text"
              name="location"
              className="filter-input"
              placeholder="Enter location"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Experience Level</h3>
            <select
              name="experience"
              className="filter-select"
              value={filters.experience}
              onChange={handleFilterChange}
            >
              <option value="">Select Experience</option>
              <option value="0-2 years">0-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-8 years">5-8 years</option>
              <option value="8+ years">8+ years</option>
            </select>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Job Role</h3>
            <select
              name="jobRole"
              className="filter-select"
              value={filters.jobRole}
              onChange={handleFilterChange}
            >
              <option value="">Select Role</option>
              <option value="software engineer">Software Engineer</option>
              <option value="product manager">Product Manager</option>
              <option value="data scientist">Data Scientist</option>
              <option value="designer">UX/UI Designer</option>
              <option value="devops">DevOps Engineer</option>
            </select>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Upload Resume</h3>
            <label className="resume-upload">
              <div className="upload-icon">📄</div>
              <div className="upload-text">Click to upload your resume</div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        {/* Jobs List Section */}
        <div>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search jobs by title or company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="jobs-list">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div>
                    <h2 className="job-title">{job.title}</h2>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <p className="job-salary">{job.salary}</p>
                </div>

                <div className="job-details">
                  <span className="job-tag">{job.location}</span>
                  <span className="job-tag">{job.experience}</span>
                  {job.skills.map((skill, index) => (
                    <span key={index} className="job-tag">{skill}</span>
                  ))}
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-footer">
                  <span className="posted-date">Posted {job.postedDate}</span>
                  <a href="#" className="apply-button">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs; 