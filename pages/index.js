import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NextLink from "next/link";
import { Text } from "./[id].js";
import { getDatabase } from "../lib/notion";
import TextRenderer from "./TextRenderer";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
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
            <a className="nav-logo" id="logo" href="#welcome-section">
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

        <section className="blog-section align-items-center">
          <div className="blog-grid">
            <div className="side-bar">
              <div className="sticky-block">
                <div className="sticky-inner">
                  <h3>
                    Chetachi
                    <em
                      style={{
                        color: "blue",
                      }}
                    >
                      {" "}
                      Crafts
                    </em>
                  </h3>
                  <p>This is my personal blog</p>

                  <ul>
                    <li className="side-bar-links">Latest</li>
                    <li className="side-bar-links">Tech</li>
                    <li className="side-bar-links">Inspo</li>
                    <li className="side-bar-links">Design</li>
                  </ul>
                  <p>
                    If you found value here, you could get me a coffee ☕️
                    <br />
                    If you've got a question or you'd just like to reach out to
                    me, reach me here → 💌 hello@bychetachi.com
                  </p>
                </div>
              </div>
            </div>
            <div className="posts-area">
              {posts.data.map((post) => {
                const { entry, slug, summary, MainImage, social_image } =
                  post.properties;
                const description =
                  post.properties.Description.rich_text.rich_text;
                let curDate;
                if (post.properties.CreatedMod === "") {
                  curDate = post.last_edited_time;
                } else {
                  curDate = post.properties.CreatedMod;
                }
                const date = new Date(post.last_edited_time).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                );
                console.log(curDate);
                return (
                  <article className="blog-post-block" key={post.id}>
                    <span className="tag-top">Tag</span>
                    <div className="blog-spacer"></div>

                    <div
                      role="listitem"
                      className="collection-content-item w-dyn-item"
                    >
                      <a
                        href={`/${post.id}`}
                        className="content-item w-inline-block"
                      >
                        <div className="content-image-wrap">
                          <Image
                            src={
                              post.properties.MainImage.rich_text[0].plain_text
                            }
                            loading="lazy"
                            alt="image"
                            layout="fill"
                            objectFit="cover"
                            className="image-full"
                          />
                        </div>
                        <div className="content-block">
                          <h5 className="h5-title">
                            <Text text={post.properties.Name.title} />
                          </h5>
                          <p className="">{date}</p>
                          <p>{description}</p>
                        </div>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="pagination-buttons">
            <button className="back-button button">Previous</button>
            <NextLink href="/archive/posts" passHref>
              <button className="forward-botton button">Next</button>
            </NextLink>
          </div>
        </section>
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

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
