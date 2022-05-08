/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  react: [
    {
      type: "autogenerated",
      dirName: "frontend/react",
    },
  ],
  vue: [
    {
      type: "autogenerated",
      dirName: "frontend/vue",
    },
  ],
  nodejs: [
    {
      type: "autogenerated",
      dirName: "program/nodejs",
    },
  ],
  pattern: [
    {
      type: "autogenerated",
      dirName: "program/设计模式",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;