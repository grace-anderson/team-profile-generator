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
Every leader of a software development team must be able to plan a team roster. This Node.js command-line application takes in information about employees in a software engineering team, then generates an HTML webpage that displays summaries for each person. The roster can be easily recreated for changes in team manager, engineers or interns. In addition, this project demonstrates unit testing that should be a core practice of a software team, ensuring that code is maintainable. Go to [GitHub](https://github.com/grace-anderson/team-profile-generator) for the Team Profile Generator code.

## Technologies
* JavaScript
* HTML5
* [Bootstrap](https://getbootstrap.com/)
* [node](https://nodejs.org/en/)
* [npm inquirer package](https://www.npmjs.com/package/inquirer?activeTab=readme)
* [npm jest package](https://www.npmjs.com/package/jest)
* [npm @jest/types package](https://www.npmjs.com/package/@jest/types)

## Installation
* You need a [GitHub](https://github.com/) account to access the code
* Install the Team Member generator by forking the [team profile generator GitHub repository](https://github.com/grace-anderson/team-profile-generator) and then cloning the fork to your local repository.
* Then use your favourite command line tool (e.g. Visual Studio) to cd into the app folder. 
* Install the necessary packages `npm install`
* Run the app on the command line `node index.js`

## Usage
* Watch this TODO [video](https://drive.google.com/file/d/15Pljiea03gQkiEsWdFbSY-if3CEJi5Oj/view?usp=sharing) for instructions and a demonstration of the application's functionality
* See [screenshots](#screenshots) below depicting more of the application's functionality
* You can also find sample of the generated HTML file in this repo TODO ([README-sample.md](readme-generator/README-sample.md)) created using the Generator
* After creating your initial team profile, you may return to the generator to recreate the profile as employees change or when a new roster is needed.  
* You may contribute to the [Team Profile Generator project](https://github.com/grace-anderson/team-profile-generator) following the Contribution Guidelines below.

## License
License covering this application: [MIT](https://opensource.org/licenses/MIT)

## Contribution Guidelines
* Contributions are welcome.
* The code is located in the [team member generator repository](https://github.com/grace-anderson/team-profile-generator) 
* To contribute, open a new issue describing your proposed enhancement or fix.
  * Before contributing, browse through the open issues to see if your issue already exists or if there is an issue you might be able to solve. 
  * If you're a newbie dev, start contributing by looking for issues labelled "good first issue"
* It is good practice to set up your project repository as an "upstream" remote and synchronize with the project repository
  * Don't update the main branch. Rather create your own branch using a descriptive brief name
* You can create pull requests, but only admins can review and merge.
  * Be nice to your reviewer by adding adding a plain English explanation of your pull request and how your updates addresses the issue/s or enhancements it concerns
* Also see the [GitHub Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)

## Test Instructions
### Unit Testing
Run unit tests on the command line `npm run test`

### Feature Testing
Test using the following User Story and Acceptance Criteria to validate the features of the Team Profile Generator app.

#### User Story
AS A team manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles that I can use to confirm scheduling the team roster

#### Acceptance Criteria
GIVEN a command-line application that accepts user input 

1. WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
2. WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
3. WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
4. WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
5. WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
6. WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
7. WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
8. WHEN I decide to finish building my team
    THEN I exit the application, and the HTML file containing the team members and their details is generated

## Questions 

If you have questions about the **Team Profile Generator** project, feel free to [email](mailto:helen.g.anderson@me.com) the author, Helen Anderson.

See more of Helen Anderson's work on [GitHub](https://github.com/grace-anderson)

## Screenshots

TODO

### Screenshot showing completed prompts with success message. Text entered in text editor is confirmed as saved in the app by 'Received' stated by the prompt
![Screenshot showing completed prompts with success message. Text entered in text editor is confirmed as saved in the app by 'Received' stated by the prompt](/img/completed-prompts.png)

### Text formatted in markdown entered into the text editor
![Text formatted in markdown entered into the text editor](/img/formatted-markdown-in-text-editor.png)

### Saving text entered into the text editor
![Saving text entered into the text editor](/img/saving-text-entered-in-text-editor.png)

### Preview of generated README showing license badge
![Preview of generated README showing license badge](/img/readme-preview-with-license-badge.png)
