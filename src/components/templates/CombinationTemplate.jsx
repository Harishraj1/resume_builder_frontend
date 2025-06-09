// import React from 'react';
// import PropTypes from 'prop-types';

// function CombinationTemplate({
//   personalInfo,
//   summary,
//   experience,
//   techSkills,
//   hobbies,
//   profilePicture,
//   isSectionEmpty,
// }) {
//   // Register GSAP plugin
//   React.useEffect(() => {
//     if (typeof window !== 'undefined' && typeof gsap !== 'undefined') {
//       gsap.registerPlugin(Elastic);
//     }
//   }, []);

//   // Convert SCSS variables to CSS custom properties
//   const styles = `
//     :root {
//       --profile-bg: #fff;
//       --skills-bg: #3d3e42;
//       --profile-color: #9099a0;
//       --skills-color: #9099a0;
//       --link-color: #66cc99;
//       --bold-color: #4a4e51;
//       --time: 0.6s;
//     }

//     *, *::after, *::before {
//       box-sizing: border-box;
//     }

//     .resume-wrapper {
//       position: relative;
//       text-align: center;
//       width: 8.27in; /* A4 width for PDF */
//       min-height: 11.69in; /* A4 height */
//       font-family: 'Open Sans', sans-serif;
//       font-size: 16px;
//       line-height: 1.5em;
//       color: #333;
//       background: #fff;
//     }

//     .container {
//       min-height: 600px;
//     }

//     a {
//       color: var(--link-color);
//       text-decoration: none;
//     }

//     .clearfix::after, .clearfix::before {
//       content: " ";
//       display: table;
//     }

//     .clearfix::after {
//       clear: both;
//     }

//     .bold {
//       color: var(--bold-color);
//       font-weight: 400;
//     }

//     .profile {
//       background: var(--profile-bg);
//       width: 40%;
//       float: left;
//       color: var(--profile-color);
//       padding: 60px 60px 40px 40px;
//     }

//     @media (max-width: 850px) {
//       .profile {
//         width: 100%;
//         padding: 80px 15% 40px 10%;
//       }
//     }

//     @media (max-width: 450px) {
//       .profile {
//         padding: 40px 10% 20px 5%;
//       }
//     }

//     .name-wrapper {
//       float: left;
//       width: 60%;
//     }

//     .profile h1 {
//       font-size: 2.5em;
//       text-align: left;
//       font-family: 'Varela Round', sans-serif;
//       color: var(--bold-color);
//       text-transform: uppercase;
//       line-height: 1em;
//       padding-top: 40px;
//     }

//     @media (max-width: 1200px) {
//       .profile h1 {
//         padding-top: 20px;
//       }
//     }

//     @media (max-width: 450px) {
//       .profile h1 {
//         font-size: 1.8em;
//         padding-top: 20px;
//       }
//     }

//     .profile li {
//       margin-bottom: 10px;
//     }

//     .picture-resume-wrapper {
//       width: 40%;
//       display: block;
//       float: left;
//     }

//     @media (max-width: 1200px) {
//       .picture-resume-wrapper {
//         width: 100%;
//       }
//     }

//     .picture-resume {
//       width: 220px;
//       height: 220px;
//       background-size: cover;
//       border-radius: 50%;
//       margin-right: 0;
//       display: table;
//       position: relative;
//       vertical-align: middle;
//     }

//     .picture-resume span {
//       display: table-cell;
//       vertical-align: middle;
//       position: relative;
//       margin: 0 auto;
//       z-index: 10;
//       text-align: center;
//     }

//     .picture-resume img {
//       border-radius: 50%;
//       width: 130px;
//       height: 130px;
//       object-fit: cover;
//     }

//     @media (max-width: 1500px) {
//       .picture-resume img {
//         width: 80px;
//       }
//     }

//     @media (max-width: 1200px) {
//       .picture-resume img {
//         width: 120px;
//         height: 120px;
//       }
//     }

//     @media (max-width: 1500px) {
//       .picture-resume {
//         width: 150px;
//         height: 150px;
//       }
//     }

