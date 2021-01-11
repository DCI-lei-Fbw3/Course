const chalk = require("chalk"); // Apply colours to console text
const clear = require("clear"); // Clears console
const figlet = require("figlet"); // Creates ASCII from text

//Library
const files = require("./lib/files");
const repo = require("./lib/repo");

clear();
console.log(
  chalk.yellow(figlet.textSync("Ginit", { horizontalLayout: "full" }))
);

if (files.directoryExists(".git")) {
  console.log(chalk.red("Already a Git repository!"));
  process.exit();
}

const getGithubToken = async () => {
  let token = github.getStoredGithubToken();
  if (token) {
    return token;
  }

  token = await github.getPersonalAccesToken();
  return token;
};

const run = async () => {
  try {
    const token = await getGithubToken();
    github.githubAuth(token);

    const url = await repo.createRemoteRepo();

    await repo.createGitignore();

    await repo.setupRepo(url);
    console.log(chalk.green("All done!"));
  } catch (err) {
    if (err) {
      switch (err.status) {
        case 401:
          console.log(
            chalk.red(
              "Couldn't log you in. Please provide correct credentials/token."
            )
          );
          break;
        case 422:
          console.log(
            chalk.red(
              "There is already a remote repository or token with the same name"
            )
          );
          break;
        default:
          console.log(chalk.red(err));
      }
    }
  }
};

run();
