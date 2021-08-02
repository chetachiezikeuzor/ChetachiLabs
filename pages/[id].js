import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import { v4 as uuid } from "uuid";
import { getDatabase, getPage, getBlocks } from "../lib/notion";
import Link from "next/link";
import { databaseId } from "./blog.js";
import { socialImage, url } from "../lib/config";
import styles from "./post.module.css";

var Gist = require("react-gist");

export const Text = ({ text }) => {
  const colorMapper = {
    default_background: "bg-current color-bg",
    yellow_background: "bg-yellow-500 color-bg",
    gray_background: "bg-gray-500 color-bg",
    grey_background: "bg-gray-500 color-bg",
    brown_background: "bg-brown-500 color-bg",
    orange_background: "bg-orange-500 color-bg",
    green_background: "bg-green-500 color-bg",
    blue_background: "bg-blue-500 color-bg",
    purple_background: "bg-purple-500 color-bg",
    red_background: "bg-red-500 color-bg",
    pink_background: "bg-pink-500 color-bg",
    "line-numbers": "code",
    "token keyword": "code",
    code: "code",
  };
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    const id = uuid();

    var videoSource = ["https://www.youtube.com"];

    var imageSource = [
      "images.unsplash.com",
      "res.cloudinary.com",
      "dl.dropboxusercontent.com",
      "i.imgur.com",
      "raw.githubusercontent.com",
      "https://s3.us-west-2.amazonaws.com",
      "https://ggsc.s3.amazonaws.com",
    ];

    var codeBlocks = ["gist:"];

    var creditText = ["Credit:", "Source:"];

    if (text.link) {
      if (imageSource.some((u) => text.link.url.includes(u))) {
        return (
          <Fragment
            style={{
              "max-width": "100%",
              alignSelf: "center",
            }}
          >
            <img
              src={text.link.url}
              alt="image"
              ignoreFallback
              style={{
                "max-width": "100%",
              }}
            />
          </Fragment>
        );
      } else if (videoSource.some((u) => text.link.url.includes(u))) {
        return (
          <iframe
            width="100%"
            height="428"
            src={text.link.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }
    }
    if (text.content) {
      if (creditText.some((u) => text.content.includes(u))) {
        return (
          <div
            style={{
              maxWidth: "100%",
              alignSelf: "center",
              borderLeft: "3px solid black",
              paddingLeft: "15px",
              fontStyle: "italic",
              fontSize: ".875em",
            }}
          >
            {text.content}
          </div>
        );
      }
    }
    return (
      <span
        className={classNames(colorMapper[color], "break-words", {
          "font-bold": bold,
          italic: italic,
          "line-through": strikethrough,
          underline: underline,
          "bg-gray-300 px-2 py-1": code,
        })}
        key={id}
      >
        {text.link ? (
          <a className="underline" href={text.link.url}>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const Block = (block) => {
  const { type, id } = block;
  const value = block[type];
  if (type === "paragraph") {
    return (
      <p className="mb-4">
        <Text text={value.text} />
      </p>
    );
  }
  if (type === "heading_1") {
    return (
      <h1 className="text-2xl font-bold md:text-4xl mb-4">
        <Text text={value.text} />
      </h1>
    );
  }
  if (type === "heading_2") {
    return (
      <h2 className="text-xl font-bold md:text-2xl mb-4">
        <Text text={value.text} />
      </h2>
    );
  }
  if (type === "heading_3") {
    return (
      <h3 className="text-lg font-bold md:text-xl mb-4">
        <Text text={value.text} />
      </h3>
    );
  }
  if (type === "bulleted_list_item" || type === "numbered_list_item") {
    return (
      <li className="mb-4">
        <Text text={value.text} />
      </li>
    );
  }
  if (type === "to_do") {
    return (
      <div>
        <label htmlFor={id}>
          <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
          <Text text={value.text} />
        </label>
      </div>
    );
  }
  if (type === "child_page") {
    return <p>{value.title}</p>;
  }
  if (type === "toggle") {
    return (
      <details>
        <summary>
          <Text text={value.text} />
        </summary>
        {value.children?.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </details>
    );
  }
  return (
    <p className="bg-red-500 px-4 py-2 mb-4">Not supported yet by Notion API</p>
  );
};

export default function Post({ page, blocks }) {
  const { entry, slug, summary, MainImage, social_image } = page.properties;

  const renderFeaturedImage = () => {
    if (!MainImage) {
      return null;
    }

    return (
      <div
        className="header-img"
        style={{ marginTop: "48px", marginBottom: "86px" }}
      >
        <img
          className="blog-post-block"
          src={page.properties.MainImage.rich_text[0].plain_text}
          alt="image"
          width="100%"
          height="100%"
          objectfit="cover"
          verticalalign="middle"
        />
      </div>
    );
  };

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>

        <link rel="stylesheet" href="/post.css" />
        <link rel="stylesheet" href="/blog.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.singlemain}>
        <div>
          <div className={styles.singleSostSticky}>
            <Link href="/blog">
              <a className="button">← Back to Posts</a>
            </Link>
            <div
              className="sticky-inner"
              style={{
                marginTop: "26px",
                backgroundColor: "var(--white-alpha-36)",
                border: "1px solid var(--white-alpha-40)",
                padding: "36px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p className="tag-top">SHARE POST</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
          </div>
        </div>
        <article className={styles.containerEl}>
          <div
            className={styles.headerTop}
            style={{
              marginTop: "36px",
              marginBottom: "48px",
            }}
          >
            <p style={{ "font-style": "italic" }}>
              Last Edited {""}
              {new Date(page.last_edited_time).toLocaleDateString()}
            </p>
            <h1 className={styles.name}>
              <Text text={page.properties.Name.title} />
            </h1>
          </div>
          {renderFeaturedImage()}
          <section
            className="single-post"
            style={{
              maxWidth: "760px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            {blocks.map((block) => (
              <Fragment key={block.id}>{Block(block)}</Fragment>
            ))}
          </section>
        </article>
        <div></div>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.data.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