//     @media (max-width: 1200px) {
//       .picture-resume {
//         width: 200px;
//         height: 200px;
//       }
//     }

//     @media (max-width: 450px) {
//       .picture-resume {
//         width: 180px;
//         height: 180px;
//       }
//     }

//     .contact-info {
//       margin-top: 100px;
//       font-weight: 300;
//     }

//     @media (max-width: 1200px) {
//       .contact-info {
//         margin-top: 70px;
//       }
//     }

//     @media (max-width: 450px) {
//       .contact-info {
//         margin-top: 50px;
//       }
//     }

//     .list-titles {
//       float: left;
//       text-align: left;
//       font-weight: 600;
//       width: 40%;
//       color: var(--bold-color);
//     }

//     .list-content {
//       float: left;
//       width: 60%;
//       text-align: left;
//       font-weight: 300;
//     }

//     .contact-presentation {
//       text-align: left;
//       font-weight: 300;
//       margin-top: 100px;
//       margin-bottom: 100px;
//     }

//     @media (max-width: 1200px) {
//       .contact-presentation {
//         margin-top: 70px;
//         margin-bottom: 70px;
//       }
//     }

//     @media (max-width: 850px) {
//       .contact-presentation {
//         margin-top: 50px;
//         margin-bottom: 50px;
//       }
//     }

//     .contact-social .list-titles,
//     .contact-social .list-content {
//       width: 50%;
//     }

//     .profile svg {
//       width: 100%;
//       position: absolute;
//       top: 0;
//       left: 0;
//     }

//     .st0, .st1 {
//       fill: #66cc99;
//     }

//     .experience {
//       background: var(--skills-bg);
//       width: 60%;
//       float: left;
//       position: relative;
//       color: var(--skills-color);
//       font-weight: 300;
//       min-height: 100%;
//       padding: 60px 60px 40px 40px;
//     }

//     @media (max-width: 850px) {
//       .experience {
//         width: 100%;
//         padding: 80px 15% 40px 10%;
//       }
//     }

//     @media (max-width: 450px) {
//       .experience {
//         padding: 40px 10% 20px 5%;
//       }
//     }

//     .experience h3.experience-title {
//       color: var(--link-color);
//       text-align: left;
//       text-transform: uppercase;
//       font-size: 1.2em;
//       margin-bottom: 20px;
//       font-weight: 400;
//     }

//     .company-wrapper {
//       width: 30%;
//       float: left;
//       text-align: left;
//       padding-right: 5%;
//       margin-bottom: 60px;
//     }

//     @media (max-width: 450px) {
//       .company-wrapper {
//         width: 100%;
//         margin-bottom: 20px;
//       }
//     }

//     .job-wrapper {
//       width: 70%;
//       float: left;
//       text-align: left;
//       padding-right: 5%;
//       margin-bottom: 60px;
//     }

//     @media (max-width: 450px) {
//       .job-wrapper {
//         width: 100%;
//         margin-bottom: 40px;
//       }
//     }

//     .experience-title {
//       color: white;
//       margin-bottom: 15px;
//     }

//     .section-wrapper {
//       width: 50%;
//       float: left;
//       text-align: left;
//       color: var(--skills-color);
//       font-weight: 300;
//       margin-bottom: 20px;
//     }

//     @media (max-width: 450px) {
//       .section-wrapper {
//         width: 100%;
//       }
//     }

//     .section-wrapper:nth-child(3) {
//       padding-right: 8%;
//     }

//     .section-wrapper h3.section-title {
//       color: var(--link-color);
//       text-align: left;
//       text-transform: uppercase;
//       font-size: 1.2em;
//       margin-bottom: 20px;
//       font-weight: 400;
//     }

//     .skill-percentage {
//       margin-bottom: 10px;
//       position: relative;
//     }

//     .skill-percentage::after {
//       content: "";
//       width: 100%;
//       height: 6px;
//       background: var(--bold-color);
//       display: block;
//       margin-top: 3px;
//     }

//     .skill-percentage::before {
//       content: "";
//       height: 6px;
//       background: var(--link-color);
//       position: absolute;
//       margin-top: 3px;
//       bottom: 0;
//     }

