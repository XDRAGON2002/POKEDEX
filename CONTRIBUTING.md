# Pokedex Contributing Guide

### Imposter Syndrome Disclaimer (Must Read)
We want your help. No really, we do.

There might be a little voice inside that tells you you’re not ready; that you need to do one more tutorial, or learn another framework, or write a few more blog posts before you can help with this project.

I assure you, that’s not the case.

This document contains some contribution guidelines and best practices, but if you don’t get it right the first time we’ll try to help you fix it.

The contribution guidelines outline the process that you’ll need to follow to get a patch merged. By making expectations and process explicit, we hope it will make it easier for you to contribute.

And you don’t just have to write code. You can help out by writing documentation, tests, or even by giving feedback about this work. (And yes, that includes giving feedback about the contribution guidelines.)

Thank you for contributing! Have a great time!

### Local Setup
1) Fork this repository so that you have your own copy of the repository linked to your own github account.
2) Clone your forked copy to your local machine by going to the folder where you want to setup the project and then typing in the terminal/cmd `git clone https://github.com/<your-username>/POKEDEX.git` or if confused, copy the link from the green `CODE` button on the `Code` tab of your repository.
3) In order to then run the project locally, in your terminal/cmd change the directory to the `POKEDEX` directory, this can be done by typing `cd POKEDEX`.
4) Now inside the `POKEDEX` directory, install the required dependencies by typing `npm i` which can take some time.
5) The setup is now complete, in order to run the project, type `npm run start`, and after a few seconds the application will start on port 3000, and can be accessed by going to `localhost:3000` on your browser.
6) In order to close the program press `ctrl+c` in the same terminal/cmd.

### Contribution Workflow
1) First for every issue that you are going to be working on create a new branch by using `git branch -b <new-branch-name>`.
2) Now make the changes that you need to do, and test them by running the application locally and verifying them.
3) Once you feel that your work is done, commit your changes by first adding your changes using `git add .` then with `git commit -m "<enter-commit-message>"` you can commit your changes, and finally `git push origin <branch-name>` will push your changes from you local to your fork of the repository, from there you can then open a PR (Pull Request) for merging.
