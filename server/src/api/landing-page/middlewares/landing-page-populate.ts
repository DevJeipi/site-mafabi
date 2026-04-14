/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          image: {
            fields: ["alternativeText", "url"],
          },
          imageAbove: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.mission": {
        // all primitive fields (heading/text/quote) do not require populate
      },
      "blocks.values": {
        populate: {
          values: true,
        },
      },
      "blocks.cards": {
        populate: {
          Cards: {
            populate: {
              Icon: {
                fields: ["alternativeText", "url"],
              },
            },
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