//     .skill-percentage:nth-child(1)::before { width: 80%; }
//     .skill-percentage:nth-child(2)::before { width: 90%; }
//     .skill-percentage:nth-child(3)::before { width: 50%; }
//     .skill-percentage:nth-child(4)::before { width: 60%; }
//     .skill-percentage:nth-child(5)::before { width: 70%; }
//     .skill-percentage:nth-child(6)::before { width: 70%; }
//     .skill-percentage:nth-child(7)::before { width: 70%; }

//     /* Disable animations for PDF generation */
//     .pdf-download .skill-percentage::before,
//     .pdf-download .skill-percentage::after {
//       animation: none !important;
//     }

//     @media print {
//       .resume-wrapper {
//         width: 8.27in;
//         height: 11.69in;
//         box-shadow: none;
//         margin: 0;
//       }

//       .profile, .experience {
//         width: 100%;
//         float: none;
//         padding: 20px;
//       }

//       .picture-resume svg {
//         display: none;
//       }

//       .skill-percentage::before, .skill-percentage::after {
//         animation: none;
//       }
//     }
//   `;

//   // Initialize GSAP animations on component mount
//   React.useEffect(() => {
//     // Only run animations in browser environment and if GSAP is loaded
//     if (typeof window !== 'undefined' && typeof gsap !== 'undefined') {
//       const randomBetween = (min, max) => {
//         const number = Math.floor(Math.random() * (max - min + 1)) + min;
//         return number !== 0 ? number : 0.5;
//       };

//       const select = (s) => document.querySelector(s);

//       const tl = gsap.timeline();

//       for (let i = 0; i < 11; i++) {
//         const t = gsap.to(select(`.bubble${i}`), {
//           duration: randomBetween(1, 1.5),
//           x: randomBetween(12, 15) * (randomBetween(-1, 1)),
//           y: randomBetween(12, 15) * (randomBetween(-1, 1)),
//           repeat: -1,
//           repeatDelay: randomBetween(0.2, 0.5),
//           yoyo: true,
//           ease: Elastic.easeOut.config(1, 0.5),
//         });

//         tl.add(t, (i + 1) / 0.6);
//       }

//       tl.seek(50);

//       // Cleanup
//       return () => {
//         tl.kill();
//       };
//     }
//   }, []);

//   return (
//     <div className="resume-wrapper">
//       <style>{styles}</style>
//       <section className="profile section-padding">
//         <div className="container">
//           <div className="picture-resume-wrapper">
//             <div className="picture-resume">
//               <span>
//                 <img
//                   src={profilePicture || 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}
//                   alt="Profile"
//                 />
//               </span>
//               <svg version="1.1" viewBox="0 0 350 350">
//                 <defs>
//                   <filter id="goo">
//                     <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//                     <feColorMatrix
//                       in="blur"
//                       mode="matrix"
//                       values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
//                       result="cm"
//                     />
//                   </filter>
//                 </defs>
//                 <g filter="url(#goo)">
//                   <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130" />
//                   <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
//                   <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
//                 </g>
//               </svg>
//             </div>
//             <div className="clearfix"></div>
//           </div>
//           <div className="name-wrapper">
//             <h1>
//               {personalInfo.name || 'Your Name'} <br />
//               {personalInfo.lastName || ''}
//             </h1>
//           </div>
//           <div className="clearfix"></div>
//           <div className="contact-info clearfix">
//             <ul className="list-titles">
//               <li>Call</li>
//               <li>Mail</li>
//               <li>Web</li>
//               <li>Home</li>
//             </ul>
//             <ul className="list-content">
//               <li>{personalInfo.phone || 'Your Phone'}</li>
//               <li>{personalInfo.email || 'Your Email'}</li>
//               <li>
//                 <a href={personalInfo.portfolio || '#'}>{personalInfo.portfolio || 'Your Website'}</a>
//               </li>
//               <li>{personalInfo.address || 'Your Location'}</li>
//             </ul>
//           </div>
//           {!isSectionEmpty(summary, false) && (
//             <div className="contact-presentation">
//               <p>
//                 <span className="bold">Summary: </span>
//                 {summary}
//               </p>
//             </div>
//           )}
//           <div className="contact-social clearfix">
//             <ul className="list-titles">
//               <li>Twitter</li>
//               <li>Github</li>
//               <li>LinkedIn</li>
//             </ul>
//             <ul className="list-content">
//               <li>
//                 <a href={personalInfo.twitter || '#'}>{personalInfo.twitter || '@YourTwitter'}</a>
//               </li>
//               <li>
//                 <a href={personalInfo.github || '#'}>{personalInfo.github || 'YourGithub'}</a>
//               </li>
//               <li>
//                 <a href={personalInfo.linkedin || '#'}>{personalInfo.linkedin || 'YourLinkedIn'}</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="experience section-padding">
//         <div className="container">
//           {!isSectionEmpty(experience) && (
//             <>
//               <h3 className="experience-title">Experience</h3>
//               <div className="experience-wrapper">
//                 {experience.map((exp, index) => (
//                   <React.Fragment key={index}>
//                     <div className="company-wrapper clearfix">
//                       <div className="experience-title">{exp.company || 'Company Name'}</div>
//                       <div className="time">{exp.duration || ''}</div>
//                     </div>
//                     <div className="job-wrapper clearfix">
//                       <div className="experience-title">{exp.role || 'Your Role'}</div>
//                       <div className="company-description">
//                         <p>{exp.description || 'Description'}</p>
//                       </div>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </>
//           )}

