import Head from "next/head";

import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Chetachi's Website ❤️</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/blog.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
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
                {" "}
                <Link href="/">
                  <a className="nav-link" href="home#projects-wrap">
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
                        d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v3zm3-4h13v12H5V5c0-.806.55-.988 1-1z"
                        fill=""
                      />
                    </svg>
                    <text>Blog</text>
                  </a>
                </Link>
              </li>
              <li>
                <a className="nav-link" href="home#welcome-section">
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
                <a className="nav-link" href="home#projects-wrap">
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
                <a className="nav-link" href="home#contact-section">
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
                <a className="nav-link" href="home#contact-section">
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

            <div className="menu-icon"></div>
          </nav>
        </header>

        <section className="home-section align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="home-text">
                <p>Hello, I'm</p>
                <h1>Chetachi Ezikeuzor,</h1>
                <h2>a Software Developer & Designer</h2>
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

        <div className="content-section" id="projects-wrap">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      About
                      <br />
                      Me
                    </h3>
                  </div>
                  <p className="paragraph-width">
                    These are a few projects I've worked on in contribution to
                    open source tools.
                  </p>
                </div>
                <a href="/about" className="button w-button">
                  See More
                </a>
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

        <div className="content-section" id="projects-wrap">
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
                    I'm comfortable with CSS, HTML, Javascript, and TypeScript
                    and have created projects using MongoDB, React, and Node.
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

        <div className="content-section" id="projects-wrap">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Full Stack
                      <br />
                      Applications
                    </h3>
                  </div>
                  <p className="paragraph-width">
                    These are a few projects I've worked on in contribution to
                    open source tools.
                  </p>
                </div>
                <a href="/about" className="button w-button">
                  See More
                </a>
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
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme/blob/main/assets/light2.png?raw=true"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
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
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/highlightr.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/Highlightr Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="projects-wrap">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Open Source
                      <br />
                      Contribution
                      <br />
                      Projects
                    </h3>
                  </div>
                  <p className="paragraph-width">
                    These are a few projects I've worked on in contribution to
                    open source tools.
                  </p>
                </div>
                <a href="/about" className="button w-button">
                  See More
                </a>
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
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme/blob/main/assets/light2.png?raw=true"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
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
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/highlightr.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/Highlightr Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="projects-wrap">
          <div className="container">
            <div className="content-wrapper">
              <div className="title-wrapper">
                <div className="header-title-block">
                  <div className="header-accent-wrap">
                    <h3 className="h3-large-title">
                      Coding
                      <br />
                      Challenges
                    </h3>
                  </div>
                  <p className="paragraph-width">
                    These are a few projects I've worked on in contribution to
                    open source tools.
                  </p>
                </div>
                <a href="/about" className="button w-button">
                  See More
                </a>
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
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme/blob/main/assets/light2.png?raw=true"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
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
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/highlightr.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="collection-content-item w-dyn-item"
                  >
                    <a href="#" className="content-item w-inline-block">
                      <div className="content-image-wrap">
                        <img
                          src="img/Highlightr Demo Header.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 77vw, (max-width: 991px) 430px, 37vw"
                          className="image-full"
                        />
                      </div>
                      <div className="content-block">
                        <h5 className="h5-title">Project Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="projects-wrap">
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

                <div className="w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                  >
                    <h4 className="h4-title">Contact me for a project!</h4>
                    <input
                      type="text"
                      className="input-field-large w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="Enter your name"
                      id="name"
                    ></input>
                    <input
                      type="email"
                      className="input-field-large w-input"
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Email Address"
                      id="Email"
                    ></input>
                    <input
                      type="text"
                      className="input-field-large w-input"
                      maxLength="256"
                      name="Business-Name"
                      data-name="Business Name"
                      placeholder="Business Name"
                      id="Business-Name"
                    ></input>
                    <input
                      type="text"
                      className="input-field-large w-input"
                      maxLength="256"
                      name="Phone-Number"
                      data-name="Phone Number"
                      placeholder="Phone Number"
                      id="Phone-Number"
                    ></input>
                    <textarea
                      form="wf-form-Contact-Form"
                      name="taname"
                      id="contact-form-text-area"
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
                  <div className="success-message w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
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

      <footer className="footer-section align-items-center">
        <div className="footer-end-block">
          <p className="legal-detail">
            Created with ❤️ by
            <a href="https://www.twitter.com/chetachiiii" target="_blank">
              Chetachi
            </a>
          </p>
          <div className="footer-socials-grid social-icons">
            <a
              href="http://instagram.com"
              className="social-link-footer link-icon-center"
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
                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
                  fill="#626262"
                />
                <circle cx="16.806" cy="7.207" r="1.078" fill="#626262" />
                <path
                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
                  fill="#626262"
                />
              </svg>
            </a>
            <a
              href="http://twitter.com"
              className="social-link-footer link-icon-center"
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
                  d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
                  fill="#626262"
                />
              </svg>
            </a>
            <a
              href="http://Linkedin.com"
              className="social-link-footer link-icon-center"
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
                <circle cx="4.983" cy="5.009" r="2.188" fill="#626262" />
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                  fill="#626262"
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
