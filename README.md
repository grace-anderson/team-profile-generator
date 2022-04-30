# Project: Team Profile Generator


[![](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)


## Table of Contents
  - [Project Description](#project-description)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  - [Screenshots](#screenshots)

## Project Description 
A high-quality README is essential when creating an open source project on GitHub. This README Generator both saves developers' time and improve README quality. The Generator enables the user to create a README markdown file with templated sections populated entering text content via the command line. Go to [GitHub](https://github.com/grace-anderson/readme-generator) for the README Generator code.

## Technologies
* JavaScript
* [npm inquirer package](https://www.npmjs.com/package/inquirer?activeTab=readme)
* [node](https://nodejs.org/en/)

## Installation
* You need a [GitHub](https://github.com/) account to access the README Generator code
* Install the README generator by forking the [readme-generator GitHub repository](https://github.com/grace-anderson/readme-generator) and then cloning the fork to your local repository.
* Then use your favourite command line tool (e.g. Visual Studio, Bash) to cd into the app folder. 
* Install the necessary packages `npm install`
* Run the app on the command line `node index.js`

## Usage
* Watch this [video](https://drive.google.com/file/d/15Pljiea03gQkiEsWdFbSY-if3CEJi5Oj/view?usp=sharing) for instructions and a demonstration of the README Generator's functionality
* See below for [screenshots](#screenshots) depicting more of the README Generator's functionality
* You can also find a README sample file in this repo ([README-sample.md](readme-generator/README-sample.md)) created using the Generator
* This [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) provides great hints and tips for creating a polished README
* After creating your README using the README Generator you may further edit and refine the README markdown file. For example, you may wish to add screenshots that visualise your project to your generated README markdown file
* You may update your local cloned README generator code to customise it to your needs. For example, if you usually list technology in your README add a "Technology" section. Remember you can also contribute to the [README Generator project](https://github.com/grace-anderson/readme-generator) following the Contribution Guidelines below.

## License
License covering this application: [MIT](https://opensource.org/licenses/MIT)

## Contribution Guidelines
* Contributions are welcome.
* The code is located in the [readme-generator repository](https://github.com/grace-anderson/readme-generator) 
* To contribute, open a new issue describing your proposed enhancement or fix.
  * Before contributing, browse through the open issues to see if your issue already exists or if there is an issue you might be able to solve. 
  * If you're a newbie dev, start contributing by looking for issues labelled "good first issue"
* It is good practice to set up your project repository as an "upstream" remote and synchronize with the project repository
  * Don't update the main branch. Rather create your own branch using a descriptive brief name
* You can create pull requests, but only admins can review and merge.
  * Be nice to your reviewer by adding adding a plain English explanation of your pull request and how your updates addresses the issue/s or enhancements it concerns
* Also see the [GitHub Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)

## Test Instructions
Use following tests to validate the functionality of the README Generator app.

GIVEN a command-line application that accepts user input 
1. WHEN I am prompted for information about my application repository THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Table of Contents, Description, Installation, Usage, License, Contribution Guidelines, Tests, and Questions
2. WHEN I enter my project title THEN this is displayed as the title of the README
3. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests
4. WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
5. WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
6. WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
7. WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README page.

## Questions 

If you have questions about the **Professional README Generator** project, feel free to [email](mailto:helen.g.anderson@me.com) the author, Helen Anderson.

See more of Helen Anderson's work on [GitHub](https://github.com/grace-anderson)

## Screenshots

### Screenshot showing completed prompts with success message. Text entered in text editor is confirmed as saved in the app by 'Received' stated by the prompt
![Screenshot showing completed prompts with success message. Text entered in text editor is confirmed as saved in the app by 'Received' stated by the prompt](/img/completed-prompts.png)

### Text formatted in markdown entered into the text editor
![Text formatted in markdown entered into the text editor](/img/formatted-markdown-in-text-editor.png)

### Saving text entered into the text editor
![Saving text entered into the text editor](/img/saving-text-entered-in-text-editor.png)

### Preview of generated README showing license badge
![Preview of generated README showing license badge](/img/readme-preview-with-license-badge.png)
