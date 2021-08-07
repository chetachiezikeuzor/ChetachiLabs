import Head from "next/head";
import React from "react";

export default function Resume() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/resume.css"></link>
        <link rel="stylesheet" href="/fonts.css"></link>
        <title>Chetachi Ezikeuzor Resume</title>
      </Head>

      <main className="l-main main-container">
        <div className="resume-top">
          <section className="home-container section section-grid">
            <div className="home-data section-grid">
              <h1 className="home-title">
                Chetachi <strong>Ezikeuzor</strong>
              </h1>
              <h3 className="home-profession">Front-End Software Developer</h3>
            </div>
          </section>

          <section className="social">
            <div className="social-container section-grid">
              <a
                href="chetachiezikeuzor@gmail.com"
                className="social-link"
                target="_blank"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"
                    fill="currentColor"
                  />
                </svg>{" "}
                chetachiezikeuzor@gmail.com
              </a>
              <a href=" " className="social-link" target="_blank">
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22zM6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.12 10.12 0 0 0 2.3 4.5a10.08 10.08 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"
                    fill="currentColor"
                  />
                  <path
                    d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"
                    fill="currentColor"
                  />
                </svg>{" "}
                (832) 507-3418
              </a>
              <a
                href="https://www.linkedin.com/in/chetachi/"
                className="social-link"
                target="_blank"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
                  <path
                    d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                    fill="currentColor"
                  />
                </svg>{" "}
                @chetachiezikeuzor
              </a>
              <a
                href="https://twitter.com/chetachiiii"
                className="social-link"
                target="_blank"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
                    fill="currentColor"
                  />
                </svg>{" "}
                @chetachiiii
              </a>
              <a
                href="https://github.com/chetachiezikeuzor"
                className="social-link"
                target="_blank"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                    fill="currentColor"
                  />
                </svg>{" "}
                @chetachiezikeuzor
              </a>
              <a
                href="https://chetachilabs.com"
                className="social-link"
                target="_blank"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
                    fill="currentColor"
                  />
                </svg>{" "}
                chetachilabs.com
              </a>
            </div>
          </section>

          <section className="profile section" id="profile">
            <p className="profile-description">
              Political science student eager to apply extensive knowledge of
              communication, adaptability, and problem-solving skills to achieve
              company goals. Exceptional worker with a record for exceeding
              expectations, leading young ones as well as peers, and delivering
              and developing complex projects. Strong communicator and works
              well in stressful environments.
            </p>
          </section>
        </div>

        <div className="resume" id="area-cv">
          <div className="resume-left">
            <section className="experience section" id="experience">
              <h2 className="section-title">Relevant Experience</h2>
              <div className="experience-container section-grid">
                <div className="experience-content">
                  <div className="experience-data section-grid">
                    <h3 className="experience-title">Paired Development</h3>

                    <span className="experience-company">
                      April 2021 - Present
                    </span>
                    <ul className="experience-description">
                      <li>
                        Pair programmed with Senior Developer to collaborate on
                        improvements to application plugins for Obsidian.md.
                      </li>
                      <li>
                        Improvements included but are not limited to: increase
                        in download speed, faster runtime, better user
                        experience etc.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="experience-data section-grid">
                    <a
                      target="_blank"
                      href="https://github.com/chetachiezikeuzor/cMenu-Plugin"
                    >
                      <h3 className="experience-title">cMenu Toolbar</h3>
                    </a>
                    <span className="experience-company">
                      May 2021 - Present
                    </span>
                    <ul>
                      <li>
                        A custom text editor built from scratch that allows
                        users to create and edit plain text files.{" "}
                      </li>
                      <li>
                        The component was built using JavaScript, CSS, Browser
                        APIs and Obsidian's application API.
                      </li>
                      <li>
                        The interface handles common key shortcuts and was
                        designed, built and is currently maintained by me.{" "}
                      </li>
                      <li>The component now has over 2,000 users. </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="experience-data section-grid">
                    <a
                      target="_blank"
                      href="https://github.com/chetachiezikeuzor/Highlightr-Plugin"
                    >
                      <h3 className="experience-title">
                        Highlightr Application Plugin
                      </h3>
                    </a>
                    <span className="experience-company">
                      April 2021 - Present
                    </span>
                    <ul>
                      <li>
                        A custom text editting component built from scratch that
                        allows users to supplements annotations by allowing for
                        highlighting text.{" "}
                      </li>
                      <li>
                        The component was built using JavaScript, CSS, Browser
                        APIs and Obsidian's application API.
                      </li>
                      <li>
                        The component was designed, developed and is currently
                        maintained by me.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="experience-data section-grid">
                    <a
                      target="_blank"
                      href="https://github.com/chetachiezikeuzor/MultiPix-Plugin"
                    >
                      <h3 className="experience-title">MultiPix Search Tool</h3>
                    </a>
                    <span className="experience-company">
                      April 2021 - Present
                    </span>
                    <ul>
                      <li>
                        An image search tool built from scratch that allows
                        users to search for, embed and download images directly
                        into thier workspaces.{" "}
                      </li>
                      <li>
                        The tool was built using TypeScript and multiple APIs
                        such as Unsplash and Obsidian API.
                      </li>
                      <li>
                        The interface taps into broser API's such as Navigator
                        to allow for "copy to clipboard" functionality.{" "}
                      </li>
                      <li>
                        The tool also functions as an image encoder via base64
                        encoding for ensure that images are future proof for
                        users.{" "}
                      </li>
                      <li>
                        The tool was designed, developed and is currently
                        maintained by me.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="experience-data section-grid">
                    <h3 className="experience-title">
                      Office Secretary at Diamond Health Care
                    </h3>

                    <span className="experience-company">
                      August 2017 - Present // Houston, Texas
                    </span>

                    <ul className="experience-description">
                      <li>
                        Restocked office supplies and retrieved files for staff
                      </li>
                      <li>
                        Completed clerical tasks such a filing, copying and
                        distributing mail
                      </li>
                      <li>
                        Answered incoming telephone calls, took down messages
                        and provided information
                      </li>
                      <li>
                        Kept files and digitized records organized for easy
                        updating and retrieval by 10 team members
                      </li>
                      <li>
                        Sorted and organized materials such as physical files,
                        tracking spreadsheets and reports
                      </li>
                      <li>
                        Maintained office equipment with troubleshooting and
                        maintenance abilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="resume-right">
            <section className="skills section" id="skills">
              <h2 className="section-title">Skills</h2>
              <div className="skills-content section-grid">
                <div className="skills-data">
                  <h3>Programming Languages</h3>
                  <p>CSS/Sass, HTML, JavaScript (ES6), TypeScript, Python</p>
                </div>
                <div className="skills-data">
                  <h3>Libraries & Frameworks</h3>
                  <p>Tailwind CSS, NodeJS, NextJS, TypeScript, React</p>
                </div>

                <div className="skills-data">
                  <h3>Tools & Platforms</h3>
                  <p>Git, Netlify, Webpack, Webflow</p>
                </div>
                <div className="skills-data">
                  <h3>Design</h3>
                  <p>
                    Figma, Adobe Illustrator, Adobe Premiere Pro, Adobe
                    Photoshop
                  </p>
                </div>
              </div>
            </section>
            <section className="references section" id="references">
              <h2 className="section-title">References</h2>
              <div className="references-container section-grid">
                <div className="references-content section-grid">
                  <h3 className="references-title">Ryan McQuen</h3>
                  <span className="references-subtitle">
                    Senior Software Developer - StockX
                  </span>
                  <ul className="reference-contact">
                    <li>Phone: 12345678</li>
                    <li>Email: Ryan@mcquen.email</li>
                    <li>Profile: github.com/ryanpcmcquen</li>
                    <li>Website: ryanpcmcquen.org</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>

              <div className="education-container section-grid">
                <div className="education-data section-grid">
                  <h3 className="education-title">Baylor University</h3>
                  <span className="education-studies">
                    {" "}
                    Bachelors of Arts in Political Science
                  </span>
                  <span className="education-year">August 2018-May 2022</span>
                </div>
              </div>
            </section>
            <section className="languages section">
              <h2 className="section-title">Languages</h2>

              <div className="languages-container">
                <p>Conversational Igbo & English</p>
              </div>
            </section>

            <section className="interests section">
              <h2 className="section-title">Interests</h2>
              <div className="interests-container section-grid">
                <div className="interests-content">
                  <svg
                    className="interest-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273c.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1l2 1v-7h2v12z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="interests-name">Reading</span>
                </div>

                <div className="interests-content">
                  <svg
                    className="interest-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="interests-name">Plugin development</span>
                </div>

                <div className="interests-content">
                  <svg
                    className="interest-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 6h-4v4h4v4h-4v4h-4v-4H8v4H4v-4h4v-4H4V8h4V4h4v4h4V4h4v4z"
                      fill="currentColor"
                    />
                    <path d="M8 8h4v4H8zm4 4h4v4h-4z" fill="currentColor" />
                  </svg>
                  <span className="interests-name">Chess</span>
                </div>

                <div className="interests-content">
                  <svg
                    className="interest-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168l4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34l-5.269-2.306L16 9.167l-7.649 4.25l-2.932-1.283l13.471-6.34l-.793 11.886z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="interests-name">Traveling</span>
                </div>

                <div className="interests-content">
                  <svg
                    className="interest-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="0.93em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 476 512"
                  >
                    <path
                      d="M378.283 64.148h-14.361v58.404c-2.143 14.636-10.959 18.011-23.936 14.362L54.596 64.149H34.564c-46.248 0-40.865-64.148 0-64.148h343.719c44.652 0 49.823 64.148 0 64.148zM61.23 137.362l285.074 69.833c21.371 5.236 29.344-27.313 7.974-32.548L69.203 104.815c-21.811-5.343-29.784 27.205-7.972 32.548zm0 69.414l285.074 69.832c21.371 5.236 29.344-27.313 7.974-32.548L69.203 174.228c-21.811-5.343-29.784 27.206-7.972 32.548zm0 69.414l285.074 69.832c21.371 5.236 29.344-27.313 7.974-32.548L69.203 243.642c-21.811-5.343-29.784 27.205-7.972 32.548zm270.833 175.791l-260.3-66.543c-10.544-3.038-19.538-1.944-22.834 14.353v50.886H25.444c-33.924 0-33.924 61.324 0 61.324h361.861c30.873 0 41.312-61.324-8.058-61.324l-47.183 1.305zm16.119-32.954c63.296.877 92.592 22.329 93.56 73.411c.425 22.471 33.93 21.837 33.505-.634c-3.772-83.618-56.93-104.678-122.791-106.969L69.204 315.449c-21.811-5.342-29.784 27.205-7.972 32.548l286.952 71.03z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="interests-name">Crochet</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
