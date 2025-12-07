import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    tech: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    demo: {
      type: "string",
    },
    source_code: {
      type: "string",
    },
  },
  computedFields,
}));

export const SideProject = defineDocumentType(() => ({
  name: "SideProject",
  filePathPattern: `side-projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    tech: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    demo: {
      type: "string",
    },
    source_code: {
      type: "string",
    },
  },
  computedFields,
}));

export const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `experience/**/*.mdx`,
  contentType: "mdx",
  fields: {
    company: {
      type: "string",
      required: true,
    },
    logo: {
      type: "string",
      required: true,
    },
    position: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "string",
      required: true,
    },
    endDate: {
      type: "string",
    },
    description: {
      type: "string",
      required: true,
    },
    highlights: {
      type: "list",
      of: { type: "string" },
    },
    order: {
      type: "number",
      required: true,
    },
  },
  computedFields,
}));

export const Education = defineDocumentType(() => ({
  name: "Education",
  filePathPattern: `education/**/*.mdx`,
  contentType: "mdx",
  fields: {
    institution: {
      type: "string",
      required: true,
    },
    degree: {
      type: "string",
      required: true,
    },
    field: {
      type: "string",
      required: false,
    },
    startDate: {
      type: "string",
      required: true,
    },
    endDate: {
      type: "string",
    },
    description: {
      type: "string",
    },
    order: {
      type: "number",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project, Page, SideProject, Experience, Education],
});
