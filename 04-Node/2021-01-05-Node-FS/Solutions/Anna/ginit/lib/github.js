const CLI = require("clui"); // draws CLI tables, gauges, and spinners
const Configstore = require("configstore"); // loads and saves configs
const Octokit = require("@octokit/rest"); // GitHub REST API
const { createBasicAuth } = require("@octokit/auth-basic"); // GitHub Auth implementation
const inquirer = require("./inquirer"); // Interactive CLI interface

const Spinner = CLI.Spinner;
const pkg = require("../package.json");
const conf = new Configstore(pkg.name);

let octokit;

module.exports = {
  getInstance: () => {
    return octokit;
  },

  getStoredGitHubToken: () => {
    return conf.get("github.token");
  },
  getPersonalAccessToken: async () => {
    const credentials = await inquirer.askGithubCredentials(); // Await ensures the spinner doesn't start until entry is complete
    const statusSpinner = new Spinner("Authenticating, please wait...");
    statusSpinner.start();

    const auth = createBasicAuth({
      username: credentials.username,
      password: credentials.password,
      async on2Fa() {
        // Prompt for 2-factor-authentiction code if necessary
        status.stop();
        const res = await inquirer.getTwoFactorAuthenticationCode();
        status.start();
        return res.twoFactorAuthenticationCode;
      },
      token: {
        scopes: ["user", "public_repo", "repo", "repo:status"],
        note: "ginit, the command-line tool for initalizing Git repos",
      },
    });

    try {
      const resolve = await auth();
      if (resolve.token) {
        conf.set("github.token", res.token);
        return res.token;
      } else {
        throw new Error("GitHub token was not found in the response");
      }
    } finally {
      status.stop();
    }
  },
  githubAuth: (token) => {
    octokit = new Octokit({
      auth: token,
    });
  },
};
