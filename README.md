# Yoroi-Landing
### This is Yoroi wallet landing page project. Yoroi is a light wallet for Cardano's ADA coin. https://yoroi-wallet.com/

## Technogies Used
* [ReactJS](https://reactjs.org/)
* [MobX](https://mobx.js.org/index.html)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/) [TODO]
* [Prettier](https://prettier.io/)
* [Netlify](https://www.netlify.com/)
* [Cloudflare](https://www.cloudflare.com/

# Installation
For [Ubuntu 18.04.1 LTS Desktop.](http://releases.ubuntu.com/18.04/)
* Install [Visual Studio Code.](https://code.visualstudio.com/)
* Install [Git.](https://git-scm.com/downloads)
* Install [NodeJS.](https://nodejs.org/en/)
  * Use of [nvm](https://github.com/creationix/nvm) is preferred.
  * nvm install script: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
  * reload shell(without re-login) in order to use `nvm` by `source ~/.profile`
  * `nvm i`
* Clone repository `git clone https://github.com/Emurgo/yoroi-landing.git`. *Username*:[`git-user-name`] and *Password*:[`git-personal-access-token`] will be needed, could generate `git-personal-access-tocken` by visiting GitHub Website [ Settings / Developer settings / Personal access tokens ]

# Scripts
Explanation of `npm` scripts used.
* `npm run build-prod` : To build for production environment(e.g. Google Analytics will be included)
* `npm run build-dev` : To build for development environment(e.g. Without Google Analytics)
* `npm run start` : To start hot auto reloading `webpack-dev-server` server for development
* `npm run lint` : [TODO] For ESLinting, use this before pushing any code
* `npm run prettier-project` : For checking coding conventions, use this before pushing any code

# Development
For local machine development bash to project's root directory and execute following commands.
* `nvm i && npm i`
* `npm run start` (`webpack-dev-server` will be started at http://localhost:8080/)

## Style guide

It’s not something critical, but in order to have some consistency with the code format, we added an automatic code formatter. The idea is to not spend time formatting code or updating PRs so we can match some style. We try to follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). If you find that we are missing something or there is something different than the Airbns’s, please update the configuration file for Prettier.

## Suggested development environment

You can use any editor that you want. If you want a suggestion, most of the team uses [Visual Studio Code](https://code.visualstudio.com).

## Recommended extensions

VS Code has a lot of extensions. When launching for the first time, you will get a recommendation list of extensions. This list is read from `.vscode/extensions.json`.
