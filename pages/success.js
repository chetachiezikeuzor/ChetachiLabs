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
        document.querySelector("html").classList.toggle(darkTheme);

        themeButton.classList.toggle(iconTheme);
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
      });
    }
  };
  return (
    <div className="main">
      <Head>
        <title>Success Page</title>
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
        <section>
          <div
            className="content-wrapper"
            style={{
              textAlign: "center",
              margin: "auto",
              width: "50%",
              padding: "unset",
              minHeight: "inherit",
            }}
          >
            <h3 className="h3-large-title">
              Thanks For
              <br />
              Your Submission!
            </h3>
            <a href="/">⌫ Back to the site</a>
          </div>
        </section>
      </main>
    </div>
  );
}
