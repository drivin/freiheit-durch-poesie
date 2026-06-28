import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;

const pagesConfig =
  isGitHubPages && repositoryName && repositoryOwner
    ? {
        site: `https://${repositoryOwner}.github.io`,
        base: `/${repositoryName}`,
      }
    : {};

export default defineConfig({
  output: "static",
  ...pagesConfig,
});
