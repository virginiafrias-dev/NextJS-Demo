import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  // staticDirs: ["../public"],
  // webpackFinal: async (config: any) => {
  //   config.resolve.alias["@"] = path.resolve(__dirname, "../src");
  //   config.resolve.alias["@components"] = path.resolve(
  //     __dirname,
  //     "../src/components"
  //   );
  //   return config;
  // },
};

export default config;