//           {!isSectionEmpty(techSkills) && (
//             <div className="section-wrapper clearfix">
//               <h3 className="section-title">Skills</h3>
//               <ul>
//                 {techSkills.map((skill, index) => (
//                   <li key={index} className="skill-percentage">
//                     {skill.name || 'Skill'} ({skill.proficiency || 0}%)
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {!isSectionEmpty(hobbies) && (
//             <div className="section-wrapper clearfix">
//               <h3 className="section-title">Hobbies</h3>
//               {hobbies.map((hobby, index) => (
//                 <p key={index}>{hobby || 'Hobby'}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <div className="clearfix"></div>
//     </div>
//   );
// }

// CombinationTemplate.propTypes = {
//   personalInfo: PropTypes.shape({
//     name: PropTypes.string,
//     email: PropTypes.string,
//     phone: PropTypes.string,
//     linkedin: PropTypes.string,
//     portfolio: PropTypes.string,
//     address: PropTypes.string,
//     github: PropTypes.string,
//     twitter: PropTypes.string,
//     stackoverflow: PropTypes.string,
//     lastName: PropTypes.string,
//   }),
//   summary: PropTypes.string,
//   experience: PropTypes.arrayOf(
//     PropTypes.shape({
//       company: PropTypes.string,
//       role: PropTypes.string,
//       duration: PropTypes.string,
//       description: PropTypes.string,
//     })
//   ),
//   techSkills: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       proficiency: PropTypes.number,
//     })
//   ),
//   hobbies: PropTypes.arrayOf(PropTypes.string),
//   profilePicture: PropTypes.string,
//   isSectionEmpty: PropTypes.func.isRequired,
// };

// CombinationTemplate.defaultProps = {
//   personalInfo: {
//     name: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     portfolio: '',
//     address: '',
//     github: '',
//     twitter: '',
//     stackoverflow: '',
//     lastName: '',
//   },
//   summary: '',
//   experience: [],
//   techSkills: [],
//   hobbies: [],
//   profilePicture: '',
// };

// export default CombinationTemplate;


import React from 'react';
import PropTypes from 'prop-types';

function CombinationTemplate({
  personalInfo,
  summary,
  experience,
  techSkills,
  hobbies,
  profilePicture,
  isSectionEmpty,
}) {
  // Register GSAP plugin
  React.useEffect(() => {
    if (typeof window !== 'undefined' && typeof gsap !== 'undefined') {
      gsap.registerPlugin(Elastic);
    }
  }, []);

  // Convert SCSS variables to CSS custom properties
  const styles = `
    :root {
      --profile-bg: #fff;
      --skills-bg: #3d3e42;
      --profile-color: #9099a0;
      --skills-color: #9099a0;
      --link-color: #66cc99;
      --bold-color: #4a4e51;
      --time: 0.6s;
    }

    *, *::after, *::before {
      box-sizing: border-box;
    }

    .resume-wrapper {
      position: relative;
      text-align: center;
      width: 8.27in; /* A4 width for PDF */
      min-height: 11.69in; /* A4 height */
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      line-height: 1.5em;
      color: #333;
      background: #fff;
    }

    .container {
      min-height: 600px;
    }

    a {
      color: var(--link-color);
      text-decoration: none;
    }

    .clearfix::after, .clearfix::before {
      content: " ";
      display: table;
    }

    .clearfix::after {
      clear: both;
    }

    .bold {
      color: var(--bold-color);
      font-weight: 400;
    }

    .profile {
      background: var(--profile-bg);
      width: 40%;
      float: left;
      color: var(--profile-color);
      padding: 60px 60px 40px 40px;
    }

    @media (max-width: 850px) {
      .profile {
        width: 100%;
        padding: 80px 15% 40px 10%;
      }
    }

    @media (max-width: 450px) {
      .profile {
        padding: 40px 10% 20px 5%;
      }
    }

    .name-wrapper {
      float: left;
      width: 60%;
    }

    .profile h1 {
      font-size: 2.5em;
      text-align: left;
      font-family: 'Varela Round', sans-serif;
      color: var(--bold-color);
      text-transform: uppercase;
      line-height: 1em;
      padding-top: 40px;
    }

    @media (max-width: 1200px) {
      .profile h1 {
        padding-top: 20px;
      }
    }

    @media (max-width: 450px) {
      .profile h1 {
        font-size: 1.8em;
        padding-top: 20px;
      }
    }

    .profile li {
      margin-bottom: 10px;
    }

    .picture-resume-wrapper {
      width: 40%;
      display: block;
      float: left;
    }

    @media (max-width: 1200px) {
      .picture-resume-wrapper {
        width: 100%;
      }
    }

    .picture-resume {
      width: 220px;
      height: 220px;
      background-size: cover;
      border-radius: 50%;
      margin-right: 0;
      display: table;
      position: relative;
      vertical-align: middle;
    }

    .picture-resume span {
      display: table-cell;
      vertical-align: middle;
      position: relative;
      margin: 0 auto;
      z-index: 10;
      text-align: center;
    }

    .picture-resume img {
      border-radius: 50%;
      width: 130px;
      height: 130px;
      object-fit: cover;
    }

    @media (max-width: 1500px) {
      .picture-resume img {
        width: 80px;
      }
    }

    @media (max-width: 1200px) {
      .picture-resume img {
        width: 120px;
        height: 120px;
      }
    }

    @media (max-width: 1500px) {
      .picture-resume {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 1200px) {
      .picture-resume {
        width: 200px;
        height: 200px;
      }
    }

    @media (max-width: 450px) {
      .picture-resume {
        width: 180px;
        height: 180px;
      }
    }

    .contact-info {
      margin-top: 100px;
      font-weight: 300;
    }

    @media (max-width: 1200px) {
      .contact-info {
        margin-top: 70px;
      }
    }

    @media (max-width: 450px) {
      .contact-info {
        margin-top: 50px;
      }
    }

    .list-titles {
      float: left;
      text-align: left;
      font-weight: 600;
      width: 40%;
      color: var(--bold-color);
    }

    .list-content {
      float: left;
      width: 60%;
      text-align: left;
      font-weight: 300;
    }

    .contact-presentation {
      text-align: left;
      font-weight: 300;
      margin-top: 100px;
      margin-bottom: 100px;
    }

    @media (max-width: 1200px) {
      .contact-presentation {
        margin-top: 70px;
        margin-bottom: 70px;
      }
    }

    @media (max-width: 850px) {
      .contact-presentation {
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }

    .contact-social .list-titles,
    .contact-social .list-content {
      width: 50%;
    }

    .profile svg {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .st0, .st1 {
      fill: #66cc99;
    }

    .experience {
      background: var(--skills-bg);
      width: 60%;
      float: left;
      position: relative;
      color: var(--skills-color);
      font-weight: 300;
      min-height: 100%;
      padding: 60px 60px 40px 40px;
    }

    @media (max-width: 850px) {
      .experience {
        width: 100%;
        padding: 80px 15% 40px 10%;
      }
    }

    @media (max-width: 450px) {
      .experience {
        padding: 40px 10% 20px 5%;
      }
    }

    .experience h3.experience-title {
      color: var(--link-color);
      text-align: left;
      text-transform: uppercase;
      font-size: 1.2em;
      margin-bottom: 20px;
      font-weight: 400;
    }

    .company-wrapper {
      width: 30%;
      float: left;
      text-align: left;
      padding-right: 5%;
      margin-bottom: 60px;
    }

    @media (max-width: 450px) {
      .company-wrapper {
        width: 100%;
        margin-bottom: 20px;
      }
    }

    .job-wrapper {
      width: 70%;
      float: left;
      text-align: left;
      padding-right: 5%;
      margin-bottom: 60px;
    }

    @media (max-width: 450px) {
      .job-wrapper {
        width: 100%;
        margin-bottom: 40px;
      }
    }

    .experience-title {
      color: white;
      margin-bottom: 15px;
    }

    .section-wrapper {
      width: 50%;
      float: left;
      text-align: left;
      color: var(--skills-color);
      font-weight: 300;
      margin-bottom: 20px;
    }

    @media (max-width: 450px) {
      .section-wrapper {
        width: 100%;
      }
    }

    .section-wrapper:nth-child(3) {
      padding-right: 8%;
    }

    .section-wrapper h3.section-title {
      color: var(--link-color);
      text-align: left;
      text-transform: uppercase;
      font-size: 1.2em;
      margin-bottom: 20px;
      font-weight: 400;
    }

    .skill-percentage {
      margin-bottom: 10px;
      position: relative;
    }

    .skill-percentage::after {
      content: "";
      width: 100%;
      height: 6px;
      background: var(--bold-color);
      display: block;
      margin-top: 3px;
    }

    .skill-percentage::before {
      content: "";
      height: 6px;
      background: var(--link-color);
      position: absolute;
      margin-top: 3px;
      bottom: 0;
    }

    .skill-percentage:nth-child(1)::before { width: 80%; }
    .skill-percentage:nth-child(2)::before { width: 90%; }
    .skill-percentage:nth-child(3)::before { width: 50%; }
    .skill-percentage:nth-child(4)::before { width: 60%; }
    .skill-percentage:nth-child(5)::before { width: 70%; }
    .skill-percentage:nth-child(6)::before { width: 70%; }
    .skill-percentage:nth-child(7)::before { width: 70%; }

    /* Disable animations for PDF generation */
    .pdf-download .skill-percentage::before,
    .pdf-download .skill-percentage::after {
      animation: none !important;
    }

    @media print {
      .resume-wrapper {
        width: 8.27in;
        height: 11.69in;
        box-shadow: none;
        margin: 0;
      }

      .profile, .experience {
        width: 100%;
        float: none;
        padding: 20px;
      }

      .picture-resume svg {
        display: none;
      }

      .skill-percentage::before, .skill-percentage::after {
        animation: none;
      }
    }
  `;

  // Initialize GSAP animations on component mount
  React.useEffect(() => {
    // Only run animations in browser environment and if GSAP is loaded
    if (typeof window !== 'undefined' && typeof gsap !== 'undefined') {
      const randomBetween = (min, max) => {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number !== 0 ? number : 0.5;
      };

      const select = (s) => document.querySelector(s);

      const tl = gsap.timeline();

      for (let i = 0; i < 11; i++) {
        const t = gsap.to(select(`.bubble${i}`), {
          duration: randomBetween(1, 1.5),
          x: randomBetween(12, 15) * (randomBetween(-1, 1)),
          y: randomBetween(12, 15) * (randomBetween(-1, 1)),
          repeat: -1,
          repeatDelay: randomBetween(0.2, 0.5),
          yoyo: true,
          ease: Elastic.easeOut.config(1, 0.5),
        });

        tl.add(t, (i + 1) / 0.6);
      }

      tl.seek(50);

      // Cleanup
      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div className="resume-wrapper">
      <style>{styles}</style>
      <section className="profile section-padding">
        <div className="container">
          <div className="picture-resume-wrapper">
            <div className="picture-resume">
              <span>
                <img
                  src={profilePicture || 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}
                  alt="Profile"
                />
              </span>
              <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                      result="cm"
                    />
                  </filter>
                </defs>
                <g filter="url(#goo)">
                  <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130" />
                  <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
                </g>
              </svg>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="name-wrapper">
            <h1>
              {personalInfo.name || 'Your Name'} <br />
              {personalInfo.lastName || ''}
            </h1>
          </div>
          <div className="clearfix"></div>
          <div className="contact-info clearfix">
            <ul className="list-titles">
              <li>Call</li>
              <li>Mail</li>
              <li>Web</li>
              <li>Home</li>
            </ul>
            <ul className="list-content">
              <li>{personalInfo.phone || 'Your Phone'}</li>
              <li>{personalInfo.email || 'Your Email'}</li>
              <li>
                <a href={personalInfo.portfolio || '#'}>{personalInfo.portfolio || 'Your Website'}</a>
              </li>
              <li>{personalInfo.address || 'Your Location'}</li>
            </ul>
          </div>
          {!isSectionEmpty(summary, false) && (
            <div className="contact-presentation">
              <p>
                <span className="bold">Summary: </span>
                {summary}
              </p>
            </div>
          )}
          <div className="contact-social clearfix">
            <ul className="list-titles">
              <li>Twitter</li>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
            <ul className="list-content">
              <li>
                <a href={personalInfo.twitter || '#'}>{personalInfo.twitter || '@YourTwitter'}</a>
              </li>
              <li>
                <a href={personalInfo.github || '#'}>{personalInfo.github || 'YourGithub'}</a>
              </li>
              <li>
                <a href={personalInfo.linkedin || '#'}>{personalInfo.linkedin || 'YourLinkedIn'}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="experience section-padding">
        <div className="container">
          {!isSectionEmpty(experience) && (
            <>
              <h3 className="experience-title">Experience</h3>
              <div className="experience-wrapper">
                {experience.map((exp, index) => (
                  <React.Fragment key={index}>
                    <div className="company-wrapper clearfix">
                      <div className="experience-title">{exp.company || 'Company Name'}</div>
                      <div className="time">{exp.duration || ''}</div>
                    </div>
                    <div className="job-wrapper clearfix">
                      <div className="experience-title">{exp.role || 'Your Role'}</div>
                      <div className="company-description">
                        <p>{exp.description || 'Description'}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          {!isSectionEmpty(techSkills) && (
            <div className="section-wrapper clearfix">
              <h3 className="section-title">Skills</h3>
              <ul>
                {techSkills.map((skill, index) => (
                  <li key={index} className="skill-percentage">
                    {skill.name || 'Skill'} ({skill.proficiency || 0}%)
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isSectionEmpty(hobbies) && (
            <div className="section-wrapper clearfix">
              <h3 className="section-title">Hobbies</h3>
              {hobbies.map((hobby, index) => (
                <p key={index}>{hobby || 'Hobby'}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="clearfix"></div>
    </div>
  );
}

CombinationTemplate.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    portfolio: PropTypes.string,
    address: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    stackoverflow: PropTypes.string,
    lastName: PropTypes.string,
  }),
  summary: PropTypes.string,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      role: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  techSkills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      proficiency: PropTypes.number,
    })
  ),
  hobbies: PropTypes.arrayOf(PropTypes.string),
  profilePicture: PropTypes.string,
  isSectionEmpty: PropTypes.func.isRequired,
};

CombinationTemplate.defaultProps = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    address: '',
    github: '',
    twitter: '',
    stackoverflow: '',
    lastName: '',
  },
  summary: '',
  experience: [],
  techSkills: [],
  hobbies: [],
  profilePicture: '',
};

export default CombinationTemplate;