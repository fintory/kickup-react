# Project setup

> Though, this sounds like some advices, we at Kreativgebiet/Fintory **want** our people to follow those things and setup a project exactly like this.

## Table of Contents (please follow the order)

1. [Cloning of repository & setup of repository](#cloning-of-repository--setup-of-repository)
2. [Enable CircleCI builds](#enable-circleci-builds)
3. [Create Coveralls.io project](#create-coverallsio-project)
4. [Setup of GitHub repository](#setup-of-github-repository)
5. [Push your first commit](#push-your-first-commit)

## Cloning of repository & setup of repository

Clone the repository and remove the `.git` folder with the following command, otherwise you are always pushing to the `kickup-react` repository on GitHub:

```sh
$ git clone kreativgebiet/kickup-react PROJECT_NAME # or https://github.com/kreativgebiet/kickup-react.git
$ cd PROJECT_NAME && rm -rf .git
```

Now, go to Github.com and create a repository and add the remote to your local repository.

## Enable CircleCI builds

Go to circleci.com, login and add the repository you want to enable the CI for. No need for any additional setup. The `.circleci` folder will automatically handle everything for you.

## Create Coveralls.io project

> We are striving for 100% coverage. However, the coverage threshold is set to  80%. Be sure to be over the threshold, otherwise the build won't succeed.

Go to coveralls.io, login and add the repository you want to enable a coverage report for. Be sure to change the repository in the README.md also.

## Setup of GitHub Repository

Go to the GitHub repository settings of your project and then navigate to the tab "Branches". After this, add a [Branch protection](https://help.github.com/articles/about-protected-branches/) for each of the "base" branches (mostly "develop" and "master").

#### This should look like this:

![](protected-branch.jpg | width=769x719)

## Push your first commit

You should now, what to do from now on. If not, please first read a git tutorial. ~~If you have any other questions regarding the repository, please refer to the FAQ section.~~
