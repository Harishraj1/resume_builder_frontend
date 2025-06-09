import React from 'react';

const FunctionalTemplate = ({
  personalInfo,
  summary,
  education,
  experience,
  projects,
  techSkills = [],
  softSkills = [],
  certifications,
  languages,
  hobbies,
  profilePicture,
  roleTitle,
  additionalFields = [],
  isSectionEmpty,
}) => {
  const Section = ({ children, title }) => (
    <div className="mb-6">
      <h2 className="text-lg font-bold uppercase text-[#0bb5f4] mb-4">{title}</h2>
      {children}
    </div>
  );

  return (
    <div
      className="flex w-[800px] min-h-[1000px] mx-auto bg-[#585c68] font-montserrat text-sm leading-6"
      style={{ color: '#555555' }}
    >
      {/* Left Sidebar */}
      <div className="w-[280px] bg-[#0bb5f4] text-white">
        {/* Profile Picture */}
        <div className="w-full h-[280px] overflow-hidden">
          <img
            src={profilePicture || 'https://i.imgur.com/eCijVBe.png'}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content */}
        <div className="px-6">
          {/* Personal Info */}
          <div className="py-6 border-b-2" style={{ borderColor: '#b1eaff' }}>
            <div className="mb-4">
              <p className="text-xl font-bold uppercase">{personalInfo.name || 'Your Name'}</p>
              <p className="text-base font-medium" style={{ color: '#b1eaff' }}>
                {roleTitle || 'Your Role'}
              </p>
            </div>
            <ul className="space-y-2">
              {personalInfo.address && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fas fa-map-signs"></i>
                  </div>
                  <div style={{ color: '#b1eaff' }}>{personalInfo.address}</div>
                </li>
              )}
              {personalInfo.phone && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div style={{ color: '#b1eaff' }}>{personalInfo.phone}</div>
                </li>
              )}
              {personalInfo.email && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div style={{ color: '#b1eaff' }}>{personalInfo.email}</div>
                </li>
              )}
              {personalInfo.portfolio && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fas fa-globe"></i>
                  </div>
                  <div style={{ color: '#b1eaff' }}>
                    <a
                      href={personalInfo.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {personalInfo.portfolio}
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
          {/* Tech Skills */}
          {!isSectionEmpty(techSkills) && (
            <div className="py-6 border-b-2" style={{ borderColor: '#b1eaff' }}>
              <div className="mb-4">
                <p className="text-xl font-bold uppercase">Tech Skills</p>
              </div>
              <ul className="space-y-2">
                {techSkills.map(
                  (skill, index) =>
                    skill.name && (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                        style={{ color: '#b1eaff' }}
                      >
                        <div className="w-1/4">{skill.name}</div>
                        <div
                          className="w-3/5 h-1.5 rounded mx-1.5 relative"
                          style={{ backgroundColor: '#009fd9' }}
                        >
                          <span
                            className="absolute top-0 left-0 h-full rounded"
                            style={{
                              width: `${skill.proficiency || 90}%`,
                              backgroundColor: '#ffffff',
                            }}
                          ></span>
                        </div>
                        <div className="w-1/6 text-right">{skill.proficiency || 90}%</div>
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
          {/* Soft Skills */}
          {!isSectionEmpty(softSkills) && (
            <div className="py-6 border-b-2" style={{ borderColor: '#b1eaff' }}>
              <div className="mb-4">
                <p className="text-xl font-bold uppercase">Soft Skills</p>
              </div>
              <ul className="space-y-2">
                {softSkills.map(
                  (skill, index) =>
                    skill.trim() && (
                      <li key={index} style={{ color: '#b1eaff' }}>
                        {skill}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
          {/* Social Links */}
          <div className="py-6">
            <div className="mb-4">
              <p className="text-xl font-bold uppercase">Social</p>
            </div>
            <ul className="space-y-2">
              {personalInfo.linkedin && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">LinkedIn</p>
                    <p style={{ color: '#b1eaff' }}>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {personalInfo.linkedin}
                      </a>
                    </p>
                  </div>
                </li>
              )}
              {personalInfo.twitter && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fab fa-twitter-square"></i>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Twitter</p>
                    <p style={{ color: '#b1eaff' }}>
                      <a
                        href={personalInfo.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {personalInfo.twitter}
                      </a>
                    </p>
                  </div>
                </li>
              )}
              {personalInfo.github && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">GitHub</p>
                    <p style={{ color: '#b1eaff' }}>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {personalInfo.github}
                      </a>
                    </p>
                  </div>
                </li>
              )}
              {personalInfo.stackoverflow && (
                <li className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#ffffff', color: '#0bb5f4' }}
                  >
                    <i className="fab fa-stack-overflow"></i>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Stack Overflow</p>
                    <p style={{ color: '#b1eaff' }}>
                      <a
                        href={personalInfo.stackoverflow}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {personalInfo.stackoverflow}
                      </a>
                    </p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Right Main Section */}
      <div className="w-[520px] p-6" style={{ backgroundColor: '#ffffff' }}>
        {/* About */}
        {!isSectionEmpty(summary, false) && (
          <Section title="About Me">
            <p style={{ color: '#555555' }}>{summary}</p>
          </Section>
        )}
        {/* Work Experience */}
        {!isSectionEmpty(experience) && (
          <Section title="Work Experience">
            <ul className="pl-10 relative">
              {experience.map(
                (exp, index) =>
                  exp.company && (
                    <li key={index} className="mb-5 relative">
                      <div
                        className="absolute top-1.5 left-[-25px] w-1.5 h-1.5 rounded-full border-2"
                        style={{ borderColor: '#0bb5f4' }}
                      ></div>
                      <div
                        className="absolute top-3.5 left-[-21px] w-0.5 h-[115px]"
                        style={{ backgroundColor: '#0bb5f4' }}
                      ></div>
                      <div
                        className="text-base font-medium mb-2"
                        style={{ color: '#555555' }}
                      >
                        {exp.duration}
                      </div>
                      <div>
                        <p
                          className="text-base font-medium"
                          style={{ color: '#555555' }}
                        >
                          {exp.role}
                        </p>
                        <p style={{ color: '#555555' }}>{exp.company}</p>
                        {exp.description && (
                          <ul className="list-disc pl-5">
                            {exp.description.split('\n').map(
                              (point, i) =>
                                point.trim() && (
                                  <li key={i} style={{ color: '#555555' }}>
                                    {point}
                                  </li>
                                )
                            )}
                          </ul>
                        )}
                      </div>
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Education */}
        {!isSectionEmpty(education) && (
          <Section title="Education">
            <ul className="pl-10 relative">
              {education.map(
                (edu, index) =>
                  edu.degree && (
                    <li key={index} className="mb-5 relative">
                      <div
                        className="absolute top-1.5 left-[-25px] w-1.5 h-1.5 rounded-full border-2"
                        style={{ borderColor: '#0bb5f4' }}
                      ></div>
                      <div
                        className="absolute top-3.5 left-[-21px] w-0.5 h-[115px]"
                        style={{ backgroundColor: '#0bb5f4' }}
                      ></div>
                      <div
                        className="text-base font-medium mb-2"
                        style={{ color: '#555555' }}
                      >
                        {edu.year}
                      </div>
                      <div>
                        <p
                          className="text-base font-medium"
                          style={{ color: '#555555' }}
                        >
                          {edu.degree}
                        </p>
                        <p style={{ color: '#555555' }}>{edu.institution}</p>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Projects */}
        {!isSectionEmpty(projects) && (
          <Section title="Projects">
            <ul className="space-y-4">
              {projects.map(
                (proj, index) =>
                  proj.name && (
                    <li key={index}>
                      <p
                        className="text-base font-medium"
                        style={{ color: '#555555' }}
                      >
                        <a
                          href={proj.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {proj.name}
                        </a>
                      </p>
                      <p style={{ color: '#555555' }}>{proj.description}</p>
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Certifications */}
        {!isSectionEmpty(certifications) && (
          <Section title="Certifications">
            <ul className="space-y-4">
              {certifications.map(
                (cert, index) =>
                  cert.name && (
                    <li key={index}>
                      <p
                        className="text-base font-medium"
                        style={{ color: '#555555' }}
                      >
                        {cert.name}
                      </p>
                      <p style={{ color: '#555555' }}>
                        {cert.issuer} - {cert.year}
                      </p>
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Languages */}
        {!isSectionEmpty(languages) && (
          <Section title="Languages">
            <ul className="space-y-4">
              {languages.map(
                (lang, index) =>
                  lang.language && (
                    <li key={index} className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-base font-medium"
                          style={{ color: '#555555' }}
                        >
                          {lang.language}
                        </p>
                        <p style={{ color: '#555555' }}>{lang.proficiency}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor:
                                i < Math.floor(lang.proficiencyLevel || 0)
                                  ? '#0bb5f4'
                                  : '#d1d5db',
                            }}
                          ></span>
                        ))}
                      </div>
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Hobbies */}
        {!isSectionEmpty(hobbies) && (
          <Section title="Hobbies">
            <ul className="flex justify-between">
              {hobbies.slice(0, 4).map(
                (hobby, index) =>
                  hobby.trim() && (
                    <li
                      key={index}
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl relative"
                      style={{
                        border: '2px solid #0bb5f4',
                        color: '#0bb5f4',
                      }}
                    >
                      <i
                        className={`fas fa-${
                          hobby.toLowerCase() === 'reading'
                            ? 'book'
                            : hobby.toLowerCase() === 'gaming'
                            ? 'gamepad'
                            : hobby.toLowerCase() === 'music'
                            ? 'music'
                            : 'star'
                        }`}
                      ></i>
                      {index < 3 && (
                        <div
                          className="absolute top-10 right-[-52px] w-[50px] h-0.5"
                          style={{ backgroundColor: '#0bb5f4' }}
                        ></div>
                      )}
                    </li>
                  )
              )}
            </ul>
          </Section>
        )}
        {/* Additional Fields */}
        {additionalFields.map(
          (field, index) =>
            !isSectionEmpty(field.content) && (
              <Section key={index} title={field.title}>
                <ul className="space-y-4">
                  {field.content.map(
                    (item, i) =>
                      item.name && (
                        <li key={i}>
                          <p
                            className="text-base font-medium"
                            style={{ color: '#555555' }}
                          >
                            {item.name}
                          </p>
                          {item.year && (
                            <p style={{ color: '#555555' }}>{item.year}</p>
                          )}
                        </li>
                      )
                  )}
                </ul>
              </Section>
            )
        )}
      </div>
    </div>
  );
};

export default FunctionalTemplate;