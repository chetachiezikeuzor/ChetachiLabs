import Head from "next/head";
import React from "react";

export default function Home() {
  const themeChanger = (e, path) => {
    if (path === "/theme-change") {
      const themeButton = document.getElementById("theme-button");
      const darkTheme = "dark-mode";
      const iconTheme = "bx-sun";

      const selectedTheme = localStorage.getItem("selected-theme");
      const selectedIcon = localStorage.getItem("selected-icon");

      const getCurrentTheme = () =>
        document.body.classList.contains(darkTheme) ? "dark" : "light";
      const getCurrentIcon = () =>
        themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

      if (selectedTheme) {
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
          darkTheme
        );
        themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
          iconTheme
        );
      }

      themeButton.addEventListener("click", () => {
        document.body.classList.toggle(darkTheme);
        document.querySelector("img").classList.toggle(darkTheme);
        document.querySelector("html").classList.toggle(darkTheme);

        themeButton.classList.toggle(iconTheme);
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
      });
    }
  };

  const handleClick = (e, path) => {
    if (path === "/about") {
      document.querySelector(".content-popover").classList.toggle("open");
      document.querySelector(".main").classList.toggle("face-away");
      projectItemContents(e.target.parentElement);
    }
  };

  function projectItemContents(projectItem) {
    document.querySelector(".projectItemFrame").src = projectItem.querySelector(
      ".open-project.button"
    ).id;

    document.querySelector(".cp-title").innerHTML =
      projectItem.querySelector(".h5-title").innerHTML;

    document.querySelector(".cp-body").innerHTML =
      projectItem.querySelector(".cp-content").innerHTML;
  }

  const popoverClose = (e, path) => {
    if (path === "/close") {
      document.querySelector(".content-popover").classList.toggle("open");
    }
  };

  return (
    <div className="main">
      <Head>
        <title>Chetachi's Portfolio</title>
        <link rel="icon" href="/c-icon.png" />

        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        ></link>

        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/fonts.css"></link>

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@chetachiiii" />
        <meta name="twitter:creator" content="@chetachiiii" />

        <meta property="og:title" content="Chetachi's Portfolio"></meta>

        <meta
          property="og:description"
          content="Chetachi's personal portfolio site"
        ></meta>
        <meta
          property="og:image"
          content="https://i.imgur.com/3QMS2xP.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:url" content="https://chetachilabs.com/"></meta>

        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, NextJS, Software, Software Developer, Software Engineer, Tech, Junior Developer, Junior Developer Texas, Software Developer Texas, Software Engineer Texas, Junior Developer Houston, Junior Developer Austin, Software Developer Austin, Software Engineer Austin, Junior Developer Dallas, Software Developer Dallas, Software Engineer Dallas"
        ></meta>
        <meta
          name="description"
          content="Chetachi's personal portfolio site"
        ></meta>
        <meta name="author" content="Chetachi Ezikeuzor"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main>
        <header className="nav-header">
          <div className="logo-container">
            <a className="nav-logo" id="logo">
              <img src="img/c-icon.png" alt="" width="56px" />
            </a>
          </div>
          <nav id="navbar">
            <ul className="desktop-nav">
              <li>
                <a className="nav-link" href="/#about-section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3l3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z"
                      fill=""
                    />
                    <path
                      d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"
                      fill=""
                    />
                  </svg>
                  <text>About</text>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/#contributions-section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                      fill=""
                    />
                  </svg>
                  <text>Projects</text>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/chetachiezikeuzor"
                  id="profile-link"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="none" cx="12" cy="7" r="3" />
                    <path
                      d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"
                      fill=""
                    />
                  </svg>
                  <text>Profile</text>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/#contact-section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414L19.586 17l-2.006 2.005z"
                      fill=""
                    />
                  </svg>
                  <text>Contact</text>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="nav-link"
                  href="/Chetachi-Ezikeuzor-Resume.pdf"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5H4z"
                      fill=""
                    />
                  </svg>
                  <text>Portfolio</text>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="change-theme">
          <i
            onClick={(e) => themeChanger(e, "/theme-change")}
            className="bx bx-moon change-theme"
            id="theme-button"
          ></i>
          <text
            className="tapText"
            style={{
              fontSize: "12px",
              marginTop: "5px",
              fontSize: "12px",
              position: "fixed",
              bottom: "20px",
              right: "5px",
              color: "var(--text-color)",
              cursor: "pointer",
            }}
          >
            double tap!
          </text>
        </div>

        <section className="home-section align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="home-text">
                <p>Hello, my name is</p>
                <h1>Chetachi Ezikeuzor,</h1>
                <h2>I am a Software Developer & Designer</h2>
                <a href="mailto:chetachiezikeuzor@gmail.com">
                  <button
                    className="button"
                    style={{ marginTop: "15px", display: "unset" }}
                  >
                    Say hello!
                  </button>
                </a>
              </div>
              <div className="home-img">
                <div className="img-box">
                  <img src="img/profile-img.png" alt="profile-img" />
                  <div
                    className="heart-icon"
                    style={{
                      position: "absolute",
                      color: "red",
                      fontSize: "2em",
                    }}
                  >
                    💌
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="content-section" id="about-section">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="stack-header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      About
                      <br />& Me
                    </h3>
                  </div>
                  <p className="paragraph-width technologies-width">
                    👩🏽‍💻 My name is Chetachi and I'm a Nigerian American based in
                    Texas. I'm a designer and software developer currently
                    building tech tools for users to have a more effective
                    online experience. I'm also an active member of the Obsidian
                    community where I contribute by building plugins and themes
                    for the app.
                  </p>
                </div>
              </div>
              <div className="background-block-content"></div>
              <div className="w-dyn-list">
                <div
                  id="contents"
                  role="list"
                  className="content-collection-grid w-dyn-items"
                >
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="skills-section">
          <div className="container">
            <div className="content-wrapper grid-layout">
              <div className="title-wrapper">
                <div className="stack-header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Tech Stack
                      <br />& Skills
                    </h3>
                  </div>
                  <p className="paragraph-width technologies-width">
                    I'm skilled with CSS, HTML, Javascript, and TypeScript and
                    have created projects using MongoDB, React, and NodeJS.
                  </p>
                </div>
              </div>
              <div className="background-block-content"></div>
              <ul className="circular-grid-layout" id="circular-grid">
                <li className="circle-list-item" id="circle-item-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                      fill=""
                    />
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635l.003-.042z"
                      fill=""
                    />
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
                      fill=""
                    />
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"
                      fill=""
                    />
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 15 15"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.869.162a.5.5 0 0 0-.738 0l-2.63 2.87a5.5 5.5 0 0 0-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 0 0-.27-7.114L7.869.163zM8 3a.5.5 0 0 0-1 0v7.5a.5.5 0 0 0 1 0V3z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"
                      fill=""
                    />
                  </svg>
                </li>
                <li className="circle-list-item" id="circle-item-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z"
                      fill=""
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section" id="contributions-section">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Contribution
                      <br />
                      Projects
                    </h3>
                  </div>
                  <p className="paragraph-width">
                    I contribute to{" "}
                    <a href="https://obsidian.md/" target="_blank">
                      Obsidian.md
                    </a>{" "}
                    by building tech tools to make note-taking easier for the
                    community.
                  </p>
                </div>
              </div>
              <div className="background-block-content"></div>
              <div className="w-dyn-list">
                <div
                  id="contents"
                  role="list"
                  className="content-collection-grid w-dyn-items"
                >
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <div className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="/img/Yin and Yang Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Yin & Yang Theme</h5>
                        <p>
                          An Obsidian.md theme with a stark contrast between
                          dark mode and light mode, much like the Yin and Yang
                          symbol ☯️.
                        </p>
                      </div>
                      <div className="technologies-wrapper padding-top-32">
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <button
                        className="open-project button"
                        onClick={(e) => handleClick(e, "/about")}
                        id="/img/Yin and Yang Demo Header.png"
                      >
                        View Preview
                      </button>
                      <div className="cp-content">
                        <div className="content-details">
                          <div
                            style={{ display: "flex", marginBottom: "12px" }}
                          >
                            <img src="https://img.shields.io/github/stars/chetachiezikeuzor/Yin-and-Yang-Theme"></img>
                          </div>
                          <p>
                            {" "}
                            A theme created and designed for a minimal
                            note-taking experience with a high contrast between
                            dark and light modes. The color scheme used was
                            picked for optimal viewing experience and the design
                            was hand-crafted to be usable by those with impaired
                            vision. With over 8,000 lines of CSS, Yin & Yang is
                            a perfect theme for any user. The theme now has
                            hundreds of users and has garnered love and
                            attention from software developers, teachers,
                            students, and even musicians.
                          </p>
                        </div>
                        <div className="cp-list">
                          <ul>
                            <li>Type - Application Theme</li>
                            <li>Technologies - CSS</li>
                            <li>
                              Links -{" "}
                              <a
                                className="accent-link"
                                target="_blank"
                                href="https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme"
                              >
                                Documentation
                              </a>
                              ,{" "}
                              <a
                                className="accent-link"
                                target="_blank"
                                href="https://raw.githubusercontent.com/chetachiezikeuzor/Yin-and-Yang-Theme/main/obsidian.css"
                              >
                                Code
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <div className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/cMenu Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">cMenu</h5>
                        <p>
                          An Obsidian.md plugin that adds a minimal text editor
                          modal for a smoother and more effective
                          writing/editing experience ✍🏽.
                        </p>
                      </div>
                      <div className="technologies-wrapper padding-top-32">
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <button
                        className="open-project button"
                        onClick={(e) => handleClick(e, "/about")}
                        id="/img/cMenu Demo Header.png"
                      >
                        View Preview
                      </button>
                      <div className="cp-content">
                        <div className="content-details">
                          <div
                            style={{ display: "flex", marginBottom: "12px" }}
                          >
                            <img src="https://img.shields.io/github/downloads/chetachiezikeuzor/cMenu-Plugin/total.svg"></img>
                            <img src="https://img.shields.io/github/v/release/chetachiezikeuzor/cMenu-Plugin"></img>
                          </div>
                          <p>
                            A custom text editor built from scratch that allows
                            users to create and edit plain text files. The
                            component was built using JavaScript, CSS, Browser
                            APIs and Obsidian's application API. The interface
                            handles common key shortcuts and was designed, built
                            and is currently maintained by me. The component now
                            has over 2,000 users.
                          </p>
                        </div>
                        <div className="cp-list">
                          <ul>
                            <li>Type - Application Plugin</li>
                            <li>
                              Technologies used - CSS, TypeScript, JavaScript,
                              Obsidian API
                            </li>
                            <li>
                              Links -{" "}
                              <a
                                className="accent-link"
                                target="_blank"
                                href="https://github.com/chetachiezikeuzor/cMenu-Plugin"
                              >
                                Documentation
                              </a>
                              ,{" "}
                              <a
                                className="accent-link"
                                target="_blank"
                                href="https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/main.ts"
                              >
                                Code
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <div className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="/img/Highlightr Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Highlightr</h5>
                        <p>
                          An Obsidian.md plugin that adds a simple highlighting
                          modal for better multi-colored highlighting support
                          🎨.
                        </p>
                      </div>
                      <div className="technologies-wrapper padding-top-32">
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <button
                        className="open-project button"
                        onClick={(e) => handleClick(e, "/about")}
                        id="/img/Highlightr Demo Header.png"
                      >
                        View Preview
                      </button>
                      <div className="cp-content">
                        <div className="content-details">
                          <div
                            style={{ display: "flex", marginBottom: "12px" }}
                          >
                            <img src="https://img.shields.io/github/stars/chetachiezikeuzor/Highlightr-Plugin"></img>
                          </div>
                          <p>
                            A custom text editing component built from scratch
                            that allows users to supplement annotations by
                            allowing for highlighting text. The component was
                            built using JavaScript, CSS, Browser APIs and
                            Obsidian's application API. The component was
                            designed, developed and is currently maintained by
                            me.
                          </p>
                        </div>
                        <div className="cp-list">
                          <ul>
                            <li>Type - Application Plugin</li>
                            <li>
                              Technologies used - CSS, TypeScript, JavaScript,
                              Obsidian API
                            </li>
                            <li>
                              Links -{" "}
                              <a
                                target="_blank"
                                className="accent-link"
                                href="https://github.com/chetachiezikeuzor/Highlightr-Plugin"
                              >
                                Documentation
                              </a>
                              ,{" "}
                              <a
                                target="_blank"
                                className="accent-link"
                                href="https://raw.githubusercontent.com/chetachiezikeuzor/Highlightr-Plugin/master/main.ts"
                              >
                                Code
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <div className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="/img/MultiPix Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">MultiPix</h5>
                        <p>
                          An Obsidian.md plugin that brings Unsplash, the
                          largest open collection of high-quality photos, into
                          Obsidian for a better image-use workflow 🌄.
                        </p>
                      </div>
                      <div className="technologies-wrapper padding-top-32">
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M8.625 8.063V3h6.75v5.063h-6.75zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75v-5.063z"
                              fill=""
                            />
                          </svg>
                        </div>
                        <div className="technologies-ava">
                          <svg
                            className="technology-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <button
                        className="open-project button"
                        onClick={(e) => handleClick(e, "/about")}
                        id="/img/MultiPix Demo Header.png"
                      >
                        View Preview
                      </button>
                      <div className="cp-content">
                        <div className="content-details">
                          <p>
                            An image search tool built from scratch that allows
                            users to search for, embed and download images
                            directly into their workspaces. The tool was built
                            using TypeScript and multiple APIs such as Unsplash
                            and Obsidian API. The interface taps into browser
                            API's such as Navigator to allow for "copy to
                            clipboard" functionality. The tool also functions as
                            an image encoder via base64 encoding for ensure that
                            images are future proof for users. The tool was
                            designed, developed and is currently maintained by
                            me.
                          </p>
                        </div>
                        <div className="cp-list">
                          <ul>
                            <li>Type - Application Plugin</li>
                            <li>
                              Technologies used - CSS, TypeScript, JavaScript,
                              Obsidian API
                            </li>
                            <li>
                              Links -{" "}
                              <a
                                target="_blank"
                                className="accent-link"
                                href="https://github.com/chetachiezikeuzor/MultiPix-Plugin"
                              >
                                Documentation
                              </a>
                              ,{" "}
                              <a
                                target="_blank"
                                className="accent-link"
                                href="https://raw.githubusercontent.com/chetachiezikeuzor/MultiPix-Plugin/master/main.ts"
                              >
                                Code
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="contact-section">
          <div className="container">
            <div className="content-wrapper">
              <div className="contact-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Get In
                      <br />
                      Touch
                    </h3>
                  </div>
                </div>

                <div className="chetachi-form">
                  <form
                    action="mailto:chetachiezikeuzor@gmail.com"
                    method="post"
                    encType="text/plain"
                    id="chetachi-form-Contact-Form"
                    name="chetachi-form-Contact-Form"
                    data-name="Contact Form"
                  >
                    <h4 className="h4-title">Contact me for a project!</h4>
                    <input
                      type="text"
                      className="input-field-large chetachi-form-input"
                      maxLength="256"
                      name="Name"
                      data-name="Name"
                      placeholder="Enter your name"
                      id="Name"
                    ></input>
                    <input
                      type="email"
                      className="input-field-large chetachi-form-input"
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Email Address"
                      id="Email"
                    ></input>
                    <input
                      type="text"
                      className="input-field-large chetachi-form-input"
                      maxLength="256"
                      name="Business-Name"
                      data-name="Business Name"
                      placeholder="Business Name"
                      id="Business-Name"
                    ></input>
                    <input
                      type="text"
                      className="input-field-large chetachi-form-input"
                      maxLength="256"
                      name="Phone-Number"
                      data-name="Phone Number"
                      placeholder="Phone Number"
                      id="Phone-Number"
                    ></input>
                    <textarea
                      form="chetachi-form-Contact-Form"
                      name="Content-Form-Text-Area"
                      id="Content-Form-Text-Area"
                      cols="35"
                      wrap="soft"
                    ></textarea>
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      className="button button-full w-button"
                    ></input>
                  </form>
                  <div className="success-message chetachi-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="chetachi-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="background-block-content"></div>
            </div>
          </div>
        </div>
      </main>

      <div className="content-popover" style={{}}>
        <div className="cp-inner">
          <div className="cp-content">
            <div className="cp-head">
              <button
                className="button cp-close"
                type="button"
                onClick={(e) => popoverClose(e, "/close")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  width="3em"
                  height="3em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.172 16.242L12 13.414l2.828 2.828l1.414-1.414L13.414 12l2.828-2.828l-1.414-1.414L12 10.586L9.172 7.758L7.758 9.172L10.586 12l-2.828 2.828z"
                    fill="white"
                  />
                </svg>
              </button>
              <div className="cp-thumbnail">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "0",
                    paddingTop: "56.2500%",
                    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                    overflow: "hidden",
                    borderRadius: "0px",
                    willChange: "transform",
                  }}
                >
                  <img
                    data-responsive="true"
                    allow="fullscreen"
                    className="projectItemFrame"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: "0",
                      left: "0",
                      border: "none",
                      padding: "0",
                      margin: "0",
                      height: "100%",
                    }}
                  ></img>
                </div>
              </div>
              <h3 className="cp-title">Project Title</h3>
            </div>

            <div className="cp-body"></div>
          </div>
        </div>
      </div>

      <footer className="footer-section align-items-center">
        <div className="footer-end-block">
          <p className="legal-detail">
            Designed and built with ❤️ by
            <a
              href="https://github.com/chetachiezikeuzor/ChetachiLabs"
              target="_blank"
            >
              Chetachi
            </a>
          </p>
          <div className="footer-socials-grid social-icons">
            <a
              href="https://www.buymeacoffee.com/chetachi"
              className="social-link-footer link-icon-center"
              target="_blank"
            >
              <svg
                className="footer-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37c1.218.05 2.437.01 3.65-.118c.299-.033.598-.073.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146c-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036c-.243-.036-.484-.08-.724-.13c-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295a37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171c-.577.131-1.165.2-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657c.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22c.577.088 1.156.159 1.737.212c2.48.226 5.002.19 7.472-.14c.45-.06.899-.13 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"
                  fill=""
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/chetachiiii"
              className="social-link-footer link-icon-center"
              target="_blank"
            >
              <svg
                className="footer-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
                  fill=""
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chetachi/"
              className="social-link-footer link-icon-center"
              target="_blank"
            >
              <svg
                className="footer-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <circle cx="4.983" cy="5.009" r="2.188" fill="" />
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                  fill=""
                />
              </svg>
            </a>
            <a
              href="https://github.com/chetachiezikeuzor"
              className="social-link-footer link-icon-center"
              target="_blank"
            >
              <svg
                className="footer-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                  fill=""
                />
              </svg>
            </a>
            <a
              href="/Chetachi-Ezikeuzor-Resume.pdf"
              className="social-link-footer link-icon-center"
              target="_blank"
            >
              <svg
                className="footer-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5H4z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="shape1"></div>
      <div className="shape2"></div>
      <style jsx>{`
        .link-icon-center {
          margin: 2px;
        }
      `}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
