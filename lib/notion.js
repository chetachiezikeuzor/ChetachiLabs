import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId, cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 12,
    start_cursor: cursor ? cursor : undefined,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "Description",
          rich_text: {
            is_not_empty: true,
          },
        },
        {
          property: "MainImage",
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
  return {
    data: response.results,
    next_cursor: response.next_cursor,
    has_more: response.has_more,
  };
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
